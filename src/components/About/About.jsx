// About.jsx
// Historia e identidad de Forge Fitness.

import {
  FaArrowRight,
  FaCheck,
  FaDumbbell,
  FaUsers,
} from "react-icons/fa6";

import AboutImage from "../../assets/About/sobre-nosotros.png";

import "./About.css";

export function About() {
  return (
    <section className="about section section--light" id="about">
      <div className="about__container container">

        {/* Imagen */}

        <div className="about__imageWrapper">

          <img
            src={AboutImage}
            alt="Interior del gimnasio Forge Fitness"
            className="about__image"
          />

          <div className="about__floatingCard">
            <span className="about__floatingNumber">+12</span>

            <p>Años impulsando personas</p>
          </div>

        </div>

        {/* Contenido */}

        <div className="about__content">

          <div className="sectionHeader">

            <p className="sectionEyebrow">
              Sobre Forge Fitness
            </p>

            <h2 className="sectionTitle">
              Mucho más que un gimnasio
            </h2>

            <p className="sectionText">
              Forge Fitness nació con una idea simple: crear un lugar donde
              cualquier persona pueda entrenar con comodidad, motivación y
              acompañamiento real. Nuestro objetivo no es solamente mejorar tu
              físico, sino ayudarte a construir hábitos que duren toda la vida.
            </p>

          </div>

          {/* Estadísticas */}

          <div className="about__stats">

            <div className="about__stat">
              <strong>800+</strong>
              <span>Socios activos</span>
            </div>

            <div className="about__stat">
              <strong>97%</strong>
              <span>Satisfacción</span>
            </div>

            <div className="about__stat">
              <strong>6</strong>
              <span>Disciplinas</span>
            </div>

          </div>

          {/* Características */}

          <ul className="about__list">

            <li>
              <FaCheck />

              <span>
                Entrenadores certificados y seguimiento personalizado.
              </span>
            </li>

            <li>
              <FaCheck />

              <span>
                Equipamiento profesional para todos los niveles.
              </span>
            </li>

            <li>
              <FaCheck />

              <span>
                Una comunidad que te acompaña desde el primer día.
              </span>
            </li>

          </ul>

          {/* Acciones */}

          <div className="about__actions">

            <a
              href="#plans"
              className="btn btn--dark about__button"
            >
              Empezar hoy
            </a>

            <a
              href="#services"
              className="about__link"
            >
              <FaDumbbell />

              <span>Descubrir nuestras disciplinas</span>

              <FaArrowRight />
            </a>

          </div>

          {/* Frase */}

          <div className="about__quote">

            <FaUsers className="about__quoteIcon" />

            <p>
              <strong>Entrenar cambia el cuerpo.</strong>
              <br />
              La disciplina cambia la vida.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}