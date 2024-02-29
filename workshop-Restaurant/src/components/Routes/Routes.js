// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import About from '../About/About';  // Променено име на компонента
import ReservationForm from '../About/ReservationForm'; 
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import UserDashboard from '../UserDashboard/UserDashboard';

const Routes = ({ isAuthenticated, username, onLogout }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/reservation" element={<ReservationForm />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/header" element={<Header />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/dashboard"
        element={
          isAuthenticated ? (
            <UserDashboard username={username} onLogout={onLogout} />
          ) : (
            <Login />
          )
        }
      />
      {/* Добавете други пътища и компоненти според вашите нужди */}
    </Routes>
  );
};

export default Routes;