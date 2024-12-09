import { useState, useEffect } from "react";
import NoteInput from "./Components/NoteInput";
import NotesList from "./Components/NotesList";
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
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const editNote = (index, newText) => {
    const newNotes = notes.map((note, i) => (i === index ? newText : note));
    setNotes(newNotes);
  };
  return (
    <div>
      {" "}
      <div>
        <h1>Dijital Not Defteri</h1>
        <NoteInput addNote={addNote} />
        <NotesList notes={notes} deleteNote={deleteNote} editNote={editNote} />
      </div>
    </div>
  );
}

export default App;
