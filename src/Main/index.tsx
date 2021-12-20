import React from "react";
import Input from "../Input";
import { registrationData } from "../object";
import "./index.css";

const Main: React.FC = () => {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__title">Регистрация</div>
        <form className="main__form" action="/">
          <Input inputPlaceholder="Введите имя" inputType="text" />
          <Input inputPlaceholder="Введите Фамилию" inputType="text" />
          <Input inputPlaceholder="Ведите Email" inputType="email" />
          <Input inputPlaceholder="Ведите пароль" inputType="password" />
          <Input inputPlaceholder="Подтвердите пароль" inputType="password" />
          <button
            onClick={() => console.log(registrationData)}
            className="main__btn"
            type="button">
            Отправить
          </button>
        </form>
      </div>
    </main>
  );
};

export default Main;
