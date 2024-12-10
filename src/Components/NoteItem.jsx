import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

function NoteItem({ note, index, deleteNote, editNote }) {
  const [editedText, setEditedText] = useState(note);
  const noteRef = useRef(null);

  useEffect(() => {
    const textarea = noteRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [editedText]);

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
    editNote(index, e.target.value);
  };

  const handleDelete = () => {
    deleteNote(index);
  };

  return (
    <div className="note-item">
      <textarea
        ref={noteRef}
        value={editedText}
        onChange={handleTextChange}
        className="note-content"
        maxLength="240"
        style={{
          minHeight: "50px",
          resize: "none",
          overflow: "hidden",
        }}
      />
      <button className="delete" onClick={handleDelete}>
        <FaTimes />
      </button>
    </div>
  );
}

export default NoteItem;
