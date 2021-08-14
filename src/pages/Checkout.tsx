import React from "react";
import { LocationIcon } from "../components/Icons";
import "./Checkout.scss";

const Checkout: React.FC = () => {
  return (
    <div className="checkout-container">
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
      <div className="horizontal" />
      <div className="fruit-container">
        <div className="header">
          <h4>ต้นไม้ที่คุณร่วมดูแล</h4>
          <button className="text-button">เปลี่ยน</button>
        </div>
        <div className="content">
          <img src="/images/mangosteen.webp" alt="mangosteen" />
          <div className="details">
            <p>ต้นมังคุด</p>
            <p>สวนลุงชัย</p>
            <div className="select-number">
              <span>จำนวนต้น</span>
              <input defaultValue={2} />
              <span>ต้น</span>
            </div>
            <div className="select-number">
              <span>จำนวนปี</span>
              <input defaultValue={2} />
              <span>ปี</span>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal" />
      <div className="payment-container">
        <div className="header">
          <h4>วิธีการชำระเงิน</h4>
        </div>
        <div className="content">
          <span>
            <input type="radio" id="credit-card" name="payment" value="0" />
            <label htmlFor="credit-card">Credit card</label>
          </span>
          <span>
            <input type="radio" id="mobile-banking" name="payment" value="1" />
            <label htmlFor="mobile-banking">Mobile Banking</label>
          </span>
        </div>
      </div>
      <div className="horizontal" />
      <div className="total">
        <div className="header">
          <h4>Total</h4>
          <button className="text-button">300 ฿</button>
        </div>
      </div>
      <div className="button-group">
        <button>เพิ่มเข้ารถเข็น</button>
        <button>ซื้อเลย</button>
      </div>
    </div>
  );
};

export default Checkout;
