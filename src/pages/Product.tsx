import React, { useState } from "react";
import "./Product.scss";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useHistory, useParams } from "react-router-dom";
import { mockProducts } from "../utilities/Mocks";

const Product: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const history = useHistory();
  const [number, setNumber] = useState(1);
  const { id } = useParams<{id: string}>();
  const imageLength = mockProducts[id]?.productImages?.length;

  const navigate = () => {
    history.push("/checkout");
  };
  
  return (
    <div className="product-container" key={id}>
      <div className="image-container">
        {
          imageLength && <div className="slide-index">
            {(imageIndex % imageLength) + 1}/{imageLength}
          </div>
        }
        <Carousel
          value={imageIndex}
          onChange={(value: number) => setImageIndex(value)}
          slides={mockProducts[id]?.productImages?.map((item, index) => 
            <img key={index} src={item} className="product-image" alt={`รูปภาพ ${mockProducts[id]?.productName}`} />
          )}
          plugins={[
            "infinite",
            "fastSwipe",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1
              }
            },
          ]}
        />
      </div>
      <div className="content">
        <div className="header">
          <h4 className="product-name">{mockProducts[id]?.productName}</h4>
          <div className="tag">{mockProducts[id]?.tag}</div>
        </div>
        <div className="details">
          <b>รายละเอียดสินค้า</b>
          <p className="product-caption">{mockProducts[id]?.productBio}</p>
          <p className="product-caption">{mockProducts[id]?.farm} จ.สุโขทัย</p>
        </div>
      </div>
      <div className="number">
        <div className="header">
          <span>จำนวน (กก.)</span>
          <span>เหลือ 10 กิโลสุดท้าย</span>
        </div>
        <button onClick={() => setNumber(number - 1)} disabled={number == 0}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 11C21.5523 11 22 11.4477 22 12C22 12.5128 21.614 12.9355 21.1166 12.9933L21 13H3C2.44772 13 2 12.5523 2 12C2 11.4872 2.38604 11.0645 2.88338 11.0067L3 11H21Z" fill="#212121" />
          </svg>
        </button>
        <input value={number} readOnly />
        <button onClick={() => setNumber(number + 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 11C21.5523 11 22 11.4477 22 12C22 12.5128 21.614 12.9355 21.1166 12.9933L21 13H3C2.44772 13 2 12.5523 2 12C2 11.4872 2.38604 11.0645 2.88338 11.0067L3 11H21Z" fill="#212121" />
            <path d="M12 2C12.5128 2 12.9355 2.38604 12.9933 2.88338L13 3V21C13 21.5523 12.5523 22 12 22C11.4872 22 11.0645 21.614 11.0067 21.1166L11 21V3C11 2.44772 11.4477 2 12 2Z" fill="#212121" />
          </svg>
        </button>
      </div>
      <div className="button-group">
        <button>เพิ่มเข้ารถเข็น</button>
        <button onClick={navigate}>ซื้อเลย</button>
      </div>
    </div>
  );
};

export default Product;
