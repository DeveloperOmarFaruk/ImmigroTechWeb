import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useFunctions from "../../Hooks/useFunction";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const {scrollToSection} = useFunctions();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: "smooth", // Smooth scrolling animation
    });
  };


  return (
    <>
      <header className={isSticky ? "sticky" : ""}>
        <div
          className={`menuToggle ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <Link to="/" className="logo" onClick={handleScrollToTop}>
          ImmigroTech
        </Link>
        <nav className={`navigation ${menuActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => scrollToSection("about")}>About Us</Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("services")}>Services</Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("choose-thrive")}>Choose Thrive</Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection("contact")}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
