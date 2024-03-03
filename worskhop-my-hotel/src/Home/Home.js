import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const Home = () => {
  const homeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
  });

  return (
    <animated.div style={homeAnimation} className="home">
      <h1>Добре дошли в Хотел Парадайс</h1>
      <p>Преживейте лукс и комфорт в сърцето в село Баня</p>
    </animated.div>
  );
}

export default Home;