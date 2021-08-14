import React from "react";
import Card, { CardInterface } from "../Card";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./CarouselComponent.scss";
import { Link } from "react-router-dom";

interface CarouselComponentInterface {
  title: string;
  subtitle: string;
  viewAllLink?: string;
  cards: CardInterface[];
}

const defaultPlugins = [
  "infinite",
  "arrows"
];

const CarouselComponent: React.FC<CarouselComponentInterface> = (props: CarouselComponentInterface) => {
  const { title, subtitle, viewAllLink, cards } = props;

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
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {viewAllLink && <Link to={viewAllLink}>View all</Link>}
      </div>
      <Carousel
        plugins={[
          ...defaultPlugins,
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5,
            }
          }
        ]}
        breakpoints={{
          ...carouselBreakpoints(320, 2),
          ...carouselBreakpoints(480, 2.5),
          ...carouselBreakpoints(600, 2.8),
          ...carouselBreakpoints(700, 3.4),
          ...carouselBreakpoints(900, 4.5),
          ...carouselBreakpoints(1200, 5.5),
          ...carouselBreakpoints(1600, 6.5),
        }}
      >
        {cards.map((item, index) => 
          <Card key={index} image={item.image} title={item.title} description={item.description} linkTo={item.linkTo} />
        )}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;