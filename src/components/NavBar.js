import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';

function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${scrolling ? 'scrolled' : ''}`}>
      <div className='nav-container'>
        <div className="nav-left">
          <a href="/react-e-commerce/#/">
            <img src={logo} alt="" />
          </a>
          <input type="text" placeholder="What are you looking for?" id="" />
        </div>
        <div className="nav-right">
          <a href="/react-e-commerce/#/all">PRODUCTS</a>
          <a href="/react-e-commerce/#/">CONTACT</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
