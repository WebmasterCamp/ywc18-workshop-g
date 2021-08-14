import "./FarmerProductCard.scss";
import React from "react";

const FarmerProductCard: React.FC<ProductInterface> = (props: ProductInterface) => {
  const renderTags = () => {
    return props.tag?.map((x) => {
      return <span key={x}>{x}</span>;
    });
  };

  return (
    <button className="farmer-product-card">
      <div className="upper" style={{ backgroundImage: `url(${props.productImages?.[0]})` }}>
        <div className="tag-container">
          {renderTags()}
        </div>
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
