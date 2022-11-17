import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linkContainerRef = useRef(null);
  const liContainerRef = useRef(null);

  const toggleMenu = () => {
    if (toggle) {
      const getHeight = liContainerRef.current.clientHeight;
      linkContainerRef.current.style.height = `${getHeight}px`;
    } else {
      linkContainerRef.current.style.height = `${0}px`;
    }
  };

  useEffect(() => {
    toggleMenu();
  }, [toggle]);

  return (
    <>
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle" onClick={() => setToggle(!toggle)}>
          <FaBars />
        </button>
      </div>
      <div className="links-container" ref={linkContainerRef}>
        <ul className="links" ref={liContainerRef}>
          {links.map((link) => {
            const { id, url, text } = link;

            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((item) => {
          const { id, url, icon } = item;

          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;
