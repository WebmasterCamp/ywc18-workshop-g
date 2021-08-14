import "./Farmer.scss";
import React from "react";
import { mockProducts } from "../utilities/Mocks";
import ProductGrid from "../components/ProductGrid";

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
              <div className="fullname">ลุงรีย์ (ชัยวัตน์ พัฒนาอาภรณ์)</div>
              <div>“ผักผลไม้มีตั้งหลายอย่าง แต่ไม่รู้ทำไมเธอถึงเลือกมัน”</div>
            </aside>
          </div>
          <div className="story-container">
          “ลุงชัย คือเกษตรกรวัย 55 ปี ที่ปลูกสวนมังคุดออร์แกนิกขนาด 10 ไร่ และดูแลด้วยความพิถีพิถันมานานกว่า 10 ปี ก่อนหน้าช่วงเวลานี้ สมชัยเคยปลูกผลไม้โดยใช้สารเคม ีและค้นพบว่าเป็นอันตรายต่อร่างกาย
          ตัวเอง และผู้บริโภค แถมผลผลิตราคาตกต่ำลงเรื่อย ๆ จึงปรับเปลี่ยน
          วิธีการมาไม่ใช้สารเคมี และปรับเปลี่ยนสภาพแวดล้อมให้มังคุดได้เติบโต
          อย่างเป็นธรรมชาติ”
          </div>
        </div>
        <ProductGrid
          title="รับเลี้ยง"
          data={mockProducts}
        />
        <ProductGrid
          title="เลือกซื้อผลไม้พร้อมทาน"
          data={mockProducts}
        />
      </div>
    </div>
  );
};

export default Farmer;
