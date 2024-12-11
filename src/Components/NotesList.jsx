import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, deleteNote, editNote }) {
  return (
    <div className="note-container">
      {notes.map((note, index) => (
        <NoteItem
          key={`${note.title}-${index}`}
          note={note}
          index={index}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
    </div>
  );
}

export default NotesList;
