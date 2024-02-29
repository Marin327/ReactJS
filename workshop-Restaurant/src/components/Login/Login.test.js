// Login.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './components/Login/Login';

test('renders Login component with input fields and button', () => {
  const { getByText, getByLabelText } = render(<Login />);
  
  expect(getByText('Вход')).toBeInTheDocument();
  expect(getByLabelText('Потребителско име:')).toBeInTheDocument();
  expect(getByLabelText('Парола:')).toBeInTheDocument();
  expect(getByText('Влез')).toBeInTheDocument();
});

test('calls onLogin prop with username when login button is clicked', () => {
  const mockOnLogin = jest.fn();
  const { getByText, getByLabelText } = render(<Login onLogin={mockOnLogin} />);
  
  fireEvent.change(getByLabelText('Потребителско име:'), { target: { value: 'john_doe' } });
  fireEvent.change(getByLabelText('Парола:'), { target: { value: 'password123' } });
  fireEvent.click(getByText('Влез'));

  expect(mockOnLogin).toHaveBeenCalledWith('john_doe');
});

test('displays alert when username or password is missing', () => {
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  const { getByText } = render(<Login />);
  
  fireEvent.click(getByText('Влез'));

  expect(mockAlert).toHaveBeenCalledWith('Моля, въведете потребителско име и парола.');

  // Restore the original alert function
  mockAlert.mockRestore();
});
