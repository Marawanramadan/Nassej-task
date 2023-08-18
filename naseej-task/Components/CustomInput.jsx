import React, { useRef, useState } from "react";

export default function CustomInput({ pattern }) {
  const [highlightedValue, setHighlightedValue] = useState("");

  const inputRef = useRef(null);
  const highlightText = (e) => {
    let newVal = "";
    let words = e.target.value.split(" ");
    words.forEach((word) => {
      newVal += `<span class="${
        pattern.test(word) ? "highlight" : ""
      }">${word}</span> `;
    });
    setHighlightedValue(newVal);
  };

  return (
    <div>
      <label htmlFor="input">Click here to start typing</label>
      <input
        className="transparentInput"
        id="input"
        type="text"
        onChange={highlightText}
      />
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: highlightedValue }}
      />
    </div>
  );
}
