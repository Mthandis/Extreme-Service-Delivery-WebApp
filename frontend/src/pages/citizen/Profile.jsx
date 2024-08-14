import React from 'react';
import '../../scss/profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ user }) => {
  if (!user) {
    return (
      <div className="profile-page">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-button"
          onClick={() => window.history.back()} // Go back to the previous page
        />
        <div className="container">
          <h1>Profile</h1>
          <p>User information not available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='full-profile'>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="back-button"
        onClick={() => window.history.back()} // Go back to the previous page
      />
      <div className="profile-page">
        <div className="container">
          <h1>Profile</h1>

          <section className="section">
            <h2>Personal Information</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </section>

          <section className="section">
            <h2>Preferences</h2>
            <p><strong>Email Notifications:</strong> {user.emailNotifications ? 'Enabled' : 'Disabled'}</p>
            <p><strong>SMS Notifications:</strong> {user.smsNotifications ? 'Enabled' : 'Disabled'}</p>
          </section>

          <section className="section">
            <h2>Privacy Settings</h2>
            <p><strong>Profile Visibility:</strong> {user.profileVisibility}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
