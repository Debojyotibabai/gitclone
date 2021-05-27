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

// tooltip
import ReactTooltip from "react-tooltip";

const SideNavbar = () => {
  return (
    // side navbar
    <div className="side__navbar">
      {/* side navbar logo */}
      <NavLink to="/" className="side__navbar__logo">
        <GitHubIcon />
      </NavLink>

      {/* side navbar navlist */}
      <ul className="side__navbar__navlist">
        <li>
          <NavLink
            className="side__navbar__navlink"
            data-effect="solid"
            data-type="light"
            data-tip="Overview"
            activeClassName="active__navlink"
            exact
            to="/"
          >
            <VisibilityIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="side__navbar__navlink"
            data-effect="solid"
            data-type="light"
            data-tip="Repositories"
            activeClassName="active__navlink"
            to="/repositories"
          >
            <ViewAgendaIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="side__navbar__navlink"
            data-effect="solid"
            data-type="light"
            data-tip="Stars"
            activeClassName="active__navlink"
            to="/stars"
          >
            <StarIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="side__navbar__navlink"
            data-effect="solid"
            data-type="light"
            data-tip="Followers"
            activeClassName="active__navlink"
            to="/followers"
          >
            <PeopleAltIcon />
          </NavLink>
        </li>
      </ul>
      <ReactTooltip />
    </div>
  );
};

export default SideNavbar;
