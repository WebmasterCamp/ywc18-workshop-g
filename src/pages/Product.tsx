import React, { useState, useEffect } from "react";
import "./Product.scss";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useParams } from "react-router-dom";
import { mockProducts } from "../utilities/Mocks";

export interface ProductInterface {
  productId: string;
  productImages?: string[];
  productName: string;
  productBio?: string;
  tag?: string[];
  farm: string;
  description: string;
  farmerImage?: string;
  farmerImageCaption?: string;
}

const Product: React.FC = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const { id } = useParams<{id: string}>();
  const imageLength = mockProducts[id]?.productImages?.length;
  
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
        <p className="product-caption">{mockProducts[id]?.farm}</p>
        <p className="product-caption">{mockProducts[id]?.productBio}</p>
        <p>About the product</p>
        <p>{mockProducts[id]?.description}</p>
        <div className="image-section">
          <img src={mockProducts[id]?.farmerImage} alt={mockProducts[id]?.farmerImageCaption} className="bottom-image" />
          <p>{mockProducts[id]?.farmerImageCaption}</p>
        </div>
        <div className="button-group">
          <button>add to cart</button>
          <button>adopt now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
