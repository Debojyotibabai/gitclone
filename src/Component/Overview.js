import React, { useContext, useEffect, useState } from "react";

// component
import SideProfile from "./SideProfile";

// css
import "../App.css";
import "../Css/SideProfile.css";
import "../Css/Overview.css";

// axios
import axios from "axios";

// context
import { GlobalName } from "../Context";

const Overview = () => {
  // global name from context
  const [name, setName] = useContext(GlobalName);

  // user data
  const [userData, setUserData] = useState();

  // user stars
  const [userStars, setUserStars] = useState();

  // search input value
  const [inputValue, setInputValue] = useState("");

  // get and set user data
  useEffect(() => {
    axios.get(`https://api.github.com/users/${name}`).then((response) => {
      setUserData(response.data);
    });
  }, [name]);

  // get and set user stars
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}/starred`)
      .then((response) => {
        setUserStars(response.data);
      });
  }, [name]);

  // set global name
  const getUserData = () => {
    setName(inputValue);
    setInputValue("");
  };

  return (
    // right section
    <div className="right__section">
      {/* check userData and set side profile */}
      {userData == null ? (
        <h1
          className="side__profile"
          style={{ textAlign: "center", fontSize: "1.7rem" }}
        >
          Loading...
        </h1>
      ) : (
        <SideProfile
          img={userData.avatar_url}
          name={userData.name}
          userName={userData.login}
          bio={userData.bio}
          githubLink={userData.html_url}
          twitterUserName={userData.twitter_username}
          address={userData.location}
        />
      )}

      {/* right section details */}
      <div className="right__section__details">
        {/* search bar */}
        <div className="search__bar">
          <input
            placeholder="Search github profile"
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button onClick={getUserData}>Search</button>
        </div>

        {/* check userData and set users activity */}
        {userData == null ? (
          <h1
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
            }}
          >
            Loading...
          </h1>
        ) : (
          // users activity
          <div className="users__activity">
            <p>
              Profile is created at: <span>{userData.created_at}</span>
            </p>

            {/* activity */}
            <div className="activity">
              <h1>
                Repositories <span>{userData.public_repos}</span>
              </h1>
              <h1>
                Stars{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginTop: "20px",
                    color: "#1089ff",
                  }}
                >
                  {userStars == null ? "wait..." : userStars.length}
                </span>
              </h1>
              <h1>
                Followers <span>{userData.followers}</span>
              </h1>
              <h1>
                Following <span>{userData.following}</span>
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
