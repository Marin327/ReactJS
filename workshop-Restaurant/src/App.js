import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import ReservationForm from './components/About/ReservationForm'; 
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import UserDashboard from './components/UserDashboard/UserDashboard';

import '../src/App.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname.replace('/', '');
    setActiveComponent(path || 'home');
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header onComponentChange={(component) => {
          setActiveComponent(component);
          navigate(`/${component}`);
        }} />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/reservation">Reservation Form</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
        {activeComponent === 'about' && <div className="about-us">About Us Content</div>}
        {activeComponent === 'reservationForm' && <div className="reservationForm">Reservation Form Content</div>}
        {activeComponent === 'contact' && <div className="contact">Contact Content</div>}
        {activeComponent === 'registration' && <div className="registration">Registration Content</div>}
        {activeComponent === 'login' && <div className="login">Login Content</div>}
        {activeComponent === 'menu' && <div className="menu">Menu Content</div>}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;