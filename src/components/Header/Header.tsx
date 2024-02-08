import React, { useEffect, useState, useRef } from 'react';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 150 && currentScrollPosition >= prevScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      prevScrollY.current = currentScrollPosition;
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isVisible]);

  return (
    <div className='flex bg-neutral w-[90%] mb-32 sm:h-54 sm:pl-2 sm:mb-8'>
      {/* The NavBarDesktop component is hidden when the width of the screen is less than 640px */}
      {
        isVisible && (
          <NavBarMobile />
        )
      }
      <NavBarDesktop />
    </div>
  );
};

export default Header;