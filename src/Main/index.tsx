import React, { useState } from "react";
import Input from "../Input";
import { registrationData } from "../object";
import "./index.css";

const Main: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const changeHandler2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  const changeHandler3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changeHandler4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const changeHandler5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value);
  };
  registrationData.name = name;
  registrationData.surname = surname;
  registrationData.email = email;
  registrationData.password = password;
  registrationData.checkPassword = checkPassword;

  return (
    <main className="main">
      <div className="main__container">
        <div className="main__title">Регистрация</div>
        <form className="main__form" action="/">
          <Input
            onChangeFn={changeHandler}
            inputPlaceholder="Введите имя"
            inputType="text"
          />
          <Input
            onChangeFn={changeHandler2}
            inputPlaceholder="Введите Фамилию"
            inputType="text"
          />
          <Input
            onChangeFn={changeHandler3}
            inputPlaceholder="Ведите Email"
            inputType="email"
          />
          <Input
            onChangeFn={changeHandler4}
            inputPlaceholder="Ведите пароль"
            inputType="password"
          />
          <Input
            onChangeFn={changeHandler5}
            inputPlaceholder="Подтвердите пароль"
            inputType="password"
          />
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
