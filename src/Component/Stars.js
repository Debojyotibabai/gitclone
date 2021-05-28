import React, { useContext } from "react";

// css
import "../App.css";
import "../Css/SideProfile.css";
import "../Css/Stars.css";

// context
import { UserName, UserData, UserStar } from "../Context";

// loader
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// component
import SideProfile from "./SideProfile";
import SearchBar from "./SearchBar";

// tooltip
import ReactTooltip from "react-tooltip";

const Stars = () => {
  // global values
  const [userName] = useContext(UserName);
  const [userData] = useContext(UserData);
  const [userStar] = useContext(UserStar);

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
        {/* search bar */}
        <SearchBar />

        {/* user main section */}
        <div className="user__main__section">
          {/* stars section */}
          <div className="repo__section">
            <h1>STARRED REPOSITORIES</h1>
            {userStar == null ? (
              <p>
                Wait a minute
                <Loader
                  style={{ marginLeft: "10px" }}
                  type="ThreeDots"
                  color="#177df1"
                  height={20}
                  width={20}
                />
              </p>
            ) : userStar.length <= 1 ? (
              <p>
                <span>{userStar.length}</span> repository has been starred by{" "}
                {userName} till now.
              </p>
            ) : (
              <p>
                <span>{userStar.length}</span> repositories has been starred by{" "}
                {userName} till now.
              </p>
            )}

            {userStar == null ? (
              <Loader
                style={{ textAlign: "center" }}
                type="Oval"
                color="#177df1"
                height={30}
                width={30}
              />
            ) : (
              // stars
              <div className="stars">
                {userStar.length === 0 ? (
                  <h1
                    style={{
                      fontSize: "1.01rem",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    No repository available here.
                  </h1>
                ) : (
                  userStar.map((eachStar, eachStarIndex) => {
                    return (
                      <p
                        key={eachStarIndex}
                        data-effect="solid"
                        data-background-color="#177df1"
                        data-place="bottom"
                        data-tip={
                          eachStar.description == null
                            ? "No description"
                            : eachStar.description
                        }
                      >
                        {eachStar.full_name}
                      </p>
                    );
                  })
                )}
                <ReactTooltip />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stars;
