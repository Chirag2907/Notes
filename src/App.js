import "./App.css";
import React, { useState } from "react";
import DisplayNotes from "./Components/DisplayNotes";
import InputNote from "./Components/InputNote";

function App() {
  const [popup, setPopup] = useState(false);
  const [Input, setInput] = useState(false);

  const [Head, setHead] = useState("");
  const [Body, setBody] = useState("");

  const [Notes, setNotes] = useState([
    {
      id: 0,
      title: "Sample Note",
      desc: "This is a sample note! Click to edit/delete",
    } 
  ]);

  const onDelete = (key) => {
    setNotes(Notes.filter((e) => {
      return e.id !== key;
    }));
  }

  const onEdit = (key) => {
    for(let i = 0; i < Notes.length; i++) {
      if(Notes[i].id === key) {
        setHead(Notes[i].title);
        setBody(Notes[i].desc);
        setInput(true);
        setPopup(false);
        onDelete(key);
      }
    }
  }
  

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
          <div id="card" className="card" onClick={note}>
            <h3>New Note</h3>
          </div>
          <div id="card" className="card" onClick={display}>
            <h3>My Notes ({Notes.length})</h3>
          </div>
        </div>
        {Input && <InputNote head={Head} setHead={setHead} setBody={setBody} setPopup={setPopup} body={Body} addNote={addNote} removeInput={removeInput} />}
        {popup && <DisplayNotes notes={Notes} removePopup={removePopup} onEdit={onEdit} onDelete={onDelete}/>}
      </header>
    </div>
  );
} 

export default App;
