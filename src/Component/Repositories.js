import React, { useContext } from "react";

// context
import { UserData, UserRepo } from "../Context";

// component
import SideProfile from "./SideProfile";
import SearchBar from "./SearchBar";

// css
import "../App.css";
import "../Css/SideProfile.css";
import "../Css/Repositories.css";

// loader
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Repositories = () => {
  // global values
  const [userData] = useContext(UserData);
  const [userRepo] = useContext(UserRepo);

  return (
    // right section
    <div className="right__section">
      {/* check user data and set side profile */}
      {userData == null ? (
        <Loader
          className="side__profile"
          style={{ textAlign: "center" }}
          type="Oval"
          color="#0366d6"
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
            type="Oval"
            color="#0366d6"
            height={40}
            width={40}
          />
        ) : (
          // user activity
          <div className="user__activity">
            {/* repositories section */}
            <div className="repositories__section">
              <h1>REPOSITORIES</h1>
              <p>
                <span>
                  {userRepo == null ? (
                    <Loader
                      type="ThreeDots"
                      color="#0366d6"
                      height={20}
                      width={20}
                    />
                  ) : (
                    userRepo.length
                  )}
                </span>
                repositories has been created till now
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Repositories;
