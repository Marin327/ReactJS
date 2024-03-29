import React, { useState } from 'react';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin(username);
    } else {
      alert('Моля, въведете потребителско име и парола.');
    }
  };

  return (
    <div className="login-container">
      <h2>Вход</h2>
      <label>
        Потребителско име:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Парола:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Влез</button>
    </div>
  );
};

export default Login;

