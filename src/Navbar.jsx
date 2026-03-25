import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [navShrunk, setNavShrunk] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setNavShrunk(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className={`top-nav ${navShrunk ? "shrink" : ""}`}>
      <Link to="/" className="nav-logo">
        <span>IDA BYRD</span>
        <span>HILL</span>
      </Link>

      <nav className="nav-links">
        <button type="button" onClick={() => goToSection("about")} className="nav-link-button">
          ABOUT
        </button>

        <button type="button" onClick={() => goToSection("keynotes")} className="nav-link-button">
          KEYNOTES
        </button>

        <Link to="/publications">PUBLICATIONS</Link>

        <Link to="/book" className="nav-button">
          BOOK IDA
        </Link>
      </nav>
    </header>
  );
}