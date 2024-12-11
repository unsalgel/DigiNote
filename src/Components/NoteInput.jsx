import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [bulletType, setBulletType] = useState("•");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && noteText.trim()) {
      addNote({ title, noteText });
      setTitle("");
      setNoteText("");
    }
  };

  const applyBulletType = (type) => {
    setBulletType(type);
    const lines = noteText
      .split("\n")
      .map((line) => line.replace(/^[•1.○]\s*/, ""));
    const newText = lines
      .map((line, index) => {
        if (type === "1.") {
          return `${index + 1}. ${line}`;
        }
        return `${type} ${line}`;
      })
      .join("\n");
    setNoteText(newText);
    setDropdownOpen(false);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    if (e.nativeEvent.inputType === "insertLineBreak") {
      const lines = value.split("\n");
      const newLine =
        bulletType === "1." ? `${lines.length}. ` : `${bulletType} `;
      setNoteText(value + newLine);
    } else {
      setNoteText(value);
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
        <div className="formatting-toolbar">
          <div className="dropdown">
            <button
              type="button"
              className="bullet-button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaListUl />
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <div onClick={() => applyBulletType("•")}>•</div>
                <div onClick={() => applyBulletType("1.")}>1.</div>
                <div onClick={() => applyBulletType("○")}>○</div>
              </div>
            )}
          </div>
        </div>
        <textarea
          placeholder="Bir not girin"
          className="input-note"
          value={noteText}
          onChange={handleTextChange}
          onFocus={() => {
            if (!noteText) {
              setNoteText(bulletType + " ");
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const lines = noteText.split("\n");
              const newLine =
                bulletType === "1."
                  ? `${lines.length + 1}. `
                  : `${bulletType} `;
              setNoteText(noteText + "\n" + newLine);
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
