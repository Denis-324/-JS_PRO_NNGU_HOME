import React, { useState } from "react";
import { registrationData } from "../object";

type InputPropsType = {
  inputPlaceholder: string;
  inputType: string;
};
const Input: React.FC<InputPropsType> = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setSurname(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
    setCheckPassword(e.target.value);
  };
  registrationData.name = name;
  registrationData.surname = surname;
  registrationData.email = email;
  registrationData.password = password;
  registrationData.checkPassword = checkPassword;

  const { inputPlaceholder, inputType } = props;

  return (
    <input
      onChange={changeHandler}
      className="main__input"
      placeholder={inputPlaceholder}
      type={inputType}
    />
  );
};

export default Input;
