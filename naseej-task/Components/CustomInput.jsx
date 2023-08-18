import React, { useEffect, useState } from "react";

export default function CustomInput({ pattern }) {
  const [highlightedValue, setHighlightedValue] = useState("");
  const [originalSentence, setOriginalSentence] = useState([]);
  const [lettersMap , setLettersMap] = useState({});
  const myMap = {}
  
  useEffect(() => {
    originalSentence.forEach((letter) => {
      if (myMap[letter]) {
        myMap[letter] += 1;
      } else {
        myMap[letter] = 1;
      }
      
    });
    setLettersMap({...myMap})
  }, [originalSentence]);

  const highlightText = (e) => {
    let newVal = "";
    let text = e.target.value;
    setOriginalSentence(text.split(" ").join("").split(""));
    let words = text.split(" ");
    words.forEach((word) => {
      newVal += `<span class="${
        pattern.test(word) ? "highlight" : ""
      }">${word}</span> `;
    });
    setHighlightedValue(newVal);
  };

  return (
    <div>
      <label htmlFor="input">Type your sentence</label>
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
      
        {Object.keys(lettersMap).map((letter) => {
          return <span>{letter} : {lettersMap[letter]},</span>;
        })}
    
    </div>
  );
}
