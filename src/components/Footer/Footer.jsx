// Footer.jsx
// Pie de pagina principal de Forge Fitness.

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

import Logo from "../../assets/icon.png";

import "./Footer.css";

const navigation = [
  { label: "Inicio", href: "#home" },
  { label: "Beneficios", href: "#benefits" },
  { label: "Servicios", href: "#services" },
  { label: "Planes", href: "#plans" },
  { label: "Entrenadores", href: "#trainers" },
  { label: "Contacto", href: "#contact" },
];

const socialLinks = {
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  whatsapp: "https://www.whatsapp.com/",
  github: "https://github.com/hazajulian",
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">

        {/* marca */}

        <div className="footer__brand">

          <img
            src={Logo}
            alt="Forge Fitness"
            className="footer__logo"
          />

          <p>
            Gimnasio premium pensado para ayudarte a construir tu mejor
            versión con instalaciones modernas, entrenadores profesionales
            y un ambiente que inspira.
          </p>

          <p className="footer__disclaimer">
            Proyecto ficticio desarrollado únicamente con fines educativos y
            para demostrar habilidades de desarrollo web dentro de un
            portfolio profesional.
          </p>

          <div className="footer__socials">

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* navegación */}

        <div className="footer__column">

          <h3>Navegación</h3>

          <ul>

            {navigation.map((item) => (
              <li key={item.label}>
                <a href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}

          </ul>

        </div>

        {/* contacto */}

        <div className="footer__column">

          <h3>Contacto</h3>

          <ul>

            <li>Av. Fuerza 1240</li>

            <li>Buenos Aires</li>

            <li>+54 9 11 XXXX-XXXX</li>

            <li>contacto@forgefitness.com</li>

          </ul>

        </div>

        {/* horarios */}

        <div className="footer__column">

          <h3>Horarios</h3>

          <ul>

            <li>Lunes a Viernes</li>
            <li>06:00 - 23:00</li>

            <li>Sábados</li>
            <li>08:00 - 18:00</li>

            <li>Domingos</li>
            <li>09:00 - 14:00</li>

          </ul>

        </div>

      </div>

      {/* barra inferior */}

      <div className="footer__bottom">

        <div className="container footer__bottomContent">

          <p>
            © 2026 Forge Fitness. Todos los derechos reservados.
          </p>

          <p>
            Diseñado y desarrollado por{" "}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__author"
            >
              Julian Haza
            </a>
            .
          </p>

        </div>

      </div>

    </footer>
  );
}