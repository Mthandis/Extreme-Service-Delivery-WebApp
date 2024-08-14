import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import '../../../scss/Admin/adminhome.scss';
import { Link } from 'react-router-dom';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Issues per Month',
      data: [12, 19, 3, 5, 2, 3, 9, 15, 20, 40, 44, 50],
      backgroundColor: '#575757',
      borderColor: '#575757',
      borderWidth: 1,
    },
  ],
};

const AdminHome = () => {
  return (
    <div className="maindiv">
      <aside className="menu-aside">
      <header>
        <div className="profile-section">
          <div className="profile-image"> {/* Placeholder for profile image */}
            <img src="profile-placeholder.png" alt="Profile" />
          </div>
          <div className="profile-name">Name Surname</div>
        </div>
      </header>
      <div className="menu-content">
        <ul className="menu-list">
         <Link to ='/addemployees'> <li className="menu-item">Create User Accounts</li></Link>
         <Link to ='/monthly'> <li className="menu-item">Generate Reports</li></Link>
        </ul>
      </div>
      <footer className="menu-footer">
        <p>Copyright @2024</p>
      </footer>
    </aside>
    <main>
    <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <div className="main-section">
          <div className="logo">
           
            <h2>Extreme Service Delivery</h2>
          </div>
        </div>
        <div className="charts">
          <div className="chart">
            <h2>Issues per Month</h2>
            <Bar data={barData} />
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};


export default AdminHome;