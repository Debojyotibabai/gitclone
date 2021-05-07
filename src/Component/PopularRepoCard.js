import React from "react";

// css
import "../Css/PopularRepoCard.css";

// icon
import StarIcon from "@material-ui/icons/Star";
import RestaurantIcon from "@material-ui/icons/Restaurant";

const PopularRepo = (props) => {
  return (
    <div className="popular__repo__card">
      <h1>{props.name}</h1>
      <p>{props.description == null ? "No description" : props.description}</p>
      <div>
        <p>
          <StarIcon fontSize="small" /> {props.star}
        </p>
        <p>
          <RestaurantIcon fontSize="small" /> {props.fork}
        </p>
      </div>
    </div>
  );
};

export default PopularRepo;
