import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Главная</a></li>
          <li><a href="#posts">Посты</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
