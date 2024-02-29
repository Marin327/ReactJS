// Header.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './components/Header/Header';

test('renders Header component with buttons', () => {
  const { getByText } = render(<Header />);
  
  expect(getByText('ЗА НАС')).toBeInTheDocument();
  expect(getByText('КОНТАКТИ')).toBeInTheDocument();
  expect(getByText('РЕГИСТРАЦИЯ')).toBeInTheDocument();
  expect(getByText('ВЛИЗАНЕ')).toBeInTheDocument();
  expect(getByText('МЕНЮ')).toBeInTheDocument();
});

test('calls onComponentChange prop when a button is clicked', () => {
  const mockOnComponentChange = jest.fn();
  const { getByText } = render(<Header onComponentChange={mockOnComponentChange} />);
  
  fireEvent.click(getByText('ЗА НАС'));
  expect(mockOnComponentChange).toHaveBeenCalledWith('aboutUs');

  fireEvent.click(getByText('КОНТАКТИ'));
  expect(mockOnComponentChange).toHaveBeenCalledWith('contact');

  fireEvent.click(getByText('РЕГИСТРАЦИЯ'));
  expect(mockOnComponentChange).toHaveBeenCalledWith('registration');

  fireEvent.click(getByText('ВЛИЗАНЕ'));
  expect(mockOnComponentChange).toHaveBeenCalledWith('login');

  fireEvent.click(getByText('МЕНЮ'));
  expect(mockOnComponentChange).toHaveBeenCalledWith('menu');
});
