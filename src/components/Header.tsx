import "./Header.scss";
import React, { useState } from "react";
import cx from "classnames";

interface State {
  expanded: boolean;
}

const Header: React.FC = () => {
  const [ state, setState ] = useState<State>({
    expanded: false
  });

  const expand = () => {
    setState((prev) => ({
      ...prev,
      expanded: !prev.expanded
    }));
  };

  return (
    <>
      <header className="mobile">
        <div className="margin-wrapper">
          <aside>
            <img src="./images/hamburger.svg" alt="icon" onClick={expand} />
          </aside>
          <aside>
            <div className="img-container">
              <img src="./images/logo.svg" alt="logo" width={32} height={32} />
            </div>
            <div>Seedtory</div>
          </aside>
          <aside>
            <div className="img-container">
              <img src="./images/cart.svg" alt="icon" width={24} height={24} />
            </div>
          </aside>
        </div>
      </header>
      <header className="desktop">
        <div className="margin-wrapper">
          <aside>
            <div className="img-container">
              <img src="./images/logo.svg" alt="logo" width={32} height={32} />
            </div>
            <div className="link-container">
              <div>Home</div>
              <div>Our Products</div>
              <div>Our Framers</div>
              <div>My Plants</div>
              <div>About Us</div>
            </div>
          </aside>
          <aside>
            <div className="img-container">
              <img src="./images/cart.svg" alt="icon" width={24} height={24} />
            </div>
          </aside>
        </div>
      </header>
      <nav id="sidenav" className={cx({ "expanded": state.expanded })}>
        <div className="content-container">
          <div className="nav-header">
            <div className="img-container">
              <img src="./images/hamburger.svg" alt="icon" onClick={expand} width={32} height={32} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
