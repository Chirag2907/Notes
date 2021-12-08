import React from "react";
import Card from "./Card";
import "./DisplayNotes.css";

const DisplayNotes = (props) => {
  return (
    <div className="DisplayNotes">
      <div className="layer" onClick={props.removePopup}></div>
      {props.notes.length === 0 ? (
        <div className="no-notes">No notes to display</div>
      ) : (
        <div className="DisplayGrid">
          {props.notes.map((note) => {
            return <Card key={note.id} title={note.title} desc={note.desc} />;
          })}
        </div>
      )}
    </div>
  );
};


export default DisplayNotes;
