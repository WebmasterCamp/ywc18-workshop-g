import "./FarmerProductCard.scss";
import React from "react";

interface Props {
  onClick: EventHandler<[]>;
}

const FarmerProductCard: React.FC<Props> = (props: Props) => {
  return (
    <div className="farmer-product-card" onClick={props.onClick}>
      <div className="upper">

      </div>
      <div className="lower">
        
      </div>
    </div>
  );
};

export default FarmerProductCard;
