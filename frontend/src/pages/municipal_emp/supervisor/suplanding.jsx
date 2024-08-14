import React from 'react';
//import '../scss/supervisor.scss'; 
import '../../../scss/Supervisor/supervisor.scss';

//import img1 from '../assets/signup.png';
import img1 from '../../../assets/person.jpg';
import img2 from '../../../assets/logo.jpeg';
//import person from '../assets/person.jpg';
import person from '../../../assets/person.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faPeopleGroup, faQuestionCircle, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'


const Suplanding = () => {
    return (
        <div className="dashboard">

        <aside className='supervisor-sidebar'>
            <img src={person} className='profile-pic'/>
            <h2>Name Surname</h2>
            <p className='email'>youremail@gmail.com</p>

            <Link to='/help'><p className='links'><FontAwesomeIcon icon={faQuestionCircle} /> Help</p></Link>
            <Link to='/about'><p className='links'><FontAwesomeIcon icon={faPeopleGroup} /> About Us</p></Link>
            <Link to='/settings'><p className='links'><FontAwesomeIcon icon={faGear} /> Settings</p></Link>
            <Link to='/'><p className='links'><FontAwesomeIcon icon={faRightFromBracket} /> Sign out</p></Link>

        </aside>

            <div className='supervisor-header'>
            </div>
            
            <main className="content">
                <img src={img2}/>
                <div>
                    <Link to= '/issuesComponent'><button className='supervisor-button'>View Assigned Issues</button></Link>
                    <Link to= '/issueupdate'><button className='supervisor-button'>Update Issue Status</button></Link>
                    <Link to= '/writereport'><button className='supervisor-button'>Write Report</button></Link>
                </div>
            </main>

            <footer className="supervisor-footer">
                Copyright ©
            </footer>
        </div>
    );
};

export default Suplanding;