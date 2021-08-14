import "./Home.scss";
import React from "react";
import CarouselComponent from "../components/Carousel/CarouselComponent";
import { mockFarmers } from "../utilities/Mocks";
import InstructionCard from "../components/InstructionCard";
import ProductCard from "../components/ProductCard";
import HomeBanner from "../components/HomeBanner";
import { Link } from "react-router-dom";

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

  return (
    <>
      <main id="home">
        <HomeBanner />
        <div className="margin-container">
          <div className="instruction-container">
            {renderInstructions()}
          </div>
        </div>
        <CarouselComponent
          title="เกษตรกรของเรา"
          subtitle={`เกษตรกรที่เติบโตไปพร้อมกับเรา \n
          Seedtory ทำงานร่วมกับเกษตรกรผู้ปลูกผลไม้กว่า 50 ราย \n
          จากทุกภูมิภาคของประเทศไทย`}
          cards={mockFarmers}
        />
        <div className="margin-container">
          <div className="our-products-container">
            <h3>Our Products</h3>
            <div className="sml-grid">
              {renderProducts()}
            </div>
            <div className="btn-container">
              <Link to="/products">
                <button className="btn">View All</button>
              </Link>
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
