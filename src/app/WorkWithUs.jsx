import React from 'react';
import './WorkWithUs.css'; // Importing the CSS file for styles

export const WorkWithUs = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="header-titlee">
          Work With Us
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="form-grid">
            <input
              type="text"
              placeholder="Your name"
              className="input-field name-email"
            />
            <input
              type="email"
              placeholder="Your email"
              className="input-field name-email"
            />
            <textarea
              placeholder="Say anything..."
              className="input-field large-textarea"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="submit-btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
