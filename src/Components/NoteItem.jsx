import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

function NoteItem({ note, index, deleteNote, editNote }) {
  const [editedText, setEditedText] = useState(note.noteText);
  const [editedTitle, setEditedTitle] = useState(note.title);
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
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleBlur = () => {
    editNote(index, { title: editedTitle, noteText: editedText });
  };

  const handleDelete = () => {
    deleteNote(index);
  };

  return (
    <div className="note-item">
      <input
        type="text"
        value={editedTitle}
        onChange={handleTitleChange}
        onBlur={handleBlur}
        className="note-title"
        maxLength="50"
      />
      <textarea
        ref={noteRef}
        value={editedText}
        onChange={handleTextChange}
        onBlur={handleBlur}
        className="note-content"
        maxLength="240"
        style={{
          minHeight: "80px",
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
