import React from 'react'
import '../../../scss/Admin/monthlydetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const IssueDetail = () => {
  return (
    <div className="report-container">
      <div className="header">
       {/*  <button className="menu-button">&#9776;</button> */}
       <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-button"
        onClick={() => window.history.back()} // Go back to the previous page
      />
        <h1>July Report</h1>
      </div>
      <div className="content">
        <div className="left-section">
          <h2>Model Park</h2>
          <div className="image-placeholder">
            <span>Image</span>
          </div>
          <button className="download-button">Download Report</button>
        </div>
        <div className="right-section">
          <h3>Issues Reported:</h3>
          <ul>
            <li>Water</li>
            <li>Electricity</li>
            <li>Waste removal</li>
          </ul>
          <h3>Pending Issues</h3>
          <p>3</p>
          <h3>Department Comments</h3>
          <p>All reported issues are currently being attended to.</p>
          <h3>Community Comments</h3>
          <p></p>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">Monthly</div>
      </div>
    </div>
  );
};

export default IssueDetail