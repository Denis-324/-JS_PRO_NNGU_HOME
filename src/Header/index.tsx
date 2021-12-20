import React from "react";
import "./index.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo" />
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li>о нас</li>
              <li>новости</li>
              <li>гостевая</li>
              <li>регистрация</li>
              <li>контакты</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
