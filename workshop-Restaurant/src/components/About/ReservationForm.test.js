// ReservationForm.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReservationForm from './components/AboutUs/ReservationForm';

test('renders ReservationForm component with form fields and button', () => {
  const { getByLabelText, getByText } = render(<ReservationForm />);
  
  expect(getByLabelText('Име:')).toBeInTheDocument();
  expect(getByLabelText('Дата:')).toBeInTheDocument();
  expect(getByLabelText('Час:')).toBeInTheDocument();
  expect(getByText('Резервирай')).toBeInTheDocument();
});

test('calls onReservationSubmit prop with form data when submitted', () => {
  const mockOnReservationSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<ReservationForm onReservationSubmit={mockOnReservationSubmit} />);
  
  fireEvent.change(getByLabelText('Име:'), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText('Дата:'), { target: { value: '2024-03-01' } });
  fireEvent.change(getByLabelText('Час:'), { target: { value: '18:30' } });

  fireEvent.submit(getByText('Резервирай'));

  expect(mockOnReservationSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    date: '2024-03-01',
    time: '18:30',
  });
});
