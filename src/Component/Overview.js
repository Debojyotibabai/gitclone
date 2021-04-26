import React, { useEffect, useState } from "react";

// component
import SideProfile from "./SideProfile";

// css
import "../App.css";

// axios
import axios from "axios";

const Overview = () => {
  // github user data
  const [userData, setUserData] = useState({
    img: "https://avatars.githubusercontent.com/u/47671168?v=4",
    name: "Debojyoti Ghosh",
    userName: "Debojyotibabai",
    bio: "Front-End Web Developer || Web Designer",
    githubLink: "https://github.com/Debojyotibabai",
    twitterUserName: "debojyotibabai1",
    address: "Kolkata, India",
  });

  // search input value
  const [inputValue, setInputValue] = useState();

  // get and set user data
  const getUserData = () => {
    axios.get(`https://api.github.com/users/${inputValue}`).then((response) => {
      setUserData({
        img: response.data.avatar_url,
        name: response.data.name,
        userName: response.data.login,
        bio: response.data.bio,
        githubLink: response.data.html_url,
        twitterUserName: response.data.twitter_username,
        address: response.data.location,
      });
    });
    setInputValue();
  };

  return (
    // right section
    <div className="right__section">
      {/* side profile */}
      <SideProfile
        img={userData.img}
        name={userData.name}
        userName={userData.userName}
        bio={userData.bio}
        githubLink={userData.githubLink}
        twitterUserName={userData.twitterUserName}
        address={userData.address}
      />

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
