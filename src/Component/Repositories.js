import React, { useContext } from "react";

// context
import { UserData } from "../Context";

// component
import SideProfile from "./SideProfile";
import SearchBar from "./SearchBar";

// css
import "../App.css";
import "../Css/SideProfile.css";

const Repositories = () => {
  // global values
  const [userData] = useContext(UserData);

  return (
    // right section
    <div className="right__section">
      {/* check user data and set side profile */}
      {userData == null ? (
        <h1
          className="side__profile"
          style={{ textAlign: "center", fontSize: "1.2rem" }}
        >
          Loading...
        </h1>
      ) : (
        <SideProfile />
      )}

      {/* right section details */}
      <div className="right__section__details">
        {/* search bar */}
        <SearchBar />

        {userData == null ? (
          <h1
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
              fontSize: "1.2rem",
            }}
          >
            Loading...
          </h1>
        ) : (
          // users activity
          <div className="user__activity"></div>
        )}
      </div>
    </div>
  );
};

export default Repositories;
