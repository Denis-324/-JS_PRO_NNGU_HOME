import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "./index.module.scss";

type CardOneContentPropsType = {
  post: {
    id: string;
    description: string;
    price: string;
    img: string;
    title: string;
  };
};

const CardOneContent: React.FC<CardOneContentPropsType> = (props) => {
  const {
    post: { description, price, img, title },
  } = props;
  const nextNavigate = useNavigate();
  const onBack = () => nextNavigate(-1);
  return (
    <div className={styled.container}>
      <h1 className={styled.title}>{title}</h1>
      <div className={styled.flex}>
        <div className={styled.box}>
          <img src={img} alt={title} />
        </div>
        <div className={styled.description}>
          <p>{description}</p>
        </div>
      </div>
      <p className={styled.price}>{price} P</p>
      <button className={styled.btn} type="button" onClick={onBack}>
        назад
      </button>
    </div>
  );
};

export default CardOneContent;
