import "./ProductCard.scss";
import React from "react";
import { useHistory } from "react-router-dom";

interface Props {
  imgSrc: string;
  label: string;
  desc: string;
  remain: number;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const history = useHistory();

  const navigate = () => {
    history.push("/product/0");
  };

  return (
    <button onClick={navigate}>
      <div className="product-card">
        <div className="upper" style={{ backgroundImage: `url(${props.imgSrc})` }}>
          
        </div>
        <div className="lower">
          <div className="label">{props.label}</div>
          <div className="desc">{props.desc}</div>
          <div className="remain">เหลือ {props.remain} โล</div>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
