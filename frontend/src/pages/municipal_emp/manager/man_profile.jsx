import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import person from '../../../assets/person.jpg';
import '../../../scss/Manager/manager.scss';

function ManagerProf(){

    return(
        <>
        <div className="profile-overall">
            
            <div className='profile-header'>
            <Link to='/homepage'><FontAwesomeIcon icon={faArrowLeft} className="back-arrow" /></Link>
            <h1>PROFILE</h1>
            </div>

            <div className="profileContent">
                <img src={person} alt="persons profile"/>
                <p>Name: </p>
                <p>Email Address:</p>
                <p>Phone Number:</p>
                <p>Department: </p>
            </div>

        </div>

        </>
    )
}

export default ManagerProf