import "./ProductGrid.scss";
import React from "react";
import { Link } from "react-router-dom";
import FarmerProductCard from "./FarmerProductCard";
import { ProductInterface } from "../pages/Product";

interface ProductsInterface {
  [id: string]: ProductInterface
}

interface Props {
  title: string;
  data: ProductsInterface;
  onClick?: EventHandler<[]>;
}

const ProductGrid: React.FC<Props> = (props: Props) => {
  const handleProductClick = () => {
    props.onClick?.();
  };

  const renderPackages = () => {
    return Object.keys(props.data).map((x, i) => {
      return (
        <Link to={`/product/${x}`} key={i}>
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
