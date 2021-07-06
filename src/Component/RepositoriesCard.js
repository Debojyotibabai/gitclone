import React from "react";

// css
import "../Css/RepositoriesCard.css";

// icon
import LanguageIcon from "@material-ui/icons/Language";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import CheckIcon from "@material-ui/icons/Check";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

// tooltip
import ReactTooltip from "react-tooltip";

// clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

const RepositoriesCard = (props) => {
  return (
    <div className="repositories__card" onClick={props.repoDetails}>
      {/* left side */}
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
            <GradeOutlinedIcon fontSize="small" /> {props.star}
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
            <CheckIcon fontSize="small" /> {props.license}
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

      {/* right side */}
      <div className="clone__url">
        <CopyToClipboard text={props.url}>
          <button
            data-effect="solid"
            // data-background-color="#5fa5f5"
            data-tip="Copy the github repo url to clone"
          >
            <FileCopyOutlinedIcon fontSize="small" />
          </button>
        </CopyToClipboard>
      </div>
      <ReactTooltip />
    </div>
  );
};

export default RepositoriesCard;
