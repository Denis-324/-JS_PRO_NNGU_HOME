import React, { useState } from "react";
import Input from "../Input";
import "./index.css";

const Main: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <main className="main">
      <div className="main__container">
        <div className="main__title">Регистрация</div>
        <form className="main__form" action="/">
          <Input
            onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            inputPlaceholder="Введите имя"
            inputType="text"
          />
          <Input
            onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSurname(e.target.value)
            }
            inputPlaceholder="Введите Фамилию"
            inputType="text"
          />
          <Input
            onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            inputPlaceholder="Ведите Email"
            inputType="email"
          />
          <Input
            onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            inputPlaceholder="Ведите пароль"
            inputType="password"
          />
          <Input
            onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCheckPassword(e.target.value)
            }
            inputPlaceholder="Подтвердите пароль"
            inputType="password"
          />
          <button
            onClick={() =>
              console.log({ name, surname, email, password, checkPassword })
            }
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
