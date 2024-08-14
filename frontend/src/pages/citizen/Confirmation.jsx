import React from 'react';
import axios from 'axios'
import '../../scss/confirmation.scss';
import img1 from '../../assets/signup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Use the appropriate icon

const Confirmation = () => {
  const confirmIssue = async (issueId) => {
    try {

      //change the link
      const response = await axios.post('https://api.example.com/confirm-issue', {
        issueId: issueId
      });
      // Handle the response, e.g., show a success message
      console.log('Issue confirmed:', response.data);
    } catch (error) {
      // Handle errors
      console.error('There was an error confirming the issue!', error);
    }
  };
  return (
    <div>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-button"
        onClick={() => window.history.back()} // Go back to the previous page
      />
      <div className="content">
        <h1 className="confirm-button">Confirm Issue Resolved</h1>
        <img src={img1} alt="Issue Reporting Illustration" />
        <div className="issues">
          <div className="issue">
            <p>Water Supply Disruptions</p>
            <button className="issue-button">Confirm</button>
          </div>
          <div className="issue">
            <span>Roadway Maintenance Challenges</span>
            <button className="issue-button">Confirm</button>
          </div>
          <div className="issue">
            <span>Electricity Provision Concerns</span>
            <button className="issue-button">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
