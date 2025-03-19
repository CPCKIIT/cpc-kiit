import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-[463.56px] bg-[#0A0202] border-t border-white mx-auto relative mt-4">
      <div
        className="w-full h-0 border-t border-white opacity-0"
        style={{ transform: 'rotate(180deg)', position: 'absolute', top: '0' }}
      />
      <div className="max-w-[1305px] h-[431px] flex justify-between items-start mx-auto relative top-3 px-4">
        {/* Left Section */}
        <div className="flex flex-col items-start ml-2">
          <img
            src="/logo.png"
            alt="Footer Logo"
            className="w-[201px] h-[193px] object-contain"
          />
          {/* Follow Us Section */}
          <div className="mt-2">
            <p className="text-white font-semibold text-[35px] leading-[41.86px] text-left" style={{ fontFamily: 'Advent Pro, sans-serif' }}>
              FOLLOW US ON
            </p>
            {/* Social Media Icons */}
            <div className="flex mt-2 gap-4 space-x-2">
              <FaInstagram className="w-[47px] h-[47px] text-white" />
              <FaLinkedin  className="w-[47px] h-[47px] text-white" />
              <FaDiscord   className="w-[47px] h-[47px] text-white"/>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-left font-semibold" style={{ fontFamily: 'Advent Pro, sans-serif', width: '202px', height: '147px' }}>
          <p className="text-[40px] leading-[47.84px] text-white">CONTACT US</p>
          <p className="text-[40px] leading-[47.84px] text-white">+91 23456</p>
          <p className="text-[40px] leading-[47.84px] text-white">+91 45689</p>
        </div>

        {/* Right Section */}
        <div className="text-left font-semibold" style={{ fontFamily: 'Advent Pro, sans-serif', width: '335px', height: '420.56px' }}>
          <p className="text-[40px] leading-[47.84px] text-white">LOCATION</p>
          <p className="text-[40px] leading-[47.84px] text-white">KIIT UNIVERSITY</p>
          <p className="text-[40px] leading-[47.84px] text-white">BHUBANESHWAR</p>
          <p className="text-[40px] leading-[47.84px] text-white">ODISHA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
