import React from 'react';
import '../../scss/settings.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="goback-button"
        onClick={() => window.history.back()} // Go back to the previous page
      />
      <div className="settings-page">
        <div className="container">
          <h1>Settings</h1>

          <section className="section">
            <h2>Account Information</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Enter new username:</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Enter new email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <button type="submit" className="btn-save">Save Changes</button>
            </form>
          </section>

          <section className="section">
            <h2>Change Password</h2>
            <form>
              <div className="form-group">
                <label htmlFor="current-password">Current Password:</label>
                <input type="password" id="current-password" name="current-password" />
              </div>
              <div className="form-group">
                <label htmlFor="new-password">New Password:</label>
                <input type="password" id="new-password" name="new-password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm New Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" />
              </div>
              <button type="submit" className="btn-save">Change Password</button>
            </form>
          </section>

          <section className="section">
            <h2>Notification Preferences</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email-notifications">Email Notifications:</label>
                <input type="checkbox" id="email-notifications" name="email-notifications" />
              </div>
              <div className="form-group">
                <label htmlFor="sms-notifications">SMS Notifications:</label>
                <input type="checkbox" id="sms-notifications" name="sms-notifications" />
              </div>
              <button type="submit" className="btn-save">Save Preferences</button>
            </form>
          </section>

          <section className="section">
            <h2>Account Deletion</h2>
            <p>If you wish to delete your account, please contact our support team at <a href="mailto:support@extremeservice.com">support@extremeservice.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
