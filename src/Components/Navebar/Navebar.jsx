import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/vite.svg';
import { Globe } from 'lucide-react';

export default function Navebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[95%]  z-20 py-2 px-4 md:px-8 lg:px-16 bg-black rounded-3xl shadow-lg">
  <div className="flex items-center gap-2 justify-between">
    {/* Logo */}
    <Link to="/">
      <span className="bg-[#008236] text-4xl text-white py-1 px-3 rounded-lg">🕌</span>
    </Link>
<div className=' flex-col'>
  <div><span className="text-xl text-[#101828] font-bold">Four Ferrets Travel</span>
<h1 className="text-md text-[#008236] font-bold text-right ">رحلات روحانية</h1></div>
</div>
    {/* Nav links (centered) */}
    <div className="hidden md:flex justify-center  flex-1">
      <ul className="flex items-center text-lg text-white px-6 py-2 gap-24 font-semibold">
        <li><Link to="/#header" className="hover:hover:text-[#008236] font-bold">Home</Link></li>
        <li><Link to="/#about" className="hover:hover:text-[#008236]">AboutUs</Link></li>
        <li><Link to="/#services" className="hover:hover:text-[#008236]">Our Travels</Link></li>
    
        <li><Link to="/#testimonials" className="hover:hover:text-[#008236]">Testimonials</Link></li>
       
      </ul>
    </div>

    {/* Let’s Talk Button */}
    <div className="hidden md:flex gap-3 ">
      <Link to="/conectus">
        <button className=" flex gap-2 items-center bg-transparent hover:shadow-sm hover:border-0 cursor-pointer    text-white font-bold text-lg px-6 py-2 rounded-full shadow-md transition">
         العربية <Globe/>
        </button>
      </Link>
      <Link to="/conectus">
        <button className=" bg-[#A40008] hover:shadow-sm hover:border-0 cursor-pointer   hover:bg-[#7e0208] text-white font-medium text-lg px-6 py-2 rounded-full shadow-md transition">
          Conntact Us
        </button>
      </Link>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-orange-500 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile menu links */}
  {isOpen && (
    <div className="bg-black text-md pl-4 font-semibold py-3 my-2 w-[200px] md:hidden rounded-lg shadow-md space-y-1">
      <Link to="/#header" className="block text-white hover:text-orange-500">Home</Link>
      <Link to="/#about" className="block text-white hover:text-orange-500">About</Link>
      <Link to="/#services" className="block text-white hover:text-orange-500">Services</Link>
      <Link to="/#portfolio" className="block text-white hover:text-orange-500">Portfolio</Link>
      <Link to="/#testimonials" className="block text-white hover:text-orange-500">Testimonials</Link>
      <Link to="/#faqs" className="block text-white hover:text-orange-500">Q&A</Link>
      <Link to="/conectus">
        <button className="w-3/4 mx-5 bg-orange-500 hover:bg-transparent hover:text-orange-500 text-white font-semibold text-sm py-2 shadow-md rounded-full transition">
          Let’s Talk
        </button>
      </Link>
    </div>
  )}
</nav>

  );
}
