import "./Farmer.scss";
import React from "react";
import { mockProducts } from "../utilities/Mocks";
import ProductGrid from "../components/ProductGrid";

const Farmer: React.FC = () => {
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
