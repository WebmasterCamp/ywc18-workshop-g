import React from "react";
import CarouselCard, { CarouselCardInterface } from "./CarouselCard";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./CarouselComponent.scss";
import { Link } from "react-router-dom";

interface CarouselComponentInterface {
  title: string;
  viewAllLink: string;
  cards: CarouselCardInterface[];
}

const defaultPlugins = [
  "infinite",
  "arrows"
];

const CarouselComponent: React.FC<CarouselComponentInterface> = (props: CarouselComponentInterface) => {
  const { title, viewAllLink, cards } = props;

  const carouselBreakpoints = (breakpoints: number, numberOfSlides: number) => {
    return {
      [breakpoints]: {
        plugins: [
          ...defaultPlugins,
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: numberOfSlides
            }
          }
        ]
      }
    };
  };

  return (
    <div>
      <div className="header">
        <h3>{title}</h3>
        <Link to={viewAllLink}>View all</Link>
      </div>
      <Carousel
        plugins={[
          ...defaultPlugins,
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5
            }
          }
        ]}
        breakpoints={{
          ...carouselBreakpoints(480, 1),
          ...carouselBreakpoints(700, 2),
          ...carouselBreakpoints(900, 3),
          ...carouselBreakpoints(1200, 4),
        }}
      >
        {cards.map((item, index) => 
          <CarouselCard key={index} image={item.image} description={item.description} linkTo={item.linkTo} />
        )}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;