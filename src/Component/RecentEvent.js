import React from "react";

// css
import "../Css/RecentEvent.css";

const RecentEvent = (props) => {
  return (
    <div className="recent__event">
      <div className="event">
        <h3>{props.type}</h3>
        <h1>{props.name}</h1>
        <span>{props.head}</span>
        <p>{props.message}</p>
      </div>
      <p>
        Pushed at : <span>{props.date}</span>
      </p>
    </div>
  );
};

export default RecentEvent;
