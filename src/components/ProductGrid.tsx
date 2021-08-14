import "./ProductGrid.scss";
import React from "react";
import { Link } from "react-router-dom";
import FarmerProductCard from "./FarmerProductCard";

interface ProductsInterface {
  [id: string]: ProductInterface
}

interface Props {
  title: string;
  data: ProductsInterface;
  mode?: "buy" | "care";
  onClick?: EventHandler<[]>;
}

const ProductGrid: React.FC<Props> = (props: Props) => {
  // const handleProductClick = () => {
  //   props.onClick?.();
  // };

  const renderPackages = () => {
    return Object.entries(props.data).map(([ k, v ], i) => {
      return (
        <Link to={`/product/${k}`} key={i}>
          <FarmerProductCard
            {...v}
          />
        </Link>
      );
    });
  };

  return (
    <div className="product-grid">
      <h3>{props.title}</h3>
      <div className="sml-grid">
        {renderPackages()}
      </div>
    </div>
  );
};

export default ProductGrid;
