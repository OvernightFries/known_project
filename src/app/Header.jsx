import React from 'react';
import Image from 'next/Image'
import myLogo from './known_logo.png';
import './Font.css'
console.log(myLogo);


export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/_next/static/media/known_logo.af8b312e.png"
              alt="Company Logo"
              height={29}
              width={195}
              placeholder="blur"
              blurDataURL="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fknown_logo.af8b312e.png&w=8&q=70"
            />
          </div>
          <nav>
            <ul className="flex">
              <li className="mr-6"><a href="#" className="text-black">Team</a></li>
              <li className="mr-6"><a href="#" className="text-black">Research</a></li>
              <li className="mr-6"><a href="#" className="text-black">Work With Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};



export default Header;
