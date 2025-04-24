
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-red-400 border-b-2 border-red-500 transition duration-300"
      : "hover:text-red-400 hover:border-b-2 hover:border-red-500 transition duration-300";

  return (
    <nav className="bg-teal-700 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <div>
            <h1 className="text-white font-bold text-lg">NEK Dental & Aesthetic Center</h1>
            <p className="text-red-300 text-sm">Elevate Your Smile & Radiance</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 text-white font-semibold text-md">
          <NavLink to='/' className={linkClasses}>Home</NavLink>
          <NavLink to='/About' className={linkClasses}>About</NavLink>
          <NavLink to='/Contact' className={linkClasses}>Contact</NavLink>
          <NavLink to='/Service' className={linkClasses}>Services</NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="text-white h-6 w-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
