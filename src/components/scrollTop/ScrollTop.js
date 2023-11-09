import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*
Use in App.js to make all navlink action link to the top section of the linked route
*/
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
 
export default ScrollToTop;
