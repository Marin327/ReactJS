// RegistrationButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegistrationButton from './components/RegistrationButton';

test('renders RegistrationButton component with button', () => {
  const { getByText } = render(<RegistrationButton />);
  expect(getByText('Регистрирай се')).toBeInTheDocument();
});

test('toggles visibility of Registration component when button is clicked', () => {
  const { getByText, getByTestId } = render(<RegistrationButton />);
  
  const registrationButton = getByText('Регистрирай се');
  fireEvent.click(registrationButton);

  expect(getByTestId('registration-container')).toHaveClass('visible');

  fireEvent.click(registrationButton);

  expect(getByTestId('registration-container')).not.toHaveClass('visible');
});
