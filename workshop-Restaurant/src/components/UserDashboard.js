import React from 'react';
import '../styles/UserDashboard.css';

const UserDashboard = ({ username, onLogout }) => {
    return ( 
        <div className="user-dashboard-container">
        <h2>Добре Дошли{username}!</h2> 
        <button onClick={onLogout}>Изход</button>  
        </div>
    );
}

export default UserDashboard;