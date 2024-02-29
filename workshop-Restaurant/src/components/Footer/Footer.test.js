// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './components/Footer/Footer';

test('renders Footer component', () => {
  const { getByText } = render(<Footer />);
  
  expect(getByText('©2024 Всички права запазени.')).toBeInTheDocument();
});

test('footer has the correct class', () => {
  const { container } = render(<Footer />);
  const footerElement = container.querySelector('footer');

  expect(footerElement).toHaveClass('footer');
});
