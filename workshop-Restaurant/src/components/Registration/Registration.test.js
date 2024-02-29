// Registration.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Registration from './components/Registration';

test('renders Registration component with initial state', () => {
  const { getByText, getByLabelText } = render(<Registration />);
  
  expect(getByText('Регистрация')).toBeInTheDocument();
  expect(getByLabelText('Потребителско име:')).toBeInTheDocument();
  expect(getByLabelText('Парола:')).toBeInTheDocument();
  expect(getByLabelText('Повтори парола:')).toBeInTheDocument();
  expect(getByText('Регистрирай се')).toBeInTheDocument();
});

test('toggles visibility when header is clicked', () => {
  const { getByText, getByTestId } = render(<Registration />);
  
  const registrationHeader = getByText('Регистрация');
  fireEvent.click(registrationHeader);

  expect(getByTestId('registration-container')).toHaveClass('visible');

  fireEvent.click(registrationHeader);

  expect(getByTestId('registration-container')).not.toHaveClass('visible');
});

test('calls onRegister prop with form data when submitted', () => {
  const mockOnRegister = jest.fn();
  const { getByLabelText, getByText } = render(<Registration onRegister={mockOnRegister} />);
  
  fireEvent.change(getByLabelText('Потребителско име:'), { target: { value: 'testuser' } });
  fireEvent.change(getByLabelText('Парола:'), { target: { value: 'password' } });
  fireEvent.change(getByLabelText('Повтори парола:'), { target: { value: 'password' } });

  fireEvent.submit(getByText('Регистрирай се'));

  expect(mockOnRegister).toHaveBeenCalledWith({
    username: 'testuser',
    password: 'password',
    confirmPassword: 'password',
  });
});

test('shows alert when passwords do not match', () => {
  const { getByLabelText, getByText, getByRole } = render(<Registration />);
  
  fireEvent.change(getByLabelText('Парола:'), { target: { value: 'password' } });
  fireEvent.change(getByLabelText('Повтори парола:'), { target: { value: 'differentpassword' } });

  fireEvent.submit(getByText('Регистрирай се'));

  expect(getByRole('alert')).toBeInTheDocument();
});
