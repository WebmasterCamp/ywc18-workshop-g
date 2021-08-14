import React from "react";
import CarouselComponent from "../components/Carousel/CarouselComponent";

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
    <div id="home">
      <CarouselComponent 
        title="Seasonal product"
        viewAllLink="/viewAll"
        cards={mockSeasonalProduct} />
    </div>
  );
};

export default Home;
