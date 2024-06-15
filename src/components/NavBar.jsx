import React, { useState } from 'react';
import { navItems } from '../constants';
import arrow from '../assets/arrow.svg';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='w-full h-20 flex justify-around bg-black text-white items-center border-b border-gray-800 px-4 lg:px-8'>
        <div>
          <h1 className='text-3xl'>Onyx Forge</h1>
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu}>
            <img src={isMobileMenuOpen ? close : menu} alt="menu" className="w-8 h-8" />
          </button>
        </div>
        <div className={`lg:flex lg:ml-14 lg:space-x-10 ${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row lg:static absolute top-20 left-0 w-full lg:w-auto bg-black lg:bg-transparent lg:items-center z-10`}>
          <ul className='lg:flex space-y-4 lg:space-y-0 lg:space-x-10 mt-4 lg:mt-0 px-4 lg:px-0 '>
            {navItems.map((item, index) => (
              <li key={index} className='text-center lg:text-left '>
                <Link className='hover:text-indigo-300 active:text-indigo-300' to={item.href} onClick={toggleMobileMenu}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className='flex justify-center mt-4 lg:mt-0 lg:space-x-10 items-center'>
            <a href="#" className='bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-4 rounded-md'>Let's Talk <img src={arrow} alt="arrow" className="w-6 inline mb-1" /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
