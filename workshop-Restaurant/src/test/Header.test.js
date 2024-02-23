import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with correct title', () => {
    render( < Header / > );
    const headerElement =
        screengetByText(/Ресторантът Ви/i);

    expect(headerElement).toBeInTheDocument();
});

test('renders navigation links', () => {
    render( < Header / > );
    const homeLink = screen.getByText(/Начало/i);
    const menuLink = screen.getByText(/Меню/i);
    const contactLink = screen.getByText(/Контакт/i);

    expect(homeLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
});