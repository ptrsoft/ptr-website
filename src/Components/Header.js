import React, { useEffect, useState } from 'react';
import '../Assets/Styles/Components/Header.css';
import { Link, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, useMediaQuery } from '@mui/material';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [isProcessExpanded, setIsProcessExpanded] = useState(false);
  const [state, setState] = React.useState({
    open: false,
  });

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleTechnologMenuOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleTechnologClose = () => {
    setAnchorE2(null);
  };


  // Scroll effect remains the same
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/">
            <ListItemText  className='mobile_links' primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/about-us">
            <ListItemText  className='mobile_links' primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemText primary="Technologies" />
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/technologies/ai-native">
            <ListItemText className='mobile_links' primary="AI-native Development" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/technologies/cloud-native">
            <ListItemText className='mobile_links' primary="Cloud Native Development" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemText primary="Process" />
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/process/AI-Native">
            <ListItemText className='mobile_links' primary="AI-native Development" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/process/cloud-native">
            <ListItemText className='mobile_links' primary="Cloud Native Development" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/contact-us">
            <ListItemText  className='mobile_links' primary="Contact Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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
         
          <li 
            className={location.pathname.startsWith('/technologies') ? 'active' : ''}
            onMouseEnter={handleTechnologMenuOpen}
            onMouseLeave={handleTechnologClose}
          >
            <Link to="/process">Technologies</Link>
            <Menu
              anchorEl={anchorE2}
              open={Boolean(anchorE2)}
              onClose={handleTechnologClose}
              MenuListProps={{ onMouseLeave: handleTechnologClose }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <MenuItem component={Link} to="/technologies/ai-native" onClick={handleTechnologClose}>AI-native Devlopment</MenuItem>
              <MenuItem component={Link} to="technologies/cloud-native" onClick={handleTechnologClose}>Cloud Native Devlopment</MenuItem>
            </Menu>
          </li>

          <li 
            className={location.pathname.startsWith('/process') ? 'active' : ''}
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
          >
            <Link to="/process">Process</Link>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
              <MenuItem component={Link} to="/process/AI-Native" onClick={handleMenuClose}>AI-native Devlopment</MenuItem>
              <MenuItem component={Link} to="/process/cloud-native" onClick={handleMenuClose}>Cloud Native Devlopment</MenuItem>
            </Menu>
          </li>
          {/* Other navigation items */}
          <li className={location.pathname === '/contact-us' ? 'active' : ''}>
            <Link to="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
      <div className='header_right_box'>
        <button>
          <Link to="/contact-us">Get In Touch</Link>
        </button>
        <span className='responsive_menu cursor-pointer' edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon style={{fontSize:27}} />
        </span>
        <Drawer
          anchor={isSmallScreen ? 'top' : 'right'}
          open={state.open}
          onClose={toggleDrawer(false)}
        >
          {list(isSmallScreen ? 'top' : 'right')}
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
