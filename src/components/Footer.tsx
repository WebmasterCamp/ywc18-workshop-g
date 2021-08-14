import "./Footer.scss";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="margin-container">
        <div className="img-container">
          <img src="/images/logo.svg" alt="" width={64} height={64} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
