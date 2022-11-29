import React from "react";
import logo from "images/sixt-logo-black-white.png";

function Header({title}) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Sixt Logo" />
      </div>
      <h1>{title}</h1>
      <div className="emtpy-header"></div>
    </header>
  );
}

export default Header;
