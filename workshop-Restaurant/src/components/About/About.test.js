/ AboutUs.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutUs from './AboutUs/AboutUs';

test('renders AboutUs component', () => {
  const { getByText } = render(<AboutUs />);
  
  expect(getByText('Вкусната храна и уютната обстановка')).toBeInTheDocument();
  expect(getByText('Ресторантът разполага с 2 салона, 2 градини (лятна и зимна) и 2 VIP сепарета.')).toBeInTheDocument();
  expect(getByText('Добре дошли!')).toBeInTheDocument();
});

test('shows reservation form when button is clicked', async () => {
  const { getByText, getByRole } = render(<AboutUs />);

  fireEvent.click(getByText('Заповядайте при нас'));

  await waitFor(() => {
    expect(getByRole('form')).toBeInTheDocument(); // Assuming your ReservationForm renders a form element
  });
});

test('hides reservation form after successful submission', async () => {
  const { getByText, getByRole } = render(<AboutUs />);

  fireEvent.click(getByText('Заповядайте при нас'));

  // Assuming your ReservationForm component has an input with a name attribute "name"
  fireEvent.change(getByRole('form').querySelector('input[name="name"]'), { target: { value: 'John Doe' } });

  fireEvent.submit(getByRole('form'));

  await waitFor(() => {
    expect(getByRole('form')).not.toBeInTheDocument();
  });
});