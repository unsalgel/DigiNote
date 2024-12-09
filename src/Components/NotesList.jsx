import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, deleteNote, editNote }) {
  return (
    <div>
      {notes.map((note, index) => (
        <NoteItem
          key={index}
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
