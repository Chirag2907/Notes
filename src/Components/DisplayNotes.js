import React from "react";
import Card from "./Card";
import "./DisplayNotes.css";
// import EditNotes from './EditNotes';

const DisplayNotes = (props) => {
  return (
    <>
      <div className="layer" onClick={props.removePopup} />
      {props.notes.length === 0 ? (
        <div className="no-notes">No notes to display</div>
      ) : (
        <div className="DisplayGrid">
          {props.notes.map((note) => {
            return <Card key={note.id} id={note.id} onEdit={props.onEdit} title={note.title} desc={note.desc} onDelete={props.onDelete} />;
          })}
        </div>
      )}
      {/* {Edit && <EditNotes note={props.notes} />} */}
    </>
  );
};

export default DisplayNotes;
