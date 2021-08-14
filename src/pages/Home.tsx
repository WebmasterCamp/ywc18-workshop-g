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
  {
    imgSrc: "./images/fruit-1.svg",
    label: "ส้มเขียวหวาน",
    desc: "สวนลุงรีย์ จ.สุโขทัย",
    remain: 200
  },
  {
    imgSrc: "./images/fruit-2.svg",
    label: "ส้มเขียวหวาน",
    desc: "สวนลุงรีย์ จ.สุโขทัย",
    remain: 200
  },
  {
    imgSrc: "./images/fruit-3.svg",
    label: "ส้มเขียวหวาน",
    desc: "สวนลุงรีย์ จ.สุโขทัย",
    remain: 200
  },
  {
    imgSrc: "./images/fruit-4.svg",
    label: "ส้มเขียวหวาน",
    desc: "สวนลุงรีย์ จ.สุโขทัย",
    remain: 200
  },
  {
    imgSrc: "./images/fruit-1.svg",
    label: "ส้มเขียวหวาน",
    desc: "สวนลุงรีย์ จ.สุโขทัย",
    remain: 200
  },
  {
    imgSrc: "./images/fruit-1.svg",
    label: "ส้มเขียวหวาน",
    desc: "สวนลุงรีย์ จ.สุโขทัย",
    remain: 200
  }
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
        <ProductCard key={i} {...x} />
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
      </div>
      <CarouselComponent
        title="เกษตรกรของเรา"
        subtitle={`เกษตรกรที่เติบโตไปพร้อมกับเรา \n
        Seedtory ทำงานร่วมกับเกษตรกรผู้ปลูกผลไม้กว่า 50 ราย \n
        จากทุกภูมิภาคของประเทศไทย`}
        cards={mockFarmers}
      />
      <div className="margin-container">
        <div className="seasonal-container">
          <h3>ผลไม้ตามฤดูกาลในเดือน</h3>
        </div>
        <div className="our-products-container">
          <div className="space-between-header">
            <h3>ผลไม้พร้อมทาน</h3>
            <Link className="link" to="/products">ดูทั้งหมด</Link>
          </div>
          <div className="sml-grid">
            {renderProducts()}
          </div>
          <div className="btn-container">
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
