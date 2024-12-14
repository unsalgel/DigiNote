import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

function NoteItem({ note, index, deleteNote, editNote }) {
  const [editedText, setEditedText] = useState(note.noteText);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const noteRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState(null);

  const saveCursorPosition = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(noteRef.current);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      setCursorPosition(preCaretRange.toString().length);
    }
  };

  const restoreCursorPosition = () => {
    const selection = window.getSelection();
    const range = document.createRange();
    let charCount = 0;
    const traverseNodes = (node) => {
      if (charCount >= cursorPosition) return;
      if (node.nodeType === 3) {
        const textLength = node.textContent.length;
        if (charCount + textLength >= cursorPosition) {
          range.setStart(node, cursorPosition - charCount);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
          return;
        }
        charCount += textLength;
      } else {
        node.childNodes.forEach(traverseNodes);
      }
    };
    traverseNodes(noteRef.current);
  };

  useEffect(() => {
    if (noteRef.current) {
      restoreCursorPosition();
      noteRef.current.style.height = "auto";
      noteRef.current.style.height = `${noteRef.current.scrollHeight}px`;
    }
  }, [editedText]);

  const handleTextChange = (e) => {
    saveCursorPosition();
    setEditedText(e.currentTarget.innerHTML);
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
      <div
        className="note-content"
        contentEditable
        ref={noteRef}
        dangerouslySetInnerHTML={{ __html: editedText }}
        onBlur={handleBlur}
        onInput={handleTextChange}
        style={{
          minHeight: "80px",
          resize: "none",
          overflow: "hidden",
          wordWrap: "break-word",
        }}
      />
      <button className="delete" onClick={handleDelete}>
        <FaTimes />
      </button>
    </div>
  );
}

export default NoteItem;
