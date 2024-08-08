// src/hooks/usePageTitle.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/about-us':
        document.title = 'About Us | PTR Technologies';
        break;
      case '/':
        document.title = 'Home | PTR Technologies';
        break;
      case '/products':
        document.title = 'Products | PTR Technologies';
        break;
      case '/process':
        document.title = 'Process | PTR Technologies';
        break;
      case '/blogs':
        document.title = 'Blogs | PTR Technologies';
        break;
      case '/contact-us':
        document.title = 'Contact Us | PTR Technologies';
        break;
        case '/Login':
            document.title = 'Login | PTR Technologies';
            break;
      default:
        document.title = 'PTR Technologies';
        break;
    }
  }, [location.pathname]);
};

export default usePageTitle;
