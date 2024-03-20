import React from 'react';
import './Font.css';
import './Title.css';

export const Title = () => {
  return (
    <section id="banner" className="title-padder">
      <h1 className="header-title custom-font">
        A search engine that helps humans make decisions
        <div className="rainbow-line"> </div>
      </h1>
    </section>
  );
};
