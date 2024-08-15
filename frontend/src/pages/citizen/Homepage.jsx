import React from 'react';
import '../../scss/homepage.scss'; 
import img1 from '../../assets/logo.jpeg';
import person from '../../assets/person.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPeopleGroup, faQuestionCircle, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

const Homepage = ({handleLogout}) => {
    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');

    return (
        <div className="citizen-dashboard">

        <aside className='sidebar'>
            <img src={person} className='profile-pic' alt=""/>
            <h2>{name} {surname}</h2> {/* Display the user's name and surname */}
            <Link to='/help'><p className='links'><FontAwesomeIcon icon={faQuestionCircle} className='dash-icon'/> Help</p></Link>
            <Link to='/about'><p className='links'><FontAwesomeIcon icon={faPeopleGroup} className='dash-icon'/> About Us</p></Link>
            <Link to='/settings'><p className='links'><FontAwesomeIcon icon={faGear} className='dash-icon'/> Settings</p></Link>
            <Link to='/logoutpage' onClick={handleLogout}><p className='links'><FontAwesomeIcon icon={faRightFromBracket} className='dash-icon'/> Sign out</p></Link>

        </aside>

            <div className='header'>
            </div>
            
            <main className="content">
                <img src={img1} alt=""/>
                <div className="home-buttons">
                
                    <Link to='/reportissue'><button>Report Issue</button></Link>
                    <Link to='/status'><button>View Issue Status</button></Link>
                    <Link to='/confirmation'><button>Confirm Issue Resolution</button></Link>
               
                </div>
            </main>

            <footer className="footer">
                Copyright©    @2024
            </footer>
        </div>
    );
};

export default Homepage;
