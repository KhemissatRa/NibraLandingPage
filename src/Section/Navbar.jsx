import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="text-white p-4">
      <nav className="container mx-auto flex justify-between items-center px-4 bg-white text-black">
        {/* Logo */}
        <div className="text-xl font-bold text-[#0F38A1]">
          El-<span className="text-orange-600">Taref</span>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <HiOutlineX className="text-3xl text-[#0F38A1]" />
            ) : (
              <HiOutlineMenu className="text-3xl text-[#0F38A1]" />
            )}
          </button>
        </div>

        {/* Menu (Desktop) */}
        <ul className="hidden md:flex text-md space-x-4">
          {['Home', 'about', 'Services', 'Contact'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer text-black hover:text-orange-500"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA and More (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-[#0F38A1]">
            <a
              href="https://www.facebook.com/nibra.technology.ltd"
              target="_blank"
              rel="noopener noreferrer"
            >
              More
            </a>
          </h1>
          <button className="bg-[#00B7C3] text-white px-4 py-2 rounded hover:bg-orange-700">
            <a
              href="https://play.google.com/store/apps/details?id=nibra.eltarf.dz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-4 pt-4 space-y-3">
          {['Home', 'about', 'Services', 'Contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="block cursor-pointer hover:text-orange-500"
              onClick={toggleMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          <div className="mt-4 space-y-2">
            <h1 className="text-lg font-bold text-[#0F38A1]">
              <a
                href="https://www.facebook.com/nibra.technology.ltd"
                target="_blank"
                rel="noopener noreferrer"
              >
                More
              </a>
            </h1>
            <button className="bg-[#00B7C3] text-white w-full py-2 rounded hover:bg-orange-700">
              <a
                href="https://play.google.com/store/apps/details?id=nibra.eltarf.dz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
