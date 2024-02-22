import React, { useState, useEffect } from 'react';


const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Заместете този код със заявка към вашия API или локални данни
    const fetchData = async () => {
      // Заместете този код със заявка или локални данни
      const mockData = [
        {
          id: 1,
          name: 'Основно ястие',
          description: 'Пържола',
          price: '15.99',
          image: '/my-react-app/src/images/meat.png'
        },
        {
          id: 2,
          name: 'Салата Цезар',
          description: 'Предястие',
          price: '10.99',
          image: '/my-react-app/src/images/cezar1.png'
        },
        {
          id: 3,
          name: 'Панакода с ягоди',
          description: 'Десерт',
          price: '8.99',
          image: '/my-react-app/src/images/qgodi.jfif'
        }
      ];
      
      setMenuItems(mockData);
    };

    fetchData();
  }, []); // Забележете, че зависимостта е празен масив, за да се изпълни само веднъж при зареждане

  return (
    <div className="menu">
      <h2>Нашето Меню</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Цена: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

