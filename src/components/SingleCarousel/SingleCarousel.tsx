import React from "react";
import SingleCarouselCard, { SingleCarouselCardInterface } from "./SingleCarouselCard";
import "./SingleCarousel.scss";
import Carousel, { slidesToShowPlugin, arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Arrow } from "../Icons";

interface SingleCarouselInterface {
  cards: SingleCarouselCardInterface[]
}

const defaultPlugins = [
  "infinite",
  "arrows"
];

const SingleCarousel: React.FC<SingleCarouselInterface> = (props: SingleCarouselInterface) => {
  const { cards } = props;

  return (
    <div className="single-carousel-container">
      <Carousel
        plugins={[
          ...defaultPlugins,
          {
            resolve: arrowsPlugin,
            options: {
              numberOfSlides: 1,
              arrowLeft: <button><Arrow /></button>,
              arrowRight: <button><Arrow /></button>,
              addArrowClickHandler: true,
            }
          }
        ]}
      >
        {cards.map((item, index) => 
          <SingleCarouselCard 
            key={index} 
            image={item.image} 
            title={item.title} 
            subtitle={item.subtitle} 
            viewProductLink={item.viewProductLink}  
          />
        )}
      </Carousel>
    </div>
  );
};

export default SingleCarousel;
