// Navbar.jsx
// Navegacion principal de Forge Fitness.

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Icon from "../../assets/icon.png";

import "./Navbar.css";

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Beneficios", href: "#benefits" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Planes", href: "#plans" },
  { label: "Entrenadores", href: "#trainers" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <img src={Icon} alt="Forge Fitness logo" className="navbar__logo" />

          <div className="navbar__brandText">
            <span className="navbar__name">Forge</span>
            <span className="navbar__subtitle">Fitness</span>
          </div>
        </a>

        <nav className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#plans"
            className="navbar__cta btn btn--primary"
            onClick={closeMenu}
          >
            Empezar hoy
          </a>
        </nav>

        <button
          className="navbar__toggle"
          type="button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}