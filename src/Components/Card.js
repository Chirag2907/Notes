import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card_border">
      <h3>{props.title}</h3>
        <p>
            {props.desc}
        </p>
    </div>
  );
};

export default Card;
