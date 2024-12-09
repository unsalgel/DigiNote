import React, { useState } from "react";

function NoteInput({ addNote }) {
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bir not girin"
        className="input-note"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button type="submit">Ekle</button>
    </form>
  );
}

export default NoteInput;
