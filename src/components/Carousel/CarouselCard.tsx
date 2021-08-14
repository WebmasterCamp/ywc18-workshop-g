import React from "react";
import { Link } from "react-router-dom";
import "./CarouselCard.scss";

export interface CarouselCardInterface {
  image: string;
  description: string;
  linkTo: string;
  children?: React.ReactNode;
}

const CarouselCard: React.FC<CarouselCardInterface> = (props: CarouselCardInterface) => {
  const { image, description, linkTo } = props;

  return (
    <div className="carousel-card">
      <Link to={linkTo}><img className="card-image" src={image} /></Link>
      <p className="description">{description}</p>
    </div>
  );
};

export default CarouselCard;
