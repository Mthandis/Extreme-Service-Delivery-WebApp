
import React, { useState } from 'react';
import '../../../scss/Admin/addemployee.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Forms = () => {
    const [activeForm, setActiveForm] = useState('admin');

    const handleFormSwitch = (formType) => {
        setActiveForm(formType);
    };

    const handleSubmit = (e, formType) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        axios.post(`https://your-api-endpoint.com/${formType}`, data)
            .then(response => {
                console.log('Form submitted successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            });
    };

    return (
        <div className="form-container">
            <nav>
                <button onClick={() => handleFormSwitch('admin')}>Admin</button>
                <button onClick={() => handleFormSwitch('manager')}>Manager</button>
                <button onClick={() => handleFormSwitch('supervisor')}>Super</button>
            </nav>

            {/* Admin Form */}
            {activeForm === 'admin' && (
                <form id="admin-form" onSubmit={(e) => handleSubmit(e, 'admin')}>
                    <h2>Admin Form</h2>
                    <label htmlFor="admin-name">Name:</label>
                    <input type="text" id="admin-name" name="name" required />
                    <label htmlFor="admin-email">Email:</label>
                    <input type="email" id="admin-email" name="email" required />
                    <label htmlFor="admin-password">Password:</label>
                    <input type="password" id="admin-password" name="password" required />
                    <button type="submit">Submit</button>
                </form>
            )}

            {/* Manager Form */}
            {activeForm === 'manager' && (
                <form id="manager-form" onSubmit={(e) => handleSubmit(e, 'manager')}>
                    <h2>Manager Form</h2>
                    <label htmlFor="manager-empID">Employee ID:</label>
                    <input type="text" id="manager-empID" name="empID" required />
                    <label htmlFor="manager-name">Name:</label>
                    <input type="text" id="manager-name" name="name" required />
                    <label htmlFor="manager-surname">Surname:</label>
                    <input type="text" id="manager-surname" name="surname" required />
                    <label htmlFor="manager-email">Email:</label>
                    <input type="email" id="manager-email" name="email" required />
                    <label htmlFor="manager-contact">Contact:</label>
                    <input type="text" id="manager-contact" name="contact" required />
                    <label htmlFor="manager-deptID">Department ID:</label>
                    <input type="text" id="manager-deptID" name="deptID" required />
                    <label htmlFor="manager-password">Password:</label>
                    <input type="password" id="manager-password" name="password" required />
                    <button type="submit">Submit</button>
                </form>
            )}

            {/* Supervisor Form */}
            {activeForm === 'supervisor' && (
                <form id="supervisor-form" onSubmit={(e) => handleSubmit(e, 'supervisor')}>
                    <h2>Supervisor Form</h2>
                    <label htmlFor="supervisor-empID">Employee ID:</label>
                    <input type="text" id="supervisor-empID" name="empID" required />
                    <label htmlFor="supervisor-name">Name:</label>
                    <input type="text" id="supervisor-name" name="name" required />
                    <label htmlFor="supervisor-surname">Surname:</label>
                    <input type="text" id="supervisor-surname" name="surname" required />
                    <label htmlFor="supervisor-email">Email:</label>
                    <input type="email" id="supervisor-email" name="email" required />
                    <label htmlFor="supervisor-contact">Contact:</label>
                    <input type="text" id="supervisor-contact" name="contact" required />
                    <label htmlFor="supervisor-specialization">Specialization:</label>
                    <input type="text" id="supervisor-specialization" name="specialization" required />
                    <label htmlFor="supervisor-password">Password:</label>
                    <input type="password" id="supervisor-password" name="password" required />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Forms;
