import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">

      <div className="logo">
        Fin<span>Pay</span>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS (ALL INSIDE MENU) */}
      <nav className={`nav-links ${open ? "active" : ""}`}>

        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#why-us" onClick={closeMenu}>Why Us</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        {/* <a href="#get-started" onClick={closeMenu}>Get Started</a> */}
        <a href="#get-started" onClick={closeMenu} className="nav-cta">Get Started</a>

      </nav>

    </header>
  );
}