import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

function NoteItem({ note, index, deleteNote, editNote }) {
  const [editedText, setEditedText] = useState(note);
  const noteRef = useRef(null);

  const adjustHeight = (element) => {
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  useEffect(() => {
    const textarea = noteRef.current;
    if (textarea) {
      adjustHeight(textarea);
    }
  }, [editedText]);

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
    editNote(index, e.target.value);

    const textarea = e.target;
    adjustHeight(textarea);
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
      <button className="delete" onClick={() => deleteNote(index)}>
        <FaTimes />
      </button>
    </div>
  );
}

export default NoteItem;
