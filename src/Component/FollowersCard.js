import React from "react";

// css
import "../Css/FollowersCard.css";

const FollowersCard = (props) => {
  return (
    <div onClick={props.changeProfile} className="followers__card">
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
    </div>
  );
};

export default FollowersCard;
