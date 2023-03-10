import React, { useRef, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { GrMenu, GrClose } from 'react-icons/gr';

import Logo from '../assets/closed-carrot-logo.png';

export default function Header() {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showMobileMenu && ref.current && !ref.current.contains(e.target)) {
        setShowMobileMenu(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showMobileMenu]);

  return (
    <header className="bg-white py-10 px-3 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1>
          <Link to="/">
            <img className="max-h-[35px]" src={Logo} alt="closed carrot logo" />
          </Link>
        </h1>

        {/* ---------------------- desktop menu ---------------------- */}
        <nav className="hidden md:block">
          <ul className="flex gap-12">
            <li className="max-w-xs">
              <Link
                className={
                  location.pathname === '/' ? 'underline decoration-4 decoration-orange-500' : null
                }
                to="/"
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                className={
                  location.pathname === '/about-us'
                    ? 'underline decoration-4 decoration-orange-500'
                    : null
                }
                to="/about-us"
              >
                ABOUT US
              </Link>
            </li>

            <li>
              <Link
                className={
                  location.pathname === '/contact-us'
                    ? 'underline decoration-4 decoration-orange-500'
                    : null
                }
                to="/contact-us"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        {/* ---------------------- mobile menu ---------------------- */}

        {/* open button */}
        {!showMobileMenu && (
          <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <GrMenu className="text-2xl" />
          </button>
        )}

        {/* mobile menu nav */}
        {showMobileMenu &&
          createPortal(
            <div className="backdrop-blur-sm bg-black/30 w-screen h-screen absolute top-0 z-20 py-10 px-3">
              {/* close button */}
              <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <GrClose className="text-2xl absolute right-3 top-11" />
              </button>

              {/* nav */}
              <nav
                ref={ref}
                className="relative bg-orange-500 p-5 rounded-md shadow-xl min-w-full top-7"
              >
                <ul className="flex flex-col gap-2 ">
                  <li
                    className={`p-2 rounded-md font-bold text-center min-w-full min-h-full
                      ${location.pathname === '/' ? 'bg-white' : 'text-white hover:bg-orange-600'}`}
                  >
                    <Link
                      className="w-full block"
                      onClick={() => setShowMobileMenu(!showMobileMenu)}
                      to="/"
                    >
                      HOME
                    </Link>
                  </li>

                  <li
                    className={`p-2 rounded-md font-bold text-center min-w-full min-h-full
                      ${
                        location.pathname === '/about-us'
                          ? 'bg-white'
                          : 'text-white hover:bg-orange-600'
                      }`}
                  >
                    <Link
                      onClick={() => setShowMobileMenu(!showMobileMenu)}
                      className="w-full block"
                      to="/about-us"
                    >
                      ABOUT US
                    </Link>
                  </li>

                  <li
                    className={`p-2 rounded-md font-bold text-center min-w-full min-h-full
                      ${
                        location.pathname === '/contact-us'
                          ? 'bg-white'
                          : 'text-white hover:bg-orange-600'
                      }`}
                  >
                    <Link
                      onClick={() => setShowMobileMenu(!showMobileMenu)}
                      className="w-full block"
                      to="/contact-us"
                    >
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>,
            document.body,
          )}
      </div>
    </header>
  );
}
