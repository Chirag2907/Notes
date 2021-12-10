import React, { useState } from 'react'
import "./Card.css";
import EditNotes from './EditNotes';
const Card = (props) => {
  const [Edit, setEdit] = useState(false);

  const openEdit = () => {
    setEdit(true);
  }

  const removeEdit = () => {
    setEdit(false);
  }
  
  
  return (
    <>
    <section className="card_border" onClick={openEdit}>
      <h3>{props.title}</h3>
        <p>
            {props.desc.length > 50? props.desc.substring(0, 50) + "..." : props.desc}
        </p>
    </section>
    {Edit && <EditNotes title={props.title} desc={props.desc} removeEdit={removeEdit} />}
    </>
  );
};

export default Card;
