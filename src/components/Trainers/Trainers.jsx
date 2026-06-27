// Trainers.jsx
// Equipo de entrenadores de Forge Fitness.

import {
  FaArrowRight,
  FaInstagram,
} from "react-icons/fa6";

import Trainer1 from "../../assets/trainers/entrenador-1.png";
import Trainer2 from "../../assets/trainers/entrenador-2.png";
import Trainer3 from "../../assets/trainers/entrenador-3.png";

import "./Trainers.css";

const instagramUrl = "https://www.instagram.com/";

const trainers = [
  {
    image: Trainer1,
    name: "Martín López",
    role: "Entrenador de Musculación",
    description:
      "Especialista en fuerza e hipertrofia con más de 10 años ayudando a personas de todos los niveles.",
  },
  {
    image: Trainer2,
    name: "Sofía Fernández",
    role: "Entrenadora Funcional",
    description:
      "Enfocada en movilidad, resistencia y entrenamiento funcional para mejorar el rendimiento diario.",
  },
  {
    image: Trainer3,
    name: "Lucas Medina",
    role: "Coach de Alto Rendimiento",
    description:
      "Preparación física para deportistas y programas personalizados orientados al progreso constante.",
  },
];

export function Trainers() {
  return (
    <section
      className="trainers section section--light"
      id="trainers"
    >
      <div className="trainers__container container">

        <div className="trainers__header sectionHeader">

          <p className="sectionEyebrow">
            Nuestro equipo
          </p>

          <h2 className="sectionTitle">
            Personas que te acompañan en cada entrenamiento
          </h2>

          <p className="sectionText">
            Nuestro equipo está formado por profesionales que buscan que
            cada entrenamiento sea seguro, motivador y adaptado a tus
            objetivos.
          </p>

        </div>

        <div className="trainers__grid">

          {trainers.map((trainer) => (

            <article
              key={trainer.name}
              className="trainers__card"
            >

              <div className="trainers__imageWrapper">

                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="trainers__image"
                />

              </div>

              <div className="trainers__content">

                <h3>
                  {trainer.name}
                </h3>

                <span className="trainers__role">
                  {trainer.role}
                </span>

                <p>
                  {trainer.description}
                </p>

                <div className="trainers__footer">

                  <a
                    href="#contact"
                    className="trainers__button"
                  >
                    Conocer más

                    <FaArrowRight />
                  </a>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trainers__social"
                    aria-label={`Instagram de ${trainer.name}`}
                  >
                    <FaInstagram />
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}