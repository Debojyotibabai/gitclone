import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

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
import { UserName, UserData, UserFollowers } from "../Context";

const Followers = () => {
  // global values
  const [userName, setUserName] = useContext(UserName);
  const [userData] = useContext(UserData);
  const [userFollowers] = useContext(UserFollowers);

  // use history
  const history = useHistory();

  // change profile functionality
  const changeProfile = (login) => {
    setUserName(login);
    history.push("/");
  };

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

        {/* user main section */}
        <div className="user__main__section">
          {/* followers section */}
          <div className="followers__section">
            <h1>RECENT FOLLOWERS</h1>
            {userFollowers == null ? (
              <Loader
                style={{ textAlign: "center" }}
                type="Oval"
                color="#0366d6"
                height={30}
                width={30}
              />
            ) : (
              // followers
              <div className="followers">
                {userFollowers.length === 0 ? (
                  <h1
                    style={{
                      fontSize: "1.01rem",
                      fontWeight: "normal",
                    }}
                  >
                    No one follows him.
                  </h1>
                ) : (
                  userFollowers.map((eachFollower, eachFollowerIndex) => {
                    return (
                      <FollowersCard
                        key={eachFollowerIndex}
                        changeProfile={changeProfile.bind(
                          this,
                          eachFollower.login
                        )}
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
