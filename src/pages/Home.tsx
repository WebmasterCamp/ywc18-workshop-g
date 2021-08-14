import React from "react";
import CarouselComponent from "../components/Carousel/CarouselComponent";
import InstructionCard from "../components/InstructionCard";
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

const mockInstructions = [
  {
    text: "Explore Our Story"
  },
  {
    text: "Click to Adopt"
  },
  {
    text: "Wait to Grow"
  },
  {
    text: "Recieve Your Fruit"
  }
];

const Home: React.FC = () => {
  const renderInstructions = () => {
    return mockInstructions.map((x, i) => {
      return (
        <InstructionCard key={x.text} index={i + 1} text={x.text} />
      );
    });
  };

  return (
    <main id="home">
      <div className="margin-container">
        <div className="sample-box"></div>
        <div className="instruction-container">
          {renderInstructions()}
        </div>
      </div>
      <CarouselComponent 
        title="Seasonal product"
        viewAllLink="/viewAll"
        cards={mockSeasonalProduct} />
    </main>
  );
};

export default Home;
