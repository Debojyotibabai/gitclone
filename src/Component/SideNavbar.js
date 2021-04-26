import React from "react";
import { NavLink } from "react-router-dom";

// icon
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import StarIcon from "@material-ui/icons/Star";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

// css
import "../Css/SideNavbar.css";

const SideNavbar = () => {
  return (
    // side navbar
    <div className="side__navbar">
      {/* side navbar logo */}
      <NavLink exact to="/" className="side__navbar__logo">
        <GitHubIcon />
        <h1>GitClone</h1>
      </NavLink>

      {/* side navbar navlist */}
      <ul className="side__navbar__navlist">
        <li>
          <NavLink className="side__navbar__navlink" exact to="/">
            <VisibilityIcon /> Overview
          </NavLink>
        </li>
        <li>
          <NavLink className="side__navbar__navlink" exact to="/repositories">
            <ViewAgendaIcon /> Repositories
          </NavLink>
        </li>
        <li>
          <NavLink className="side__navbar__navlink" exact to="/stars">
            <StarIcon /> Stars
          </NavLink>
        </li>
        <li>
          <NavLink className="side__navbar__navlink" exact to="/followers">
            <PeopleAltIcon /> Followers
          </NavLink>
        </li>
      </ul>

      {/* footer */}
      <p>All rights reserved.</p>
    </div>
  );
};

export default SideNavbar;
