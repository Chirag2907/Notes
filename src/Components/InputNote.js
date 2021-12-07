import React, { useState } from "react";

import "./InputNote.css";
const InputNote = (props) => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!Title || !Desc) {
      alert("Title or Description cannot be empty");
      return;
    } else {
      props.addNote(Title, Desc);
      props.removeInput();
    }
  };

  return (
    <div className="InputNote">
      <div className="layer1" onClick={props.removeInput} />
      <form className="cover" onSubmit={submit}>
        <div>
          <br />
          <br />
          <label>Title</label> <br />
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
            placeholder="Enter Title here"
            className="textarea"
            style={{ backgroundColor: "rgb(226, 207, 183)", fontSize: "20px" }}
            rows="1"
          />
        </div>
        <div>
          <label>Description</label> <br />
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            value={Desc}
            placeholder="Enter note description here"
            className="textarea"
            style={{ backgroundColor: "rgb(226, 207, 183)", fontSize: "20px" }}
            rows="10"
          />
        </div>
        <button type="submit" title="Submit form">
          <b>Add Note</b>
        </button>
      </form>
    </div>
  );
};

export default InputNote;
