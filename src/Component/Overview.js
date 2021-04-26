import React, { useEffect, useState } from "react";

// component
import SideProfile from "./SideProfile";

// css
import "../App.css";
import "../Css/SideProfile.css";

// axios
import axios from "axios";

const Overview = () => {
  // github user data
  const [userData, setUserData] = useState();

  // search input value
  const [inputValue, setInputValue] = useState();

  // get and set user data for first time
  useEffect(() => {
    axios
      .get("https://api.github.com/users/Debojyotibabai")
      .then((response) => {
        setUserData(response.data);
      });
  }, []);

  // get and set user data from search
  const getUserData = () => {
    axios.get(`https://api.github.com/users/${inputValue}`).then((response) => {
      setUserData(response.data);
    });
    setInputValue();
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
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
        />
        <button onClick={getUserData}>Search</button>
      </div>
    </div>
  );
};

export default Overview;

// {
//   img: "https://avatars.githubusercontent.com/u/47671168?v=4",
//   name: "Debojyoti Ghosh",
//   userName: "Debojyotibabai",
//   bio: "Front-End Web Developer || Web Designer",
//   githubLink: "https://github.com/Debojyotibabai",
//   twitterUserName: "debojyotibabai1",
//   address: "Kolkata, India",
// }
