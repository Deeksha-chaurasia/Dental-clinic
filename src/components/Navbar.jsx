import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Logo from '../assets/Logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-red-400 border-b-2 border-red-500 transition duration-300"
      : "hover:text-red-400 hover:border-b-2 hover:border-red-500 transition duration-300";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-teal-700 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="h-12 w-12" />
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
        <div className="md:hidden cursor-pointer p-2 rounded-md hover:bg-teal-600 transition duration-300" onClick={toggleMenu}>
          <Menu className="text-white h-6 w-6" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-700 text-white font-semibold py-4 grid grid-cols-1 gap-4">
          <NavLink to='/' className={linkClasses} onClick={toggleMenu}>Home</NavLink>
          <div className="grid grid-cols-2 gap-4">
            <NavLink to='/About' className={linkClasses} onClick={toggleMenu}>About</NavLink>
          </div>
          <NavLink to='/Contact' className={linkClasses} onClick={toggleMenu}>Contact</NavLink>
          <NavLink to='/Service' className={linkClasses} onClick={toggleMenu}>Services</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

