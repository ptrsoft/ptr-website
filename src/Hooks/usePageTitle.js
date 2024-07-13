// src/hooks/usePageTitle.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/about-us':
        document.title = 'About Us';
        break;
      case '/home':
        document.title = 'Home';
        break;
      case '/products':
        document.title = 'Products';
        break;
      case '/process':
        document.title = 'Process';
        break;
      case '/blogs':
        document.title = 'Blogs';
        break;
      case '/contact-us':
        document.title = 'Contact Us';
        break;
        case '/Login':
            document.title = 'Login ';
            break;
      default:
        document.title = 'My App';
        break;
    }
  }, [location.pathname]);
};

export default usePageTitle;
