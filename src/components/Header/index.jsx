import React from "react";
import logo from "images/sixt-logo-black-white.png";

function Header({title, flex}) {

  return (
    <header>
      <div style={{ 'flex': flex }} className="logo">
        <img src={logo} alt="Sixt Logo" />
      </div>
      <h1>{title}</h1>
      <div className="emtpy-header"></div>
    </header>
  );
}

export default Header;
