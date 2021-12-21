import React from "react";

type InputPropsType = {
  inputPlaceholder: string;
  inputType: string;
  onChangeFn: any;
};
const Input: React.FC<InputPropsType> = (props) => {
  const { inputPlaceholder, inputType, onChangeFn } = props;
  return (
    <input
      onChange={onChangeFn}
      className="main__input"
      placeholder={inputPlaceholder}
      type={inputType}
    />
  );
};

export default Input;
