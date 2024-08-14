import React from 'react';

import '../../../scss/Supervisor/SignOutPage.scss';

import tickImage from '../../../assets/logouttick.png'; 

import { Link } from 'react-router-dom';

const SignOutPage = () => {
  return (
    <div className="signout-page">
      <div className="signout-container">
        <img src={tickImage} alt="Tick" className="tick-image" />
        <h1>Signed Out</h1>
        <p>You have successfully signed out</p>
        <p>You are advised to close the browser.</p>
        <Link to= '/'><button className="ok-button">OK</button></Link>
      </div>
    </div>
  );
};

export default SignOutPage;
