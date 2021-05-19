import React, { useContext } from "react";

// context
import { UserData } from "../Context";

// component
import SideProfile from "./SideProfile";
import SearchBar from "./SearchBar";

// css
import "../App.css";
import "../Css/SideProfile.css";

// loader
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Repositories = () => {
  // global values
  const [userData] = useContext(UserData);

  return (
    // right section
    <div className="right__section">
      {/* check user data and set side profile */}
      {userData == null ? (
        <Loader
          className="side__profile"
          style={{ textAlign: "center" }}
          type="ThreeDots"
          color="#1089ff"
          height={30}
          width={30}
        />
      ) : (
        <SideProfile />
      )}

      {/* right section details */}
      <div className="right__section__details">
        {/* search bar */}
        <SearchBar />

        {userData == null ? (
          <Loader
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
            }}
            type="ThreeDots"
            color="#1089ff"
            height={40}
            width={40}
          />
        ) : (
          // user activity
          <div className="user__activity"></div>
        )}
      </div>
    </div>
  );
};

export default Repositories;
