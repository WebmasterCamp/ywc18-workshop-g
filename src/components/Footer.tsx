import "./Footer.scss";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="margin-container">
        <div className="img-container">
          <img src="./images/logo.svg" alt="" width={64} height={64} />
        </div>
        <div className="link-grid">
          <aside>
            <div>Home</div>
            <div>Our Products</div>
            <div>Our Framers</div>
          </aside>
          <aside>
            <div>My Plants</div>
            <div>About Us</div>
          </aside>
        </div>
        <div>ติดตามข่าวสารเกี่ยวกับ Seedtory </div>
        <div className="term-link">
          <div>Seedtory 2021 Copyright Reserved.</div>
          <div>Private Policy - Terms of use</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
