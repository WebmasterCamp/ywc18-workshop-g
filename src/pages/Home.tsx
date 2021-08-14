import React from "react";
import CarouselComponent from "../components/Carousel/CarouselComponent";
import { mockFarmers } from "../utilities/Mocks";
import InstructionCard from "../components/InstructionCard";
import "./Home.scss";
import HomeBanner from "../components/HomeBanner";

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
      <HomeBanner />
      <div className="margin-container">
        <div className="instruction-container">
          {renderInstructions()}
        </div>
        <CarouselComponent 
          title="Our farmer"
          subtitle="more than hundreds of qualified farmers across Thailand in our community"
          cards={mockFarmers} />
      </div>
    </main>
  );
};

export default Home;
