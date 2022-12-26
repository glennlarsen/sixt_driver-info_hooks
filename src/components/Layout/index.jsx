import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";

function Layout({ children, showBackButton, backPage, showHowItWorks }) {
  const [menuState, setMenuState] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuState(false);
  };

  const logout = () => {
    navigate("/");
    closeMenu();
  };

  const goBack = () => {
    navigate(backPage ? `/${backPage}` : -1);
    closeMenu();
  };

  return (
    <div className="main-layout">
      <Menu width={310} right isOpen={menuState}>
        <h2>Menu</h2>
        <Tooltip title="Go back">
          <ArrowBackIcon
            className="btn-back"
            onClick={goBack}
            style={{ display: showBackButton }}
          ></ArrowBackIcon>
        </Tooltip>
        <NavLink
          to="/howitworks"
          onClick={() => closeMenu()}
          style={{ display: showHowItWorks }}
        >
          How it Works?
        </NavLink>
        <span>
          <strong>User:</strong>
        </span>
        <address>flesland@sixt.no</address>
        <button onClick={logout} className="btn-menu__mobile">
          Logout
        </button>
      </Menu>
      <nav className="desktop-nav">
        <Tooltip title="Go back">
          <ArrowBackIcon
            className="btn-back"
            onClick={goBack}
            style={{ display: showBackButton }}
          ></ArrowBackIcon>
        </Tooltip>
        <NavLink to="/howitworks" style={{ display: showHowItWorks }}>
          How it Works?
        </NavLink>
        <span>
          <strong>User:</strong>
        </span>
        <address>flesland@sixt.no</address>
        <button onClick={logout} className="btn-menu">
          Logout
        </button>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
