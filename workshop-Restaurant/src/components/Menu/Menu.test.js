// Menu.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from './components/Menu/Menu';

jest.mock('react-modal');

test('renders Menu component with categories and items', async () => {
  const { getByText, getAllByRole } = render(<Menu />);
  
  expect(getByText('Нашето Меню')).toBeInTheDocument();

  // Check if categories are rendered
  expect(getByText('Основни ястия')).toBeInTheDocument();
  // Add more expectations for other categories

  // Check if items are rendered
  const menuItems = getAllByRole('listitem');
  expect(menuItems.length).toBeGreaterThan(0);
});

test('opens and closes modal on item button click', async () => {
  const { getByText, getByRole, queryByText } = render(<Menu />);
  
  // Click on the button of the first item in the menu
  fireEvent.click(getByText('Основни ястия').nextElementSibling.querySelector('button'));

  // Check if modal is opened
  expect(getByRole('dialog')).toBeInTheDocument();

  // Close the modal
  fireEvent.click(getByText('Затвори'));

  // Check if modal is closed
  expect(queryByText('Затвори')).toBeNull();
});
