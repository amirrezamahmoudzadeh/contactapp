import React from "react";
import { Link } from "react-router-dom";
import "./TopMenu.scss"

function TopMenu() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="brand">
          <Link to="/">
            Contact App
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
