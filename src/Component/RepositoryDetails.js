import React, { useContext } from "react";

// component
import SideProfile from "./SideProfile";

// css
import "../Css/RepositoryDetails.css";

// loader
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// context
import { UserData, UserRepoName, UserRepoDetails } from "../Context";

const RepositoryDetails = () => {
  // global values
  const [userData] = useContext(UserData);
  const [userRepoName] = useContext(UserRepoName);
  const [userRepoDetails] = useContext(UserRepoDetails);

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
          {/* repository details */}
          <div className="repository__details">
            <h1>FILES</h1>
            <p>
              These are the corresponding files of <span>{userRepoName}</span>
            </p>

            {UserRepoDetails == null ? (
              <Loader
                style={{ textAlign: "center" }}
                type="Oval"
                color="#177df1"
                height={30}
                width={30}
              />
            ) : (
              // details
              <div className="details">
                {userRepoDetails.length === 0 ? (
                  <h1
                    style={{
                      fontSize: "1.01rem",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    No files available here.
                  </h1>
                ) : (
                  userRepoDetails.map((eachDetails, eachDetailsIndex) => {
                    return (
                      <p className="fileName" key={eachDetailsIndex}>
                        {eachDetails.name}
                      </p>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryDetails;
