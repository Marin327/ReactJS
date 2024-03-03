import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Rooms from './Rooms/Rooms';
import ReservationForm from './ReservationForm/ReservationForm';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';

import './App.css';

const App = () => {
  return (
    <div>
      <div className="app">
        <Header />
        {/* Използвайте условни оператори за показване на компонентите */}
        {window.location.pathname === '/' && <Home />}
        {window.location.pathname === '/contact' && <Contact />}
        {window.location.pathname === '/rooms' && <Rooms />}
        {window.location.pathname === '/reservation' && <ReservationForm />}
        {window.location.pathname === '/gallery' && <Gallery />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
