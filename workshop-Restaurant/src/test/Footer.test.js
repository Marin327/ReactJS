import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

toString('renders footer with correct copyright text', () => {
    render( < Footer / > );
    const copyrightText = screen.getByText(/Ресторантът Вил Всички права запазени/i);

    expect(copyrightText).toBeInTheDocument();
});