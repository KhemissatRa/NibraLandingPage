import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { Element } from 'react-scroll'
import { Link } from 'react-scroll';
export default function Footer() {
  return (
    <footer name="Contact" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Logo / Brand Info */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">Nibra</h2>
            <p className="text-gray-400">
              Empowering the El-Taref community with seamless services and easy access to information.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-300">
               <ul className='flex text-md space-x-4'>
                   <li>   <Link
                 to="Home"
                 smooth={true}
                 duration={500}
                 className="cursor-pointer text-white hover:text-orange-500"
               >Home</Link></li>
                   <li>   <Link
                 to="about"
                 smooth={true}
                 duration={500}
                 className="cursor-pointer text-white hover:text-orange-500"
               >About</Link> </li>
                   <li>   <Link
                 to="Services"
                 smooth={true}
                 duration={500}
                 className="cursor-pointer text-white hover:text-orange-500"
               >Services</Link></li>
                   <li>   <Link
                 to="Contact"
                 smooth={true}
                 duration={500}
                 className="cursor-pointer text-white hover:text-orange-500"
               >Contact </Link> </li>
                 </ul>
          </div>
          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/nibra.technology.ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 p-2 rounded-full transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} Nibra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
