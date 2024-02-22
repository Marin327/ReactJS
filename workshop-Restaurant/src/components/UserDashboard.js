import React from 'react';

const UserDashboard = ({ username, onLogout }) => {
    return ( 
        <div>
        <h2>Добре Дошли{username}!</h2> 
        <button onClick={onLogout}>Изход</button>  
        </div>
    );
}

export default UserDashboard;