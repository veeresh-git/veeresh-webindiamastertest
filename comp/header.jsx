import React from "react";

const AppHeader = () => {
  return (
    <div className="container-fluid sticky-top">
      <header className="header-cover">
        {/* logo */}
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        {/* end logo */}
        <div className="headerRight" align="center">
          {/*search */}
          <div className="searchIcon">
            <label className="open-search" htmlFor="open-search">
              <div className="searchBar">
                <input
                  type="text"
                  placeholder="Search for Products, Brands & more"
                  className="input-search"
                />
                <button className="button-search">
                  <img src="/images/search-icon-dsk.svg" alt="" />
                </button>
              </div>
            </label>
          </div>
          {/* end search */}
          {/*other icon*/}
          <nav className="rightIcons">
            {/* nav */}
            <ul className="nav-content-list">
              <li className="nav-content-item track-order">
                <a href>
                  <span className="toTxt">Track Order</span>{" "}
                  <img src="/images/track-order.svg" alt="" />
                </a>
              </li>
              <li className="nav-content-item account-login">
                <label
                  className="open-menu-login-account"
                  htmlFor="open-menu-login-account"
                >
                  <input
                    className="input-menu"
                    id="open-menu-login-account"
                    type="checkbox"
                    name="menu"
                  />
                  <img src="/images/user-icon-dsk.png" alt="" />
                  {/* submenu */}
                  <ul className="login-list">
                    <li className="login-list-item">
                      <a href="https://www.cupcom.com.br/">My account</a>
                    </li>
                    <li className="login-list-item">
                      <a href="https://www.cupcom.com.br/">Create account</a>
                    </li>
                    <li className="login-list-item">
                      <a href="https://www.cupcom.com.br/">logout</a>
                    </li>
                  </ul>
                </label>
              </li>
              <li className="nav-content-item">
                <a className="nav-content-link" href="#">
                  <img src="/images/wishlist-icon-dsk.svg" alt="" />
                </a>
              </li>
              <li className="nav-content-item">
                <a className="nav-content-link" href="#">
                  <img src="/images/cart-icon-dsk.svg" alt="" />
                </a>
              </li>
              {/* call to action */}
            </ul>
          </nav>
          {/*end other icon*/}
        </div>
        <div className="clear" />
      </header>
    </div>
  );
};

export default AppHeader;
