import React from 'react'
//import '../Admin/styles/main.scss'
import '../../../scss/Admin/addemployee.scss';
import { Link } from 'react-router-dom';


const  AddEmployment = () => {
    
        const handleSubmit = (event) => {
          event.preventDefault();
          // Add form validation and submission logic here
          console.log('Form submitted'); // Handle form submission
        };
      
        return (
          <div className='form-section'>
            <div className='form-heading'>
              
              <h1>Create User</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='details-div'>
                <span className='icon'></span>
                <input type='text' className='userId' id='userId' placeholder='User Id' />
              </div>
              <div className='details-div'>
                <span className='icon'></span>
                <input type='text' className='name' id='name' placeholder='Name' />
              </div>
              <div className='details-div'>
                <span className='icon'></span>
                <input type='text' className='surname' id='surname' placeholder='Surname' />
              </div>
              <div className='details-div'>
                <span className='icon'></span>
                <input type='email' className='email' id='email' placeholder='Email' />
              </div>
              <div className='details-div'>
                <span className='icon'></span>
                <input type='text' className='contact' id='contact' placeholder='Contact' />
              </div> 
              <div className='details-div'>
                <span className='icon'></span>
                <input type='password' className='password' id='password' placeholder='Password' />
              </div>
              <div className='details-div'>
                <span className='icon'></span>
                <select className='role' id='role'>
                  <option value="">Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">Manger</option>
                  <option value="user">Supervisor</option>
                </select>
              </div>
              <div className='details-div'>
                <span className='icon'></span>
                <select className='department' id='department'>
                  <option value="">Department</option>
                  <option value="Water">Water</option>
                  <option value="Road">Road</option>
                  <option value="Electricity">Electricity</option>
                </select>
              </div>
              <Link to= '/usercreated'><button type='submit' className='btn btn-block'>Create User</button></Link>

            </form>
          </div>
        );
      }
    
    
    

export default AddEmployment;
