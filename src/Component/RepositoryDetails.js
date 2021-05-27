import React, { useContext } from "react";

// component
import SideProfile from "./SideProfile";

// css
import "../Css/RepositoryDetails.css";

// loader
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// context
import { UserData } from "../Context";

const RepositoryDetails = () => {
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
          type="Oval"
          color="#177df1"
          height={30}
          width={30}
        />
      ) : (
        <SideProfile />
      )}

      {/* right section details */}
      <div className="right__section__details">
        {/* user main section */}
        <div className="user__main__section">
          {/* repository details*/}
          <div className="repository__details"></div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryDetails;
