import React from 'react';
import '../../../scss/Manager/manager.scss';
import person from '../../../assets/person.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBridgeWater, faCircleInfo, faHandcuffs, faLightbulb, faQuestionCircle, faRightFromBracket, faRoad, faUser} from '@fortawesome/free-solid-svg-icons'


function Landing() {
    const numbers = document.querySelectorAll('.number');
    const svgE1 = document.querySelectorAll('svg circle');
    const counters = Array(numbers.length);
    const intervals = Array(counters.length);
    counters.fill(0);

    numbers.forEach((number, index) =>{
        intervals[index] = setInterval(() => {
            if(counters[index] === parseInt(number.dataset.num)){
                clearInterval(counters[index]);
            }else{
                counters[index] += 1;
                number.innerHTML = counters[index] + "%";
                svgE1[index].style.strokeDashoffset = Math.floor(472 - 440 * parseFloat(number.dataset.num /100));
            }
        }, 20);
    });

    return (
        <div className="dashboard">

        <aside className='manager-sidebar'>
            <img src={person} className='profile-pic' alt='profile for manager'/>
            <h2>Name Surname</h2>
            <p className='email'>youremail@gmail.com</p>
            <Link to='/issues'><p className='link'><FontAwesomeIcon icon={faQuestionCircle} className='dash-icon'/> View Issues</p></Link>
            <Link to='/help'> <p className='link'><FontAwesomeIcon icon={faCircleInfo} className='dash-icon'/> Help</p> </Link>
            <Link to='/profile'><p className='link'><FontAwesomeIcon icon={faUser} className='dash-icon'/> Profile</p></Link>
            <Link to='/'><p className='link'><FontAwesomeIcon icon={faRightFromBracket} className='dash-icon'/> Sign out</p></Link>

        </aside>

            <div className='manager-header'>
            </div>
            
            <main className="man-content">
                <div className='progress-sec'>
                    <h3 className='progress-head'>Overview</h3>

                <div className='progress-bars-sec'>

                    <div className='progress-container'>
                        <div className='status'>
                            <div className='outer'>
                                <div className='inner'>
                                    <div className='number' data-num='85'>
                                        
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>
                            </div>
                            Resolved
                        </div>
                    </div>


                    <div className='progress-container'>
                        <div className='status'>
                            <div className='outer'>
                                <div className='inner'>
                                    <div className='number' data-num='5'>
                                        
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>
                            </div>
                            Unresolved
                        </div>
                    </div>

                    <div className='progress-container'>
                        <div className='status'>
                            <div className='outer'>
                                <div className='inner'>
                                    <div className='number' data-num='15'>
                                        
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>
                            </div>
                            In progess
                        </div>
                    </div>

                </div>
                </div>
                
                <div className='stats-update'>
                    <p className='update'>
                        At 50% progress there are very few issues resolved. This indicates a starting phase where initial efforts have been made, but the majority of tasks remain pending.
                    </p>
                </div>

                <div className='departments-sec'>

                    <h3 className='info-head'>Information Centre:</h3>

                    <div className='buttons-sec'>
                    <button className='department-btn'><FontAwesomeIcon icon={faLightbulb} className='icon-item1'/>
                    <span>Electricity</span></button>
                    <button className='department-btn'><FontAwesomeIcon icon={faRoad} className='icon-item2'/>
                    <span>Road and Transport</span></button>
                    <button className='department-btn'><FontAwesomeIcon icon={faBridgeWater} className='icon-item3'/>
                    <span>Water Supply and Infrastructure</span></button>
                    <button className='department-btn'><FontAwesomeIcon icon={faHandcuffs} className='icon-item4'/>
                    <span>Safety</span></button>
                    </div>
                </div>
    
                
            </main>

            <footer className="manager-footer">
                <h2>CONTACT US</h2>
                <p>060 104 4569</p>
                2024 by ESD ©
            </footer>
        </div>
    );
};

export default Landing;
