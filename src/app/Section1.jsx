import React from 'react';
import './Font.css'; // Importing the external stylesheet
import './Section1.css'


export const Section1 = () => {
  return (
    <section id="one" className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-left">
          <article>
            <header>
            <div className="gray-line2">
                    </div>
              <h3 className="font-semibold mb-2 custom-font-n2 content-start mx-auto px-4 max-w-screen-lg">
                Humans and brands are screwed over by subjective search</h3>
                <br />
            </header>
            <p className="text-xl leading-relaxed custom-font-light font-thin mx-auto px-4 max-w-screen-lg">
              The largest AI and search models don't serve users objective information about what the best products and services are. This screws over humans trying to make decisions and brands trying to grow online.
              <br /><br />
              Known Human is changing the way search and AI chat works by serving only objective information. No ads, no growth hacking, no bias. Our mission is to create a better future for human decision making in the new AI era.
            </p>
          </article>
        </div>
        <div className="gray-line">
        </div>
      </div>
    </section>
  );
};
