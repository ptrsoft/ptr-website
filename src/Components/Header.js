import React, { useEffect, useState } from 'react'
import '../Assets/Styles/Components/Header.css'
import { Link , useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <header className={`header space-container ${scrolled ? 'scrolled' : ''}`}>
        <div className='header_left'>
        <Link to="/">
          <img className='header_logo' alt='Logo' src='/Images/PTRLogo.png' />
        </Link>

          <ul className='flex gap-[3.56rem]'>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/about-us' ? 'active' : ''}>
              <Link to="/about-us">About Us</Link>
            </li>

            <li className={location.pathname === '/process' ? 'active' : ''}>
              <Link to="/process">Process</Link>
            </li>

            <li className={location.pathname === '/contact-us' ? 'active' : ''}>
              <Link to="/contact-us">Contact</Link>
            </li>


            {/* <li className={location.pathname === '/products' ? 'active' : ''}>
              <Link to="/not-found">Products</Link>
            </li> */}
            {/* <li className={location.pathname === '/process' ? 'active' : ''}>
              <Link to="/process">Process</Link>
            </li> */}
            {/* <li>
              <Link to="/not-found">Blogs</Link>
            </li> */}    {/* <li>
              <Link to="/not-found">Blogs</Link>
            </li> */}
          </ul>
        </div>
        <button>
          <Link to="/contact-us">Get In Touch</Link>
        </button>
      </header>
    );
  };
  
  export default Header;
  
