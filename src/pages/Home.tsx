import React from "react";
import CarouselComponent from "../components/Carousel/CarouselComponent";
import SingleCarousel from "../components/SingleCarousel/SingleCarousel";
import { mockFarmers, mockSeasonalProduct } from "../utilities/Mocks";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <main id="home">
      <div className="margin-container">
        <div className="sample-box"></div>
      </div>
      <CarouselComponent 
        title="Our farmer"
        subtitle="more than hundreds of qualified farmers across Thailand in our community"
        cards={mockFarmers} />
    </main>
  );
};

export default Home;
