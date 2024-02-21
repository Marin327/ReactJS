import React from 'react';
import { render, screen } from './@testing-library/react';
import Menu from './Menu';

test('renders menu with title', () => {
    render( < Menu / > );
    const menuTitle = screen.getByText(/Нашето меню/i);
    expect(menuTitle).toBeInDocument();
});

test('renders menu items with correct information', () => {
            const menuItems = [{
                    id: 1,
                    name: 'Ястие 1',
                    description: 'Пържола',
                    price: '15.99',
                    image: 'https://bg.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:Pork_chops_served.jpg'
                }

                {
                    id: 2,
                    name: 'Ястие 2',
                    description: 'Салата Цезар',
                    price: '12.99',
                    image: 'https://bg.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BB%D0%B0%D1%82%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Salad_platter02.jpg'
                }
            ];

            render( < Menu menuItems = { menuItems }
                />)
                const menuItem1 = screen.getByText(/Ястие 1/i);
                const menuItem2 = screen.getByText(/Ястие 2/i);

                expect(menuItem1).toBeInDocument(); expect(menuItem2).toBeInDocument();
            })