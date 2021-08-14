import React from "react";
import { Link } from "react-router-dom";
import "./SingleCarouselCard.scss";

export interface SingleCarouselCardInterface {
  image: string
  title: string
  subtitle: string
  viewProductLink: string
  children?: React.ReactNode;
}

const SingleCarouselCard: React.FC<SingleCarouselCardInterface> = (props: SingleCarouselCardInterface) => {
  const { image, title, subtitle, viewProductLink } = props;

  return (
    <div className="card-container">
      <img src={image} />
      <h4>"{title}"</h4>
      <p>{subtitle}</p>
      <Link to={viewProductLink}></Link>
    </div>
  );
};

export default SingleCarouselCard;
