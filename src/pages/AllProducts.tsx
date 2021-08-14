import "./AllProducts.scss";
import React from "react";
import FarmerProductCard from "../components/FarmerProductCard";
import { Link } from "react-router-dom";
import { mockProducts } from "../utilities/Mocks";
import ProductGrid from "../components/ProductGrid";

const AllProducts: React.FC = () => {
  return (
    <div id="all-products">
      <div className="margin-container">
        <ProductGrid
          title="Our Products"
          data={mockProducts}
        />
      </div>
    </div>
  );
};

export default AllProducts;
