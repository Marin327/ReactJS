import React, { useState, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Modal from 'react-modal';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        {
          id: 1,
          category: 'Основни ястия',
          name: 'Пържола',
          description: 'Вкусна пържола с подправки',
          price: '15.99',
          image: process.env.PUBLIC_URL + '/images/1.jpg',
        },
        {
          id: 2,
          category: 'Основни ястия',
          name: 'Свински бут',
          description: 'Печен свински бут с мед,мента,соев сос и бира',
          price: '18.99',
          image: process.env.PUBLIC_URL + '/images/2.jpg',
        },
        {
          id: 3,
          category: 'Основни ястия',
          name: 'Лазаня',
          description: 'Италианска лазаня с много сирене',
          price: '17.99',
          image: process.env.PUBLIC_URL + '/images/3.jpg',
        },
        {
          id: 4,
          category: 'Основни ястия',
          name: 'Пиле на фурна',
          description: 'Печено пиле с подправки',
          price: '16.99',
          image: process.env.PUBLIC_URL + '/images/4.jpg',
        },
        {
          id: 5,
          category: 'Основни ястия',
          name: 'Риба на скара',
          description: 'Прясна риба приготвена на скара',
          price: '22.99',
          image: process.env.PUBLIC_URL + '/images/5.jpg',
        },
        {
          id: 6,
          category: 'Салати',
          name: 'Салата Цезар',
          description: 'Класическа салата с пилешко месо',
          price: '10.99',
          image: process.env.PUBLIC_URL + '/images/6.png',
        },
        {
          id: 7,
          category: 'Салати',
          name: 'Салата с рукола',
          description: 'Салата с рукола, чери домати и пармезан',
          price: '12.99',
          image: process.env.PUBLIC_URL + '/images/7.JPG',
        },
        {
          id: 8,
          category: 'Салати',
          name: 'Гръцка салата',
          description: 'Класическа гръцка салата със сирене фета',
          price: '11.99',
          image: process.env.PUBLIC_URL + '/images/8.jpg',
        },
        {
          id: 9,
          category: 'Салати',
          name: 'Салата с тон',
          description: 'Салата с консервиран тон и зеленчуци',
          price: '13.99',
          image: process.env.PUBLIC_URL + '/images/9.jpg',
        },
        {
          id: 10,
          category: 'Салати',
          name: 'Салата с паста',
          description: 'Свежа салата с кисело мляко и паста',
          price: '9.99',
          image: process.env.PUBLIC_URL + '/images/10.jpg',
        },
        {
          id: 11,
          category: 'Алкохол',
          name: 'Червено вино',
          description: 'Червено вино сорт Каберне Совиньон',
          price: '25.99',
          image: process.env.PUBLIC_URL + '/images/11.jpg',
        },
        {
          id: 12,
          category: 'Алкохол',
          name: 'Бяло вино',
          description: 'Бяло вино сорт Шардоне',
          price: '22.99',
          image: process.env.PUBLIC_URL + '/images/12.png',
        },
        {
          id: 13,
          category: 'Алкохол',
          name: 'Гинтоник',
          description: 'Класически гинтоник със свеж лайм',
          price: '14.99',
          image: process.env.PUBLIC_URL + '/images/13.jpg',
        },
        {
          id: 14,
          category: 'Алкохол',
          name: 'Мохито',
          description: 'Охладителен мохито с мента и лимон',
          price: '13.99',
          image: process.env.PUBLIC_URL + '/images/14.jpg',
        },
        {
          id: 15,
          category: 'Алкохол',
          name: 'Бира',
          description: 'Студена бира на чаша',
          price: '5.99',
          image: process.env.PUBLIC_URL + '/images/15.jpg',
        },
        {
          id: 16,
          category: 'Десерти',
          name: 'Тирамису',
          description: 'Италиански десерт с кафе и маскарпоне',
          price: '8.99',
          image: process.env.PUBLIC_URL + '/images/16.jpg',
        },
        {
          id: 17,
          category: 'Десерти',
          name: 'Чийзкейк',
          description: 'Чийзкейк с плодове на върха',
          price: '9.99',
          image:process.env.PUBLIC_URL + '/images/17.jpg',
        },
        {
          id: 18,
          category: 'Десерти',
          name: 'Шоколадово фондю',
          description: 'Шоколадово фондю с плодове',
          price: '11.99',
          image: process.env.PUBLIC_URL + '/images/18.jpg',
        },
        {
          id: 19,
          category: 'Десерти',
          name: 'Панакота',
          description: 'Италианска панакота с ягодов сос',
          price: '7.99',
          image: process.env.PUBLIC_URL + '/images/19.jpg',
        },
        {
          id: 20,
          category: 'Десерти',
          name: 'Френска сметана',
          description: 'Френска сметана с плодове',
          price: '10.99',
          image: process.env.PUBLIC_URL + '/images/20.jpg',
        },
        {
          id: 21,
          category: 'Специалитети',
          name: 'Паеля',
          description: 'Испанска паеля със смесени морски дарове',
          price: '28.99',
          image: process.env.PUBLIC_URL + '/images/21.jpg',
        },
        {
          id: 22,
          category: 'Специалитети',
          name: 'Скара от телешко',
          description: 'Скара от телешко със специален сос',
          price: '30.99',
          image: process.env.PUBLIC_URL + '/images/22.jpg',
        },
        {
          id: 23,
          category: 'Специалитети',
          name: 'Азиатски сет',
          description: 'Сет от ястие по азиатски',
          price: '26.99',
          image: process.env.PUBLIC_URL + '/images/23.png',
        },
        {
          id: 24,
          category: 'Специалитети',
          name: 'Печен лосос',
          description: 'Печен лосос със специални подправки',
          price: '32.99',
          image: process.env.PUBLIC_URL + '/images/24.jpg',
        },
        {
          id: 25,
          category: 'Специалитети',
          name: 'Вегански бургер',
          description: 'Вегански бургер с авокадо и специален сос',
          price: '20.99',
          image: process.env.PUBLIC_URL + '/images/25.jpg',
        },
      ];

      setMenuItems(mockData);
    };

    fetchData();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const addToOrder = (item) => {
    // Тук можете да направите необходимите действия при добавяне към поръчката
    console.log(`Добавяне на ${item.name} към поръчката`);
  };

  return (
    <div className="menu">
      <h2>Нашето Меню</h2>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Поръчка на храна"
      >
        {selectedItem && (
          <div>
            <h2>Поръчка на {selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
            <p>Цена: {selectedItem.price}</p>
            <button onClick={closeModal}>Затвори</button>
          </div>
        )}
      </Modal>

      {/* Основни ястия */}
      <div className="menu-category">
        <h3>Основни ястия</h3>
        <ul>
          {menuItems
            .filter((item) => item.category === 'Основни ястия')
            .map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="menu-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Цена: {item.price}</p>
                </div>
                <button onClick={() => { openModal(item); addToOrder(item); }}>
                  <AiOutlineShoppingCart />
                </button>
              </li>
            ))}
        </ul>
      </div>

      {/* ... Другите категории ... */}
    </div>
  );
};

export default Menu;