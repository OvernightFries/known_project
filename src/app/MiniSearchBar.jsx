import React, { useState, useEffect } from "react";
import "./MiniSearchBar.css";
import "./SearchBar.css";

const MiniSearchBar = ({ placeholder }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentText = "";
    const intervalId = setInterval(() => {
      if (currentText.length < placeholder.length) {
        currentText += placeholder[currentText.length];
        setTypedText(currentText);
      } else {
        clearInterval(intervalId);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [placeholder]);

  return (
    <div className="mini-search-bar">
      <span className="mini-search-input">{typedText}</span>
      <div className="mini-typing-cursor"></div>
    </div>
  );
};

export default MiniSearchBar;
