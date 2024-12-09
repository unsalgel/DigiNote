import React, { useState } from "react";
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
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Kaydet</button>
        </div>
      ) : (
        <div>
          <span>{note}</span>
          <button onClick={handleEdit}>Düzenle</button>
          <button onClick={() => deleteNote(index)}>Sil</button>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
