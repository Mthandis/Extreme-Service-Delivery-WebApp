import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/reportIssue.scss'; // Importing the SASS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ReportIssue = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        location: '',
        description: '',
        issueCategory: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'http://localhost:5000/api/issue/report-issue',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            alert(response.data.message);
            navigate('/homepage'); // Redirect to the homepage after successful submission
        } catch (error) {
            console.error(error);
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className='goback-button'>
            <FontAwesomeIcon
                icon={faArrowLeft}
                className="back-button"
                onClick={() => window.history.back()} // Go back to the previous page
            />
            <div className="container">
                <h1>Report Issue</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter location"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <label htmlFor="issueCategory">Select an issue below:</label>
                    <select
                        id="issueCategory"
                        name="issueCategory"
                        value={formData.issueCategory}
                        onChange={handleChange}
                    >
                        <option value="" disabled selected hidden>Select a Category</option>
                        <option value="crime">Crime</option>
                        <option value="electricity">Electricity</option>
                        <option value="water">Water</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="description">Description of issue:</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        placeholder="Describe the issue in detail"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                    
                    <button type="submit" className='submit-issue-button'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ReportIssue;