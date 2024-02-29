// MenuModal.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuModal from './components/MenuModal';

test('renders MenuModal component with input fields and button', () => {
  const { getByText, getByLabelText } = render(<MenuModal />);
  
  expect(getByText('Меню за поръчка')).toBeInTheDocument();
  expect(getByLabelText('Тел:')).toBeInTheDocument();
  expect(getByLabelText('Адрес:')).toBeInTheDocument();
  expect(getByLabelText('Желан час за доставка:')).toBeInTheDocument();
  expect(getByLabelText('Сума за плащане:')).toBeInTheDocument();
  expect(getByText('Потвърди поръчката')).toBeInTheDocument();
});

test('calls handleOrderSubmit prop with order details when button is clicked', () => {
  const mockHandleOrderSubmit = jest.fn();
  const { getByText, getByLabelText } = render(<MenuModal handleOrderSubmit={mockHandleOrderSubmit} />);
  
  fireEvent.change(getByLabelText('Тел:'), { target: { value: '123456789' } });
  fireEvent.change(getByLabelText('Адрес:'), { target: { value: 'Some Address' } });
  fireEvent.change(getByLabelText('Желан час за доставка:'), { target: { value: 'ASAP' } });
  fireEvent.change(getByLabelText('Сума за плащане:'), { target: { value: '20.00' } });

  fireEvent.click(getByText('Потвърди поръчката'));

  expect(mockHandleOrderSubmit).toHaveBeenCalledWith({
    contact: '123456789',
    address: 'Some Address',
    deliveryTime: 'ASAP',
    paymentAmount: '20.00',
  });
});
