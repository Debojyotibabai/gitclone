import React, { useContext } from "react";

// component
import SideProfile from "./SideProfile";
import SearchBar from "./SearchBar";
import FollowersCard from "./FollowersCard";

// css
import "../App.css";
import "../Css/SideProfile.css";
import "../Css/Followers.css";

// loader
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// context
import { UserData, UserFollowers } from "../Context";

const Followers = () => {
  // global values
  const [userData] = useContext(UserData);
  const [userFollowers] = useContext(UserFollowers);

  return (
    // right section
    <div className="right__section">
      {/* check user data and set side profile */}
      {userData == null ? (
        <Loader
          className="side__profile"
          style={{ textAlign: "center" }}
          type="Oval"
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

        {/* user main section */}
        <div className="user__main__section">
          {/* followers section */}
          <div className="followers__section">
            <h1>RECENT FOLLOWERS</h1>

            {userFollowers == null ? (
              <Loader
                style={{ textAlign: "center" }}
                type="Oval"
                color="#1089ff"
                height={30}
                width={30}
              />
            ) : (
              <div className="followers">
                {userFollowers.length === 0 ? (
                  <h1
                    style={{
                      fontSize: "1rem",
                      fontWeight: "normal",
                      letterSpacing: "0px",
                    }}
                  >
                    No followers available here.
                  </h1>
                ) : (
                  userFollowers.map((eachFollower, eachFollowerIndex) => {
                    return (
                      <FollowersCard
                        key={eachFollowerIndex}
                        img={eachFollower.avatar_url}
                        name={eachFollower.login}
                      />
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

export default Followers;
