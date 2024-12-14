import React, { useState, useRef } from "react";
import {
  FaListUl,
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
} from "react-icons/fa";

function NoteInput({ addNote }) {
  const [title, setTitle] = useState("");
  const [bulletType, setBulletType] = useState("•");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const noteRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteText = noteRef.current.innerHTML.replace(/\n/g, "<br>");
    if (title.trim() && noteText.trim()) {
      addNote({ title, noteText });
      setTitle("");
      noteRef.current.innerHTML = "";
    }
  };

  const applyBulletType = (type) => {
    setBulletType(type);
    setDropdownOpen(false);
  };

  const formatText = (command) => {
    document.execCommand(command, false, null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newLineNumber =
        bulletType === "1." ? `${getLineNumber()}. ` : `${bulletType} `;
      document.execCommand("insertText", false, `\n${newLineNumber}`);
    }
  };

  const getLineNumber = () => {
    const content = noteRef.current.innerText;
    const lines = content.split("\n");
    return lines.length;
  };

  const handleFocus = () => {
    if (!noteRef.current.innerText) {
      noteRef.current.innerHTML = bulletType + " ";
    }
  };

  const handleInput = (e) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
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
              className="format-button"
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
          <button
            type="button"
            className="format-button"
            onClick={() => formatText("bold")}
          >
            <FaBold />
          </button>
          <button
            type="button"
            className="format-button"
            onClick={() => formatText("italic")}
          >
            <FaItalic />
          </button>
          <button
            type="button"
            className="format-button"
            onClick={() => formatText("underline")}
          >
            <FaUnderline />
          </button>
          <button
            type="button"
            className="format-button"
            onClick={() => formatText("strikeThrough")}
          >
            <FaStrikethrough />
          </button>
        </div>
        <div
          className="input-note"
          contentEditable
          ref={noteRef}
          onFocus={handleFocus}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          style={{
            minHeight: "100px",
            border: "1px solid #ccc",
            padding: "10px",
            direction: "ltr",
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
