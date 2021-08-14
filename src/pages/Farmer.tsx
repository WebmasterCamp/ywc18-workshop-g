import "./Farmer.scss";
import React from "react";
import { mockProducts } from "../utilities/Mocks";
import ProductGrid from "../components/ProductGrid";
import { LocationIcon } from "../components/Icons";

const Farmer: React.FC = () => {
  return (
    <div id="farmer">
      <div className="margin-container">
        <div className="farmer-profile-container">
          <div className="profile-grid">
            <aside className="img-container">
              <img src="/images/farmer-1.webp" alt="profile-image" />
            </aside>
            <aside>
              <h4 className="name">ลุงรีย์</h4>
              <h4 className="name">(ชัยวัตน์ พัฒนาอาภรณ์)</h4>
              <p className="bio">“ผักผลไม้มีตั้งหลายอย่าง แต่ไม่รู้ทำไมเธอถึงเลือกมัน”</p>
              <span className="location">
                <LocationIcon />
                สุโขทัย
              </span>
            </aside>
          </div>
          <div className="quote">
            “ลุงชัย คือเกษตรกรวัย 55 ปี ที่ปลูกสวนมังคุดออร์แกนิกขนาด 10 ไร่ และดูแลด้วยความพิถีพิถันมานานกว่า 10 ปี ก่อนหน้าช่วงเวลานี้ สมชัยเคยปลูกผลไม้โดยใช้สารเคม ีและค้นพบว่าเป็นอันตรายต่อร่างกาย
            ตัวเอง และผู้บริโภค แถมผลผลิตราคาตกต่ำลงเรื่อย ๆ จึงปรับเปลี่ยน
            วิธีการมาไม่ใช้สารเคมี และปรับเปลี่ยนสภาพแวดล้อมให้มังคุดได้เติบโต
            อย่างเป็นธรรมชาติ”
          </div>
        </div>
        <ProductGrid
          title="Farmer's Product"
          data={mockProducts}
        />
      </div>
    </div>
  );
};

export default Farmer;
