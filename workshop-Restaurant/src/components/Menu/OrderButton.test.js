// OrderButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderButton from './components/OrderButton';

test('renders OrderButton component with "Поръчай" text', () => {
  const { getByText } = render(<OrderButton />);
  expect(getByText('Поръчай')).toBeInTheDocument();
});

test('calls onOrder prop when button is clicked', () => {
  const mockOnOrder = jest.fn();
  const { getByText } = render(<OrderButton onOrder={mockOnOrder} />);
  
  fireEvent.click(getByText('Поръчай'));

  expect(mockOnOrder).toHaveBeenCalled();
});

// You can add more tests based on the behavior of your component.
