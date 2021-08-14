import React from "react";
import CarouselComponent from "../components/Carousel/CarouselComponent";
import "./Home.scss";

const mockSeasonalProduct = [
  {
    image: "/images/watermelon.webp",
    description: "WATERMELON",
    linkTo: "products/watermelon"
  },
  {
    image: "/images/watermelon.webp",
    description: "WATERMELON",
    linkTo: "products/watermelon"
  },
  {
    image: "/images/watermelon.webp",
    description: "WATERMELON",
    linkTo: "products/watermelon"
  },
  {
    image: "/images/watermelon.webp",
    description: "WATERMELON",
    linkTo: "products/watermelon"
  },
];

const Home: React.FC = () => {
  return (
    <main id="home">
      <div className="margin-container">
        <div className="sample-box"></div>
      </div>
      <CarouselComponent 
        title="Seasonal product"
        viewAllLink="/viewAll"
        cards={mockSeasonalProduct} />
    </main>
  );
};

export default Home;
