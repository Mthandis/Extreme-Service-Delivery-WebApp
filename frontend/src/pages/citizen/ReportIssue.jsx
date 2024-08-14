import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/reportIssue.scss'; // Importing the SASS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Use the appropriate icon

const ReportIssue = () => {
    return (
        <div className='.goback-button'>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-button"
          onClick={() => window.history.back()} // Go back to the previous page
        />
        <div className="container">
            <h1>Report Issue</h1>
            <form>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" placeholder="Enter location" />

                <label htmlFor="issue">Select an issue below:</label>
                <select id="issue" name="issue" >
                <option value="" disabled selected hidden>Select an option</option>
                    <option value="crime">Crime</option>
                    <option value="electricity">Electricity</option>
                    <option value="water">Water</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="description">Description of issue:</label>
                <textarea id="description" name="description" rows="4" placeholder="Describe the issue in detail"></textarea>
                
                <Link to='/homepage'><button type="submit" className='submit-issue-button'>Submit</button></Link>
            </form>
        </div>
        </div>
    );
}

export default ReportIssue;
