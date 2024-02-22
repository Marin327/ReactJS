import React, { useState } from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Registration from './components/Registration';
import Login from './components/Login';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './components/Home';

import './App.css';  // Добавете този ред

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="app-container">
      <Header onComponentChange={handleComponentChange} />
      <div><Home /></div>
      {activeComponent === 'aboutUs' && <div className="component-container"><AboutUs /></div>}
      {activeComponent === 'contact' && <div className="component-container"><Contact /></div>}
      {activeComponent === 'registration' && <div className="component-container"><Registration /></div>}
      {activeComponent === 'login' && <div className="component-container"><Login /></div>}
      {activeComponent === 'menu' && <div className="component-container"><Menu /></div>}
      <Footer />
    </div>
  );
};

export default App;

