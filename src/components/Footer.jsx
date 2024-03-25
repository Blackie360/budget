import React from 'react';
import UserCTA from './UserCTA';

const Footer = () => {
  return (
    <footer className="bg-opacity-100 bg-white text-black p-4 text-center md:p-6 lg:p-8 xl:p-10">
<UserCTA />

      <p className="text-sm md:text-base lg:text-lg xl:text-xl">
        &copy; {new Date().getFullYear()} <a 
        href="https://felix-jumason.netlify.app/"
        className='hover:bg-purple-600'><i>SmartSpend.</i></a> All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
