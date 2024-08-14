import React from 'react';
//import '../Admin/styles/main.scss'
import '../../../scss/Admin/monthly.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Reports = () => {
  return (
    <div className="reports-container">
      <header className="header">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-button"
        onClick={() => window.history.back()} // Go back to the previous page
      />
        <h1>Reports</h1>
      </header>
      <div className="reports-content">
        <h2>Monthly reports</h2>
        <p>Increased issues in Del Judo</p>
        <div className="report-cards">
          <div className="report-card">
            <div className="report-image"></div>
            <h3>Del Judo</h3>
            <Link to= '/issuedetail'><button className="view-button">View</button></Link>
          </div>
          <div className="report-card">
            <div className="report-image"></div>
            <h3>Ben Fluer</h3>
            <Link to= '/issuedetail'><button className="view-button">View</button></Link>
          </div>
          <div className="report-card popular">
            <div className="report-image"></div>
            <h3>Model Park</h3>
            <Link to= '/issuedetail'><button className="view-button">View</button></Link>
          </div>
        </div>
      </div>
      <footer className="footer">
        <button className="footer-button">Monthly Report</button>
      <Link to='/issuepanding' > <button className="footer-button">Issue Report</button></Link>
      </footer>
    </div>
  );
};

export default Reports;
