import "./Header.scss";
import React, { Component, useState } from "react";
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
            <div className="pre-icon" onClick={expand}></div>
          </aside>
          <aside>
            <div>logo</div>
          </aside>
          <aside>
            <div>cart</div>
          </aside>
        </div>
      </header>
      <header className="desktop">
        <div className="margin-wrapper">
          <aside>
            <div>logo</div>
          </aside>
          <aside>
            <div>cart</div>
          </aside>
        </div>
      </header>
      <nav id="sidenav" className={cx({ "expanded": state.expanded })}>
        <div className="content-container">
          <div className="nav-header">
            <div className="pre-icon" onClick={expand}></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
