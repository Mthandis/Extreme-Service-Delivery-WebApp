

import React, { useState, useEffect } from 'react';
import '../../../scss/Supervisor/IssuesComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const IssuesComponent = () => {
  const [reportedIssues, setReportedIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API when the component mounts
    axios.get('/api/reported-issues')  // Update this URL to your actual API endpoint
      .then(response => {
        setReportedIssues(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="reported-issues-page">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-button"
        onClick={() => window.history.back()} // Go back to the previous page
      />

      <h1>Reported Issues</h1>
      <div className="issues-list">
        {reportedIssues.length === 0 ? (
          <p>No issues reported</p>
        ) : (
          reportedIssues.map(issue => (
            <div key={issue.id} className="issue-card">
              <h2>{issue.issue}</h2>
              <p><strong>Reported by:</strong> {issue.reporter}</p>
              <p><strong>Date Reported:</strong> {issue.dateReported}</p>
              <p><strong>Location:</strong> {issue.location}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default IssuesComponent;
