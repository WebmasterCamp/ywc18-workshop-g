import "./ProductGrid.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import FarmerProductCard from "./FarmerProductCard";

interface Props {
  title: string;
  data: any[];
  onClick?: EventHandler<[]>;
}

const ProductGrid: React.FC<Props> = (props: Props) => {
  const handleProductClick = () => {
    props.onClick?.();
  };

  const renderPackages = () => {
    return props.data.map((x, i) => {
      return (
        <Link to="/products/1234" key={i}>
          <FarmerProductCard
            onClick={handleProductClick}
          />
        </Link>
      );
    });
  };

  return (
    <div className="product-grid">
      <h3>{props.title}</h3>
      <div className="filter-contaier">
        <div className="sel">Best Selling</div>
        <div>Seasonal</div>
        <div>Available</div>
      </div>
      <div className="sml-grid">
        {renderPackages()}
      </div>
    </div>
  );
};

export default ProductGrid;
