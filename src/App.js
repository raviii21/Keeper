import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import Createnote from "./Components/Createnote";
import './App.css';


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <Createnote onAdd={addNote} />
      <div className="outer-notes">
      {notes.map((noteItem, index) => {
        return ( 
          <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
        />
        );
      })}
      </div>
      <Footer />
    </>
  );
}

export default App;