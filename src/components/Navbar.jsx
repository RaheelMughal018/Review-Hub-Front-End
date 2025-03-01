import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { useSelector } from 'react-redux';
import { logo, menu, close } from "../assets";
import { setEmail } from '../action';
import { setAuthToken } from '../action';
import { useDispatch } from 'react-redux';
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Example when retrieving from localStorage
  const storedToken = localStorage.getItem('authToken');

  if (storedToken) {
    // Set the token in the Redux store
    dispatch(setAuthToken(storedToken));
  }



  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const authToken = useSelector((state) => state.authToken);



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }


    };

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Review &nbsp;
            <span className="sm:block hidden text-[#915EFF]"> | HUB</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((nav) => {
          if ((nav.id === 'login' || nav.id === 'signup') && !authToken) {
            return (
              <li
                key={nav.id}
                className={`${active === nav.id ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => navigate(`/${nav.id}`)}
              >
                {nav.title}
              </li>
            );
          } else if (authToken && (nav.id === 'YT' || nav.id === 'contacto' || nav.id === 'FAQ' || nav.id === 'Logout' || nav.id === 'AMZ')) {
            return (
              <li
                key={nav.id}
                className={`${active === nav.id ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  // Check if the current nav item is Logout
                  if (nav.title === 'Logout') {
                    // Remove the authentication token from localStorage
              localStorage.removeItem('authToken');

              // Navigate to the /login page
              navigate('/login');
                  } else {
                    navigate(`/${nav.id}`);
                  }
                }}
              >
                {nav.title}
              </li>
            );
          }
          return null;
        })}
      </ul>



        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className={`${!toggle ? "hidden" : "flex flex-col"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
      {navLinks.map((nav) => {
        if ((nav.id === 'login' || nav.id === 'signup') && !authToken) {
          return (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.id ? "text-white" : "text-secondary"
                }`}
              onClick={() => {
                setToggle(!toggle);
                navigate(`/${nav.id}`);
              }}
            >
              {nav.title}
            </li>
          );
        } else if (authToken && (nav.id === 'AMZ' || nav.id === 'YT' || nav.id === 'contacto' || nav.id === 'FAQ' || nav.id === 'Logout')) {
          return (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.id ? "text-white" : "text-secondary"
                }`}
              onClick={() => {
                setToggle(!toggle);

                // Check if the current nav item is Logout
                if (nav.title === 'Logout') {
                  // Remove the authentication token from localStorage
              localStorage.removeItem('authToken');

              // Navigate to the /login page
              navigate('/login');
                } else {
                  navigate(`/${nav.id}`);
                }
              }}
            >
              {nav.title}
            </li>
          );
        }
        return null;
      })}
    </ul>


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
