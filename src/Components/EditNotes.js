import React from "react";
import "./EditNotes.css";

const EditNotes = (props) => {
  return (
    <div className="bg">
      <div className="layer2" onClick={props.removeEdit} />
      <div className="EditCard">
        <div className="table">
          <button className="edit-button">Edit</button>
          <b className="bold-title">{props.title}</b>
          <button className="delete-button">Delete</button>
        </div>
        <br />
        <p className="para">{props.desc}</p>
      </div>
    </div>
  );
};

export default EditNotes;
