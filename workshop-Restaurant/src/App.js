import React, { useState } from 'react';

import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer'
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const handleLogin = (username) => setLoggedInUser(username);

        const handleRegister = (username) => setLoggedInUser(username);

            const handleLogout = () => {
              setLoggedInUser(null);
            };
        
        return (
          <div className="app-container" > 
          {loggedInUser ? (
                  <UserDashboard 
                  username={loggedInUser} 
                  onLogout={handleLogout} />
                ) : (
                  <div>
                    <Login 
                    onLogin={handleLogin} />    
                    <Register 
                    onRegister={handleRegister} /> 
                    </div>
                    )} 
                   <Header />
                    <Menu />
                    <Footer />
                    <AboutUs />
                    <Contact />
                    </div>
                    );
    }
  
 export default App;