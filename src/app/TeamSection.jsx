"use client"
import React, { useRef, useEffect } from "react";
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

export const TeamSection = () => {

  return (
    <div className="custom-font">
      <section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title"> Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="team-member-image">
                <Image
                  src={jack}
                  alt="Jack"
                  width={200}
                  height={200}

                />
              </div>
              <div className="team-member-details">
                <h3 className="team-member-name">Jack Armstrong</h3>
                <p className="team-member-role">Human 1</p>
                  <MiniSearchBar placeholder="What office chair should I get?" />

              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <Image
                  src={alex}
                  alt="Alex"
                  width={200}
                  height={200}
                />
              </div>
              <div className="team-member-details">
                <h3 className="team-member-name">Alex Rogers</h3>
                <p className="team-member-role">Human 2</p>
                <MiniSearchBar placeholder="What are people buying?" />


              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <Image
                  src={nicole}
                  alt="Nicole"
                  width={200}
                  height={200}
                />
              </div>
              <div className="team-member-details">
                <h3 className="team-member-name">Nicole Lin</h3>
                <p className="team-member-role">Founding Engineer</p>
                 <MiniSearchBar placeholder="What winter jacket should I get?" />

              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <Image
                  src={michelle}
                  alt="Michelle"
                  width={200}
                  height={200}
                />
              </div>
              <div className="team-member-details">
                <h3 className="team-member-name">Michelle Tang</h3>
                <p className="team-member-role">Founding Engineer</p>
                    <MiniSearchBar placeholder="Where should I watch Dune?" />

              </div>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <Image
                  src={kingsley}
                  alt="Kingsley"
                  width={200}
                  height={200}
                />
              </div>
              <div className="team-member-details">
                <h3 className="team-member-name">Kingsley U</h3>
                <p className="team-member-role">Principal Engineer Intern</p>
                  <MiniSearchBar placeholder="Columbia Students?" />

              </div>
            </div>
          </div>
           <div className="gray-line">
                   </div>
        </div>
      </section>

{/*       <section id="advisory-board" className="advisory-board-section"> */}
{/*         <div className="container"> */}
{/*           <h2 className="section-title"> Advisory Board</h2> */}
{/*           <div className="advisory-members"> */}
{/*             <div className="advisory-member"> */}
{/*               <div className="team-member-image"> */}
{/*                 <Image */}
{/*                   src={tim} */}
{/*                   alt="Tim" */}
{/*                   width={200} */}
{/*                   height={200} */}
{/*                 /> */}
{/*               </div> */}
{/*               <div className="advisory-member-details"> */}
{/*                 <h3 className="advisory-member-name">Tim Armstrong</h3> */}
{/*                 <p className="team-member-role"> Chief Advisor</p> */}
{/*                 <div className="advisory-text-blob custom-font-tim"> */}
{/*                                   The largest AI and Search Models don’t serve users objective information about what the best products and services are. This screws over humans trying to make decisions and brands trying to grow online. Known Human is changing the way search and AI chat works by serving only objective information. */}
{/*                 </div> */}

{/*               </div> */}

{/*             </div> */}
{/*           </div> */}
{/*         </div> */}
{/*         <div className="gray-line"> */}
{/*                 </div> */}
{/*       </section> */}

    </div>
  );
};

export default TeamSection;
