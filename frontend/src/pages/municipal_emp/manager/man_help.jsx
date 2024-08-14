import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import '../../../scss/Manager/manager.scss';

function ManHelp() {
  return (
    <>
        <div className='help-header'>
            <Link to='/homepage'><FontAwesomeIcon icon={faArrowLeft} className="back-arrow" /></Link>
            <h1>HELP</h1>
         </div>

        <div className="help-questions">
            <h1>Frequently asked questions</h1>
            <ol>
              <li className="listItem">
                <p className="question">
                    Do I need to create a new account when I move?
                </p>
                <p className="answer">
                    Answer: No you don't need to create a new account, you just need to change your location on your profile
                </p>
              </li>
              
              <li className="listItem">
                <p className="question">
                  Do I need to have an account to view and report issues?
                </p>
                <p className="answer">
                  Answer: Yes, you need to sign up in order to use ESD.
                </p>
              </li>
              
              <li className="listItem">
                <p className="question">
                  Do I have to pay for ESD?
                </p>
                <p className="answer">
                  Answer: No, ESD is completely free!
                </p>
              </li>
              
              <li className="listItem">
                <p className="question">
                  Do you have a mobile app?
                </p>
                <p className="answer">
                  Answer: Yes, all you need to do is search "ESD" on Google Play Store.
                </p>
              </li>
              
              <li className="listItem">
                <p className="question">
                  How do I delete account?
                </p>
                <p className="answer">
                  Answer: Contact Customer Support to request accont deletion.
                </p>
              </li>
              
              <li className="listItem">
                <p className="question">
                  How can I contact customer support?
                </p>
                <p className="answer">
                  Answer: You can contact us via email at support@exsd.com or call us at (073) 123-6729.
                </p>
              </li>
            </ol>
            
        </div>
    </>
  )
}

export default ManHelp