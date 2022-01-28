import React from "react";
import { useParams } from "react-router-dom";
import CardOneContent from "../../components/CardOneContent";
import ApiProduct from "../../assets/data";

const CardPageOne = () => {
  const { id } = useParams();
  const data = ApiProduct();

  const post: any = data.find((el) => el.id === id);
  console.log("post", post);
  return <CardOneContent post={post} />;
};

export default CardPageOne;
