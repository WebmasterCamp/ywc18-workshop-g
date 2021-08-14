import "./Farmer.scss";
import React, { Component } from "react";
import FarmerProductCard from "../components/FarmerProductCard";
import { Link } from "react-router-dom";
import { mockProducts } from "../utilities/Mocks";
import ProductGrid from "../components/ProductGrid";

const Farmer: React.FC = () => {
  const handleProductClick = () => {
    // handle
  };

  return (
    <div id="farmer">
      <div className="margin-container">
        <ProductGrid
          title="Farmer's Product"
          data={mockProducts}
        />
      </div>
    </div>
  );
};

export default Farmer;
