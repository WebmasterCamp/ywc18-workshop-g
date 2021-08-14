import React from "react";
import CarouselComponent from "../components/Carousel/CarouselComponent";
import InstructionCard from "../components/InstructionCard";
import PackageCard from "../components/PackageCard";
import ProductCard from "../components/ProductCard";
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

const mockTopProducts = [
  {},
  {},
  {},
  {},
  {},
  {}
];

const mockPackages = [
  {},
  {},
  {}
];

const Home: React.FC = () => {
  const renderInstructions = () => {
    return mockInstructions.map((x, i) => {
      return (
        <InstructionCard key={x.text} index={i + 1} text={x.text} />
      );
    });
  };

  const renderProducts = () => {
    return mockTopProducts.map((x, i) => {
      return (
        <ProductCard key={i} />
      );
    });
  };

  const renderPackages = () => {
    return mockPackages.map((x, i) => {
      return (
        <PackageCard key={i} />
      );
    });
  };

  return (
    <>
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
          cards={mockSeasonalProduct}
        />
        <div className="margin-container">
          <div className="our-products-container">
            <h3>Our Products</h3>
            <div className="sml-grid">
              {renderProducts()}
            </div>
            <div className="btn-container">
              <button className="btn">View All</button>
            </div>
          </div>
        </div>
      </main>
      <div className="join-our-community-container">
        <div className="margin-container">
          <aside>
            <h1>Join Our Community</h1>
            <div>Register to our innovative farmers.</div>
            <button className="btn">Register</button>
          </aside>
          <aside>
            
          </aside>
        </div>
      </div>
    </>
  );
};

export default Home;
