// Home.test.js
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './components/Home/Home';

// Mocking the modules/components used in Home component
jest.mock('./RegistrationButton', () => () => <div data-testid="registration-button">Registration Button</div>);
jest.mock('./MenuModal', () => ({ onClose }) => (
  <div data-testid="menu-modal">
    Menu Modal
    <button onClick={onClose}>Close</button>
  </div>
));

describe('Home Component', () => {
  test('renders Home component with loading message', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('renders Home component with restaurant name after fetching', async () => {
    const { getByText } = render(<Home />);
    await waitFor(() => {
      expect(getByText('Лилия')).toBeInTheDocument();
      expect(getByText('Ресторантът на Шеф Милена')).toBeInTheDocument();
    });
  });

  test('opens and closes menu modal on button click', async () => {
    const { getByText, getByTestId, queryByTestId } = render(<Home />);
    
    await waitFor(() => {
      fireEvent.click(getByText('ПОРЪЧАЙ ХРАНА'));
      expect(getByTestId('menu-modal')).toBeInTheDocument();

      fireEvent.click(getByText('Close'));
      expect(queryByTestId('menu-modal')).toBeNull();
    });
  });

  // Add more tests as needed for other functionalities and edge cases.
});
