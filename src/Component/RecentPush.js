import React from "react";

// css
import "../Css/RecentPush.css";

const RecentPush = (props) => {
  return (
    <div className="recent__push">
      <div className="push">
        <h1>{props.name}</h1>
        <span>{props.head}</span>
        <p>{props.message}</p>
      </div>
      <p>
        Pushed at: <span>{props.date}</span>
      </p>
    </div>
  );
};

export default RecentPush;
