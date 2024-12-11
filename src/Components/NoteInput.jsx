import React, { useState } from "react";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && noteText.trim()) {
      addNote({ title, noteText });
      setTitle("");
      setNoteText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-input-form">
      <div className="note-input-fields">
        <input
          type="text"
          placeholder="Bir not başlığı girin"
          className="input-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Bir not girin"
          className="input-note"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              setNoteText(noteText + "\n");
            }
          }}
        />
      </div>
      <button type="submit" className="add-note-button">
        +
      </button>
    </form>
  );
}

export default NoteInput;
