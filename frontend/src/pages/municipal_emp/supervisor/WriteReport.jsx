import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import '../../../scss/Supervisor/writereport.scss';
import { Link } from 'react-router-dom';
import img2 from '../../../assets/logo.jpeg';

const ReportPage = () => {
  return (
    <div className="report-page-container">
      <div className="content">
        <img src={img2} alt="Logo" />
        <h2><u>Feedback to manager</u></h2>

        <div className="details-div">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email..."
          />
        </div>

        <textarea
          className="report-textarea"
          placeholder="Write your report here..."
        ></textarea>

        <Link to='/submittedreport'>
          <button className="submit-button">Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default ReportPage;
