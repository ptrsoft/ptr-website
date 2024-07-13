import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`pad-container z-50 fixed flex justify-between pt-[2.2rem] pb-[2.2rem] b items-center h-[3.375rem] transition-colors duration-500 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <img className='w-[9.9695rem]' alt='Logo' src='/Images/PTRLogo.png' />

      <ul className='flex gap-[3.56rem]'>
        <li className={`text-base font-poppins font-medium ${isActive('/home') ? 'border-b-2' : ''}`} style={isActive('/home') ? { borderColor: '#666AE5' } : {}}>
          <Link to="/home">Home</Link>
        </li>
        <li className={`text-base font-poppins font-medium ${isActive('/about-us') ? 'border-b-2' : ''}`} style={isActive('/about-us') ? { borderColor: '#666AE5' } : {}}>
          <Link to="/about-us">About Us</Link>
        </li>
        <li className={`text-base font-poppins font-medium ${isActive('/products') ? 'border-b-2' : ''}`} style={isActive('/products') ? { borderColor: '#666AE5' } : {}}>
          <Link to="/not-found">Products</Link>
        </li>
        <li className={`text-base font-poppins font-medium ${isActive('/process') ? 'border-b-2' : ''}`} style={isActive('/process') ? { borderColor: '#666AE5' } : {}}>
          <Link to="/process">Process</Link>
        </li>
        <li className={`text-base font-poppins font-medium ${isActive('/blogs') ? 'border-b-2' : ''}`} style={isActive('/blogs') ? { borderColor: '#666AE5' } : {}}>
          <Link to="/not-found">Blogs</Link>
        </li>
        <li className={`text-base font-poppins font-medium ${isActive('/contact-us') ? 'border-b-2' : ''}`} style={isActive('/contact-us') ? { borderColor: '#666AE5' } : {}}>
          <Link to="/contact-us">Contact</Link>
        </li>
      </ul>

      <div className='flex gap-[3rem]'>
        <button className='login_btn'> <Link to="/Login">Login</Link></button>
        <button className='get_in_touch_btn'> <Link to="/contact-us">Get in touch</Link></button>
      </div>
    </header>
  );
};

export default Header;
