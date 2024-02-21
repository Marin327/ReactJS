import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return ( 
        <header className='header'>
        <h1>Ресторантът Нашенска кухня!</h1> 
        <nav>
        <ul>
            
        <li><a href='/'>Начало</a></li>
        <li><a href='/menu'>Меню</a></li>
        <li><a href='/contact'>Контакт</a></li>
        </ul> 
        </nav> 
        </header>
    );
}

export default Header;