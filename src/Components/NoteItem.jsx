import React, { useState } from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

function NoteItem({ note, index, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editNote(index, editedText);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <div>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="note-content"
          />
          <button onClick={handleSave}>
            {" "}
            <FaSave />
          </button>
        </div>
      ) : (
        <div>
          <span>{note}</span>
          <div className="note-actions">
            <button className="edit" onClick={handleEdit}>
              <FaEdit />
            </button>
            <button className="delete" onClick={() => deleteNote(index)}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
