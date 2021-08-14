import "./Farmer.scss";
import React, { Component } from "react";
import FarmerProductCard from "../components/FarmerProductCard";
import { Link } from "react-router-dom";

const mockProducts = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const Farmer: React.FC = () => {
  const handleProductClick = () => {
    // handle
  };

  const renderPackages = () => {
    return mockProducts.map((x, i) => {
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
    <div id="farmer">
      <div className="margin-container">
        <h3>Farmer's Product</h3>
        <div className="filter-contaier">
          <div className="sel">Best Selling</div>
          <div>Seasonal</div>
          <div>Available</div>
        </div>
        <div className="sml-grid">
          {renderPackages()}
        </div>
      </div>
    </div>
  );
};

export default Farmer;
