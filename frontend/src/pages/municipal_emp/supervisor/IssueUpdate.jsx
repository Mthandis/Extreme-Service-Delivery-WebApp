import React, { useState } from 'react';
//import './IssueUpdate.scss';
import '../../../scss/Supervisor/IssueUpdate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Sample data (or you can fetch this from an API)
const initialReportedIssues = [
  {
    id: 1,
    reporter: 'John Doe',
    issue: 'Dirty water from the tap',
    dateReported: '2024-08-01',
    location: 'Main St. & 5th Ave.',
    status: 'Submitted', // Default status
  },
  {
    id: 2,
    reporter: 'Jane Smith',
    issue: 'No electricity',
    dateReported: '2024-08-02',
    location: 'Elm St. & Oak St.',
    status: 'Submitted', // Default status
  },
  {
    id: 3,
    reporter: 'Alice Johnson',
    issue: 'Pipe Burst',
    dateReported: '2024-08-03',
    location: 'Maple St. & 6th Ave.',
    status: 'Submitted', // Default status
  },
];

const IssueUpdate = () => {
  const [reportedIssues, setReportedIssues] = useState(initialReportedIssues);

  const handleStatusChange = (id, newStatus) => {
    setReportedIssues(prevIssues =>
      prevIssues.map(issue =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      )
    );
  };

  return (
    <div className="reported-issues-page">
        <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-button"
        onClick={() => window.history.back()} // Go back to the previous page
      />
      <h1>Reported Issues</h1>
      <div className="issues-list">
        {reportedIssues.map(issue => (
          <div key={issue.id} className="issue-card">
            <h2>{issue.issue}</h2>
            <p><strong>Reported by:</strong> {issue.reporter}</p>
            <p><strong>Date Reported:</strong> {issue.dateReported}</p>
            <p><strong>Location:</strong> {issue.location}</p>
            <p><strong>Status:</strong>
              <select
                value={issue.status}
                onChange={(e) => handleStatusChange(issue.id, e.target.value)}
              >
                <option value="Submitted">Submitted</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssueUpdate;
