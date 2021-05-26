import React from "react";

// css
import "../Css/RepositoriesCard.css";

// icon
import LanguageIcon from "@material-ui/icons/Language";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

const RepositoriesCard = (props) => {
  return (
    <div className="repositories__card">
      <div className="detail">
        <h1>{props.name}</h1>
        <span>{props.branch}</span>
        <p>{props.description}</p>
        <div className="count">
          <p>
            <LanguageIcon fontSize="small" /> {props.language}
          </p>
          <p>
            <StarBorderIcon fontSize="small" /> {props.star}
          </p>
          <p>
            <RestaurantIcon fontSize="small" /> {props.fork}
          </p>
          <p>
            <LinearScaleIcon fontSize="small" /> {props.license}
          </p>
          <p>
            <QueryBuilderIcon fontSize="small" /> {props.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepositoriesCard;
