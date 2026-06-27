// Gallery.jsx
// Galería visual de espacios y entrenamientos de Forge Fitness.

import { FaCamera, FaArrowRight } from "react-icons/fa6";

import Gallery1 from "../../assets/Gallery/galeria-1.png";
import Gallery2 from "../../assets/Gallery/galeria-2.png";
import Gallery3 from "../../assets/Gallery/galeria-3.png";
import Gallery4 from "../../assets/Gallery/galeria-4.png";
import Gallery5 from "../../assets/Gallery/galeria-5.png";
import Gallery6 from "../../assets/Gallery/galeria-6.png";

import "./Gallery.css";

const galleryImages = [
  {
    image: Gallery1,
    title: "Zona funcional",
    text: "Entrenamientos dinámicos y espacios amplios.",
    featured: true,
  },
  {
    image: Gallery2,
    title: "Peso libre",
    text: "Equipamiento preparado para todos los niveles.",
    featured: false,
  },
  {
    image: Gallery3,
    title: "Clases grupales",
    text: "Energía, comunidad y acompañamiento.",
    featured: false,
  },
  {
    image: Gallery4,
    title: "Cardio",
    text: "Resistencia, intensidad y progreso.",
    featured: false,
  },
  {
    image: Gallery5,
    title: "Entrenamiento guiado",
    text: "Técnica, seguridad y seguimiento profesional.",
    featured: false,
  },
  {
    image: Gallery6,
    title: "Comunidad Forge",
    text: "Un lugar para entrenar y sentirte parte.",
    featured: true,
  },
];

export function Gallery() {
  return (
    <section className="gallery section section--light" id="gallery">
      <div className="gallery__container container">

        {/* encabezado */}

        <div className="gallery__header">
          <div className="sectionHeader">
            <p className="sectionEyebrow">
              Galería
            </p>

            <h2 className="sectionTitle">
              Viví la experiencia Forge desde adentro
            </h2>
          </div>

          <div className="gallery__intro">
            <p>
              Espacios modernos, energía real y un ambiente pensado para que
              cada entrenamiento se sienta cómodo, seguro y motivador.
            </p>

            <a href="#contact" className="gallery__link">
              Conocer el gimnasio
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* grilla */}

        <div className="gallery__grid">
          {galleryImages.map((item) => (
            <article
              className={`gallery__item ${
                item.featured ? "gallery__item--featured" : ""
              }`}
              key={item.title}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery__image"
              />

              <div className="gallery__overlay">
                <span>
                  <FaCamera />
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}