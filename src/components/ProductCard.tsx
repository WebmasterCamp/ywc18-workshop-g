import "./ProductCard.scss";
import React from "react";

interface Props {
  imgSrc: string;
  label: string;
  desc: string;
  remain: number;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  return (
    <div className="product-card">
      <div className="upper" style={{ backgroundImage: `url(${props.imgSrc})` }}>
        
      </div>
      <div className="lower">
        <div className="label">{props.label}</div>
        <div className="desc">{props.desc}</div>
        <div className="remain">เหลือ {props.remain} โล</div>
      </div>
    </div>
  );
};

export default ProductCard;
