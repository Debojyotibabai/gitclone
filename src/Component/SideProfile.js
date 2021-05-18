import React, { useContext } from "react";

// css
import "../Css/SideProfile.css";

// icon
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// context
import { UserData } from "../Context";

const SideProfile = () => {
  // global values
  const [userData] = useContext(UserData);

  return (
    // side profile
    <div className="side__profile">
      {/* side profile details */}
      <div className="side__profile__details">
        <img src={userData.avatar_url} alt="avatar" />
        <h1>{userData.name == null ? "No name" : userData.name}</h1>
        <h2>@{userData.login == null ? "No username" : userData.login}</h2>
        <h3>{userData.bio == null ? "No bio" : userData.bio}</h3>
      </div>
      <hr />

      {/* side profile links */}
      <div className="side__profile__links">
        <a href={userData.html_url}>
          <GitHubIcon /> GitHub
        </a>
        <a href={`https://twitter.com/${userData.twitter_username}`}>
          <TwitterIcon /> Twitter
        </a>
        <p>
          <LocationOnIcon />{" "}
          {userData.location == null ? "No address" : userData.location}
        </p>
      </div>

      {/* follow button */}
      <a href={userData.html_url}>Follow</a>
    </div>
  );
};

export default SideProfile;
