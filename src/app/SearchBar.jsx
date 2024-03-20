"use client"
import React, { useRef, useEffect } from "react";
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
  const placeholderRef = useRef("");
  const [typedText, setTypedText] = React.useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      placeholderRef.current += placeholder[placeholderRef.current.length];
      setTypedText(placeholderRef.current);
      if (placeholderRef.current.length === placeholder.length) {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="banner" className="title-padder">
      <h1 className="header-title custom-font max-w-screen-lg">
        A search engine that helps humans make decisions
        <div className="rainbow-line"> </div>
      </h1>
      <div className="search-bar-container">
<div className="search-bar">

   <span className="search-input custom-font-italicized">{typedText}</span>
  <div className="typing-cursor"></div>
</div>


      </div>
      <div className="use-client custom-font">
      </div>
    </section>
  );

};

export default SearchBar;