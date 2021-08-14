import React from "react";
import { LocationIcon } from "../components/Icons";
import "./Checkout.scss";

const Checkout = () => {
  return (
    <div>
      <div className="address-container">
        <div className="header">
          <h4>ที่อยู่สำหรับการจัดส่ง</h4>
          <button className="text-button">เปลี่ยน</button>
        </div>
        <div className="content">
          <LocationIcon />
          <p className="address">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
