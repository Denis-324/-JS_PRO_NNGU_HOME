import React from "react";
import { Link } from "react-router-dom";
import styled from "./index.module.scss";

type CardListTypeProps = {
  id: string;
  price: number;
  title: string;
  img: string;
};

const CardList: React.FC<CardListTypeProps> = (props) => {
  const { id, price, title, img } = props;
  return (
    <Link to={`/product/${id}`}>
      <div className={styled.box}>
        <div className={styled.img_box}>
          <img src={img} alt={title} />
        </div>
        <p className={styled.title}>{title}</p>
        <p className={styled.price}>{price} P</p>
      </div>
    </Link>
  );
};

export default CardList;
