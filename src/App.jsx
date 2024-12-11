import { useState, useEffect } from "react";
import NoteInput from "./Components/NoteInput";
import NotesList from "./Components/NotesList";
import Logo from "./images/diginote.png";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  const editNote = (index, newText) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, i) => (i === index ? newText : note))
    );
  };

  return (
    <div className="app">
      <header className="header">
        <img src={Logo} alt="Dijital Not Defteri" />
      </header>
      <div className="input-note-container">
        <NoteInput addNote={addNote} />
      </div>
      <NotesList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
}

export default App;
