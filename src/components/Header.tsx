import React from "react";
import "../styles/Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h2 className="header__title">Список задач</h2>
          <form className="header__form">
            <input type="text" className="header__input" placeholder="Новая задача" />
            <button className="header__add-btn">Добавить</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
