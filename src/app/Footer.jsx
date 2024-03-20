import Image from 'next/image';
import React from 'react';
import teddy from './images/kh_teddy.png';
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© Known Human Incorporated.</p>
        <div className="image-container">
          <Image
            src={teddy}
            alt="Teddy Logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
};
