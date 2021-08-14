import "./ProductGrid.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FarmerProductCard from "./FarmerProductCard";
import { ProductInterface } from "../pages/Product";
import cx from "classnames";

interface ProductsInterface {
  [id: string]: ProductInterface
}

interface Props {
  title: string;
  data: ProductsInterface;
  onClick?: EventHandler<[]>;
}

interface State {
  selectedOption: number;
}

const ProductGrid: React.FC<Props> = (props: Props) => {
  const filterOptions = [ "Best Selling", "Seasonal", "Available" ];

  const [ state, setState ] = useState<State>({
    selectedOption: 0,
  });

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

  const renderFilterButtons = () => {
    return filterOptions.map((x, i) => {
      return (
        <div
          key={x}
          className={cx({ "sel": i === state.selectedOption })}
          onClick={() => setState({ ...state, selectedOption: i })}
        >{x}</div>
      );
    });
  };

  return (
    <div className="product-grid">
      <h3>{props.title}</h3>
      <div className="filter-contaier">
        {renderFilterButtons()}
      </div>
      <div className="sml-grid">
        {renderPackages()}
      </div>
    </div>
  );
};

export default ProductGrid;
