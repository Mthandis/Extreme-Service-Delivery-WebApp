import '../../scss/status.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Use the appropriate icon

function Status(){
    return(
        <div>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-button"
          onClick={() => window.history.back()} // Go back to the previous page
        />
        <>
        <div className='status-heading'>
            <h1>Issue Report Status</h1>
        </div>

        <div className='status-bar'>
            <ul className='status-list'>
                <li className='status-item'>
                    <span className='progress-count'>1 </span>
                    <span className='progress-label'>Issue Received</span>
                </li>

                <li className='status-item current-item'>
                    <span className='progress-count'>2 </span>
                    <span className='progress-label'>In progress</span>
                </li>

                <li className='status-item'>
                    <span className='progress-count'>3 </span>
                    <span className='progress-label'>Issue Resolved</span>
                </li>
            </ul>
        </div>

        <div className='report-details'>
            <h2>Issue Report Details</h2>
            <div className='p-status'>
            <p>Report ID:</p>
            <p>Report Issue Type:</p>
            <p>Report Date:</p>
            </div>

            <Link to='/homepage'><button type='button' className='done-btn'>Done</button></Link>
        </div>
        </>
        </div>
    )
}

export default Status;
