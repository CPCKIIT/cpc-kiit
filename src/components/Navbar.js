import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-4 p-4 bg-black h-20 text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/domains">Domains</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;