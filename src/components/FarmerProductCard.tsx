import "./FarmerProductCard.scss";
import React from "react";

interface Props {
  imgSrc: string;
  label: string;
  desc: string;
  remain: number;
}

const FarmerProductCard: React.FC<ProductInterface> = (props: ProductInterface) => {
  return (
    <button className="farmer-product-card">
      <div className="upper" style={{ backgroundImage: `url(${props.productImages?.[0]})` }}>
        
      </div>
      <div className="lower">
        <div className="label">{props.productName}</div>
        <div className="desc">{props.productBio}</div>
        <div className="remain">฿ {props.totalPrice} /กก.</div>
      </div>
    </button>
  );
};

export default FarmerProductCard;
