import React from 'react';
import './Menu.css';

const Menu = () => {
    const menuItems = [{
                id: 1,
                name: 'Ястие 1',
                description: 'Пържола',
                price: '15.99',
                image: 'https://bg.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:Pork_chops_served.jpg'
            },
            {
                id: 2,
                name: 'Ястие 2',
                description: 'Салата Цезар',
                price: '12.99',
                image: 'https://bg.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BB%D0%B0%D1%82%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Salad_platter02.jpg'
            },
            {
                id: 3,
                name: 'Ястие 3',
                description: 'Десерт',
                price: '18.99',
                image: 'https://bg.wikipedia.org/wiki/%D0%9A%D1%80%D0%B5%D0%BC_%D0%B1%D1%80%D1%8E%D0%BB%D0%B5#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Cr%C3%A8me_br%C3%BBl%C3%A9e.jpg'
            },
        ],

        return ( <
            div className = "menu" >
            <
            h2 > Нашето Меню < /h2> <
            ul > {
                menuItems.map(item => ( <
                    li key = { item.id } >
                    <
                    img scr = { item.image }
                    alt = { item.name }
                    /> <
                    h3 > { item.name } < /h3> <
                    p > { item.description } < /p> <
                    p > Цена: { item.price } < /p> <
                    /li>
                ))
            } <
            /ul> <
            /div>
        );
}

export default Menu;