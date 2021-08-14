import "./Footer.scss";
import React from "react";
import { useHistory } from "react-router";

const Footer: React.FC = () => {
  const history = useHistory();

  const navigate = () => {
    history.push("/");
  };

  return (
    <footer>
      <div className="margin-container">
        <div className="img-container">
          <img src="/images/logo.svg" alt="" width={64} height={64} />
        </div>
        <div className="link-grid">
          <aside>
            <button onClick={navigate}>Home</button>
            <div>Our Products</div>
            <div>Our Framers</div>
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
