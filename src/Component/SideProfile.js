import React from "react";

// css
import "../Css/SideProfile.css";

// icon
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const SideProfile = (props) => {
  return (
    // side profile
    <div className="side__profile">
      {/* side profile details */}
      <div className="side__profile__details">
        <img src={props.img} alt="" />
        <h1>{props.name == null ? "No name" : props.name}</h1>
        <h2>@{props.userName == null ? "No username" : props.userName}</h2>
        <h3>{props.bio == null ? "No bio" : props.bio}</h3>
      </div>
      <hr />

      {/* side profile links */}
      <div className="side__profile__links">
        <a href={props.githubLink}>
          <GitHubIcon /> GitHub
        </a>
        <a href={`https://twitter.com/${props.twitterUserName}`}>
          <TwitterIcon /> Twitter
        </a>
        <p>
          <LocationOnIcon />{" "}
          {props.address == null ? "No address" : props.address}
        </p>
      </div>

      {/* follow button */}
      <a href={props.githubLink}>Follow</a>
    </div>
  );
};

export default SideProfile;
