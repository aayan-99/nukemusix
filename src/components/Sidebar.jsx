import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

import logo from '../assets/A-logo.png'
import { links } from '../assets/constants'
// import { isInputElement } from "react-router-dom/dist/dom";

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <Link to='/'><img src={logo} alt={logo} className='w-full h-14 object-contain' /></Link>
        <Link to='/'><h1 className="w-[80%] mx-auto text-center rounded-lg text-blue-400 font-[Poppins]">Nuke<span className="text-pink-300">Musi✘</span></h1></Link>
        <NavLinks />
        {/* bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-2xl */}
      </div>

      <div className="absolute md:hidden block top-6 right-3 cursor-pointer">
        {mobileMenuOpen ?
          <RiCloseLine className="w-6 h-6 text-white" onClick={() => setMobileMenuOpen(false)} />
          :
          <HiOutlineMenu className="w-6 h-6 text-white" onClick={() => setMobileMenuOpen(true)} />
        }
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <div className="flex flex-col items-start">
          <Link to='/'><img src={logo} alt={logo} className='w-auto h-14 object-contain' /></Link>
          {/* <h1>Nuke-Musix</h1> */}
          <Link to='/'><h1 className="text-left rounded-lg text-blue-400 font-[Poppins]">Nuke<span className="text-pink-300">Musi✘</span></h1></Link>
        </div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
};

export default Sidebar;

