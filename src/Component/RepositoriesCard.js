import React from "react";

// css
import "../Css/RepositoriesCard.css";

// icon
import LanguageIcon from "@material-ui/icons/Language";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

// tooltip
import ReactTooltip from "react-tooltip";

const RepositoriesCard = (props) => {
  return (
    <div className="repositories__card">
      <div className="detail">
        <h1>{props.name}</h1>
        <span>{props.branch}</span>
        <p>{props.description}</p>
        <div className="count">
          <p
            data-effect="solid"
            data-background-color="#5fa5f5"
            data-place="bottom"
            data-tip="Used language"
          >
            <LanguageIcon fontSize="small" /> {props.language}
          </p>
          <p
            data-effect="solid"
            data-background-color="#5fa5f5"
            data-place="bottom"
            data-tip="Total starred"
          >
            <StarBorderIcon fontSize="small" /> {props.star}
          </p>
          <p
            data-effect="solid"
            data-background-color="#5fa5f5"
            data-place="bottom"
            data-tip="Total fork"
          >
            <RestaurantIcon fontSize="small" /> {props.fork}
          </p>
          <p
            data-effect="solid"
            data-background-color="#5fa5f5"
            data-place="bottom"
            data-tip="License"
          >
            <LinearScaleIcon fontSize="small" /> {props.license}
          </p>
          <p
            data-effect="solid"
            data-background-color="#5fa5f5"
            data-place="bottom"
            data-tip="Last update"
          >
            <QueryBuilderIcon fontSize="small" /> {props.date}
          </p>
        </div>
      </div>
      <ReactTooltip />
    </div>
  );
};

export default RepositoriesCard;
