import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../scss/reportIssue.scss'; // Importing the SASS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Use the appropriate icon

const ReportIssue = () => {
  // State to manage form inputs
  const [location, setLocation] = useState('');
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        location,
        issue,
        description
      });

      // Handle success
      setSuccess('Issue reported successfully!');
      setError(null);
      console.log('Issue reported:', response.data);
    } catch (error) {
      // Handle error
      setError('Failed to report the issue. Please try again.');
      setSuccess(null);
      console.error('There was an error reporting the issue!', error);
    }
  };

  return (
    <div className="goback-button">
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />

          <label htmlFor="issue">Select an issue below:</label>
          <select
            id="issue"
            name="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          >
            <option value="" disabled hidden>Select an option</option>
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue in detail"
          ></textarea>

          <button type="submit" className="submit-issue-button">Submit</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
}

export default ReportIssue;
