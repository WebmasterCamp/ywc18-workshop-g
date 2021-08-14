import "./Farmer.scss";
import React from "react";
import { mockProducts } from "../utilities/Mocks";
import ProductGrid from "../components/ProductGrid";

const Farmer: React.FC = () => {
  return (
    <div id="farmer">
      <div className="margin-container">
        <div className="farmer-profile-container">
          <div className="profile-grid">
            <aside className="img-container">
              <img src="./images/farmer-1.webp" alt="profile-image" />
            </aside>
            <aside>

            </aside>
          </div>
          <div>

          </div>
        </div>
        <ProductGrid
          title="Farmer's Product"
          data={mockProducts}
        />
      </div>
    </div>
  );
};

export default Farmer;
