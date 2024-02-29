// OrderForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderForm from './components/Menu/OrderForm';

test('renders OrderForm component with form elements', () => {
  const { getByText, getByLabelText } = render(<OrderForm isOpen={true} onClose={() => {}} />);
  
  expect(getByText('Форма за поръчка')).toBeInTheDocument();
  expect(getByLabelText('Име на ястието:')).toBeInTheDocument();
  expect(getByLabelText('Количество:')).toBeInTheDocument();
  expect(getByText('Поръчай')).toBeInTheDocument();
});

test('updates state on input change', () => {
  const { getByLabelText } = render(<OrderForm isOpen={true} onClose={() => {}} />);
  
  fireEvent.change(getByLabelText('Име на ястието:'), { target: { value: 'Пържола' } });
  fireEvent.change(getByLabelText('Количество:'), { target: { value: '2' } });

  expect(getByLabelText('Име на ястието:').value).toBe('Пържола');
  expect(getByLabelText('Количество:').value).toBe('2');
});

test('calls onClose prop on form submit', () => {
  const mockOnClose = jest.fn();
  const { getByText } = render(<OrderForm isOpen={true} onClose={mockOnClose} />);
  
  fireEvent.submit(getByText('Поръчай'));

  expect(mockOnClose).toHaveBeenCalled();
});

// You can add more tests based on the behavior of your component.
