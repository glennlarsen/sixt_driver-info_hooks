import React from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";

function Layout({ children, showBackButton, backPage }) {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(backPage ? `/${backPage}` : -1);
  };

  return (
    <div className="main-layout">
      <div>
        <Tooltip title="Go back">
          <ArrowBackIcon
            className="btn-back"
            onClick={goBack}
            style={{ display: showBackButton }}
          ></ArrowBackIcon>
        </Tooltip>
        <span>
          <strong>User:</strong>
        </span>
        <address>flesland@sixt.no</address>
        <button onClick={logout} className="btn-menu">
          Logout
        </button>
      </div>
      {children}
    </div>
  );
}

export default Layout;
