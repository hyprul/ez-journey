import { NavLink } from "react-router-dom";
import React from "react";

export const NavBar = () => (
  <nav className="nav-wrapper teal darken-4">
    <NavLink
      to="/"
      className="waves-effect waves-light home-button teal darken-4"
    >
      <img
        src={require("../logo/easyJourneyLogoWhite.png")}
        alt=""
        width="200"
      />
    </NavLink>
  </nav>
);

export default NavBar;
