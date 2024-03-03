import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Rooms from './Rooms/Rooms';
import ReservationForm from './ReservationForm/ReservationForm';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';

import './App.css';

const App = () => {
  const currentPath = window.location.pathname;

  return (
    <div className="app">
      <Header />
      <div className="content">
        {/* Използвай условни оператори за показване на компонентите */}
        {currentPath === '/' && <Home />}
        {currentPath === '/contact' && <Contact />}
        {currentPath === '/rooms' && <Rooms />}
        {currentPath === '/reservation' && <ReservationForm />}
        {currentPath === '/gallery' && <Gallery />}
      </div>
    </div>
  );
}

export default App;