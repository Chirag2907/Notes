import "./App.css";
import React, { useState } from "react";
import DisplayNotes from "./Components/DisplayNotes";
import InputNote from "./Components/InputNote";

function App() {
  const [popup, setPopup] = useState(false);
  const [Input, setInput] = useState(false);

  const [Notes, setNotes] = useState([
    {
      id: 1,
      title: "First note",
      desc: "This is my first note",
    },
    {
      id: 2,
      title: "Second note",
      desc: "This is my second note",
    },
    {
      id: 3,
      title: "Third note",
      desc: "This is my third note",
    },
  ]);

  const addNote = (title, desc) => {
    setNotes([
      ...Notes,
      {
        id: Math.floor(Math.random() * 1000),
        title: title,
        desc: desc,
      },
    ]);
  };

  const display = () => {
    setPopup(true);
  };

  const removePopup = () => {
    setPopup(false);
  };

  const note = () => {
    setInput(true);
  };

  const removeInput = () => {
    setInput(false);
  };

  return (
    <div className="App">
      <header className="App-header center">
        <h1>Notes</h1>
        <div className="div1 center">
          <div className="card" onClick={note}>
            <h3>New Note</h3>
          </div>
          <div className="card" onClick={display}>
            <h3>My Notes ({Notes.length})</h3>
          </div>
        </div>
        {Input && <InputNote removeInput={removeInput} addNote={addNote} />}
        {popup && <DisplayNotes notes={Notes} removePopup={removePopup} />}
      </header>
    </div>
  );
}

export default App;
