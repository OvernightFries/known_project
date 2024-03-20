"use client"
import React, { useRef, useEffect, useState } from "react";
import "./SearchBar.css";
import "./Font.css";
import "./Section1.css"
import logo from './images/kh_teddy.png';
import Image from 'next/image';
import './TeamSection.css';
import kingsley from './images/kingsley.png';
import alex from './images/alex.png';
import michelle from './images/michelle.png';
import nicole from './images/nicole.png';
import jack from './images/jack2.jpeg';
import tim from './images/ta.jpeg';
import MiniSearchBar from './MiniSearchBar.jsx'
import "./Font.css"
import "./Section1.css"



export const SearchBar = () => {
  const placeholder = "What jeans should I buy?";
  const [typedText, setTypedText] = useState("");

 useEffect(() => {
    if (typedText.length < placeholder.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(placeholder.slice(0, typedText.length + 1));
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [typedText, placeholder]);

  return (
    <section id="banner" className="title-padder">
      <h1 className="header-title custom-font max-w-screen-lg">
        <span>A search engine that</span>
        <span className="line-spacing">helps humans make decisions</span>
        <div className="rainbow-line"></div>
      </h1>
      <div className="search-bar-container">
        <div className="search-bar">
          <div className="search-logo">
            <Image
              src={logo}
              alt="Logo"
              width={60}
              height={60}
              objectFit="contain"
            />
          </div>
          <input
            type="text"
            className="search-input custom-font-italicized"
            value={typedText}
            onChange={(e) => setTypedText(e.target.value)}
            placeholder={placeholder}
          />
          <div className="typing-cursor"></div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;;