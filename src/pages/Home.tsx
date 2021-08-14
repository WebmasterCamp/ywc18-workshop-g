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
    imgSrc: "./images/instruction-1.svg",
    text: "ค้นหาผลิตภัณฑ์",
    desc: "สำรวจไร่ ฟาร์ม และผลิตภัณฑ์ที่คุณอยากสนับสนุน"
  },
  {
    imgSrc: "./images/instruction-2.svg",
    text: "เลือกต้นผลไม้ที่คุณอยากร่วมดูแล",
    desc: "ติดตามความเคลื่อนไหวผ่านระบบ Subscription"
  },
  {
    imgSrc: "./images/instruction-3.svg",
    text: "ติดตามการเติบโต",
    desc: "ดูการเติบโตของพวกเขาได้ในทุกๆเดือน"
  },
  {
    imgSrc: "./images/instruction-4.svg",
    text: "รับผลผลิตที่ส่งตรงถึงบ้าน",
    desc: "อิ่มเอมกับผลผลิตที่คุณสร้างขึ้นมาเอง"
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

const Home: React.FC = () => {
  const renderInstructions = () => {
    return mockInstructions.map((x, i) => {
      return (
        <InstructionCard key={x.text} index={i + 1} {...x} />
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
          subtitle="เกษตรกรที่เติบโตไปพร้อมกับเรา 
          Seedtory ทำงานร่วมกับเกษตรกรผู้ปลูกผลไม้กว่า 50 ราย
          จากทุกภูมิภาคของประเทศไทย"
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
