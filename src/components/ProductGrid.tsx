import "./ProductGrid.scss";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import FarmerProductCard from "./FarmerProductCard";
import cx from "classnames";

interface Props {
  title: string;
  data: any[];
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
