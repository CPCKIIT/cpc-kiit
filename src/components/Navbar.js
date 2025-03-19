import React from "react";

const Navbar = () => {
  return (
    <nav className="w-[1290px] h-[144px] top-[-14px]  left-[2px] flex items-center justify-between mx-auto bg-[#0A0202] text-white">
      {/* Logo */}
      <div className="logo" style={{ marginLeft: '52.46px', marginTop: '12px' }}>
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[116.54px] h-[101px] object-contain"
        />
      </div>

      {/* Menu Items */}
      <ul
        className="flex items-center"
        style={{
          width: '625.48px',
          height: '29px',
          marginTop: '46px',
          marginLeft: '564.65px',
          gap: '68px',
        }}
      >
        <li className="text-lg font-medium hover:text-gray-400">
          <a href="#home">Home</a>
        </li>
        <li className="text-lg font-medium hover:text-gray-400">
          <a href="#about">About Us</a>
        </li>
        <li className="text-lg font-medium hover:text-gray-400">
          <a href="#events">Events</a>
        </li>
        <li className="text-lg font-medium hover:text-gray-400">
          <a href="#domain">Domain</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;