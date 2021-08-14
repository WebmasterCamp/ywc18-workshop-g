import "./Header.scss";
import React, { useState } from "react";
import cx from "classnames";
import { useHistory } from "react-router-dom";

interface State {
  expanded: boolean;
}

const Header: React.FC = () => {
  const history = useHistory();
  const [state, setState] = useState<State>({
    expanded: false
  });

  const navigate = () => {
    history.push("/");
  };

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
            <img src="/images/hamburger.svg" alt="icon" onClick={expand} />
          </aside>
          <aside>
            <div className="img-container">
              <img src="/images/logo.svg" alt="logo" width={32} height={32} />
            </div>
            <div>Seedtory</div>
          </aside>
          <aside>
            <div className="img-container">
              <img src="/images/cart.svg" alt="icon" width={24} height={24} />
            </div>
          </aside>
        </div>
      </header>
      <header className="desktop">
        <div className="margin-wrapper">
          <aside>
            <div className="img-container">
              <img src="/images/logo.svg" alt="logo" width={32} height={32} />
            </div>
            <div>Seedtory</div>
          </aside>
          <aside>
            <div className="img-container">
              <img src="/images/cart.svg" alt="icon" width={24} height={24} />
            </div>
          </aside>
        </div>
      </header>
      <nav id="sidenav" className={cx({ "expanded": state.expanded })}>
        <div className="content-container">
          <div className="menu-container">
            <button onClick={navigate}>หน้าแรก</button>
            <button disabled={true}>ซื้อ - จองผลไม้</button>
            <button disabled={true}>เกษตรกรในเครือข่าย</button>
            <button disabled={true}>เกี่ยวกับเรา</button>
            <button disabled={true}>เข้าสู่ระบบ</button>
          </div>
        </div>
      </nav>
      <div id="backdrop" className={cx({ "expanded": state.expanded })} onClick={expand} />
    </>
  );
};

export default Header;
