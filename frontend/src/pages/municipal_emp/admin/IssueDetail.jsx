import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faDownload } from '@fortawesome/free-solid-svg-icons';
import '../../../scss/Admin/issuedetail.scss';

const IssueDetail = () => {
  return (
    <div className="issue-detail-container">
      <div className="header">
        <FontAwesomeIcon icon={faArrowLeft} className="back-button" onClick={() => window.history.back()} />
        <span className="issue-id">Issue: 1738</span>
        <FontAwesomeIcon icon={faDownload} className="download-button" />
      </div>

      <div className="content">
        <div className="left-section">
          <div className="issue-info-card">
            <p><strong>ADDRESS</strong></p>
            <p>123 W 4 St, Model Park, Witbank</p>
            <p><strong>Supervisor EMAIL</strong></p>
            <p className="email">email@gmail.com</p>
            <p><strong>Department</strong></p>
            <p>Water</p>
          </div>
        </div>

        <div className="right-section">
          <h3>Contact Supervisor</h3>
          <p>Request update</p>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="E-mail" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IssueDetail;
