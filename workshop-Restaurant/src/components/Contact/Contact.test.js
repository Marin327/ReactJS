// Contact.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './components/Contact/Contact';

test('renders Contact component with contact information', () => {
  const { getByText } = render(<Contact />);
  
  expect(getByText('Контакти')).toBeInTheDocument();
  expect(getByText('Адрес: Улица "Московска" 15, град София')).toBeInTheDocument();
  expect(getByText('Телефон: +359 2 123 4567')).toBeInTheDocument();
  expect(getByText('Имейл: info@restaurant.com')).toBeInTheDocument();
  expect(getByText('Работно време: Понеделник - Неделя: 9:00 ч. - 22:00 ч.')).toBeInTheDocument();
  expect(getByText('За допълнителни въпроси и резервации, не се колебайте да се свържете с нас!')).toBeInTheDocument();
});
