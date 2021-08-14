import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

export interface CardInterface {
  image: string;
  description?: string;
  linkTo: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardInterface> = (props: CardInterface) => {
  const { image, description, linkTo } = props;

  return (
    <div className="card-with-desc">
      <Link to={linkTo}>
        <img className="card-image" src={image} alt="card-image" />
      </Link>
      {description && <p className="description">{description}</p>}
    </div>
  );
};

export default Card;
