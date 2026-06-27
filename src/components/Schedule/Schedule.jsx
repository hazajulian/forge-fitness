// Schedule.jsx
// Horarios principales y disponibilidad de clases en Forge Fitness.

import {
  FaCalendarDays,
  FaClock,
  FaDumbbell,
  FaMoon,
  FaSun,
} from "react-icons/fa6";

import "./Schedule.css";

const scheduleBlocks = [
  {
    icon: <FaSun />,
    title: "Mañana",
    time: "06:00 - 12:00",
    text: "Ideal para arrancar el día con energía antes del trabajo o la rutina.",
  },
  {
    icon: <FaDumbbell />,
    title: "Tarde",
    time: "12:00 - 18:00",
    text: "Entrená con más tranquilidad, clases funcionales y sala disponible.",
  },
  {
    icon: <FaMoon />,
    title: "Noche",
    time: "18:00 - 23:00",
    text: "El horario más activo para clases, fuerza, cardio y entrenamientos guiados.",
  },
];

const weeklySchedule = [
  {
    day: "Lunes a viernes",
    hours: "06:00 - 23:00",
    detail: "Musculación, funcional, cardio y clases grupales.",
  },
  {
    day: "Sábados",
    hours: "08:00 - 18:00",
    detail: "Entrenamiento libre y clases especiales.",
  },
  {
    day: "Domingos",
    hours: "09:00 - 14:00",
    detail: "Sala abierta, movilidad y recuperación.",
  },
];

export function Schedule() {
  return (
    <section className="schedule section section--dark" id="schedule">
      <div className="schedule__container container">

        {/* encabezado */}

        <div className="schedule__header sectionHeader">
          <p className="sectionEyebrow">
            Horarios
          </p>

          <h2 className="sectionTitle">
            Entrená cuando mejor se adapte a tu día
          </h2>

          <p className="sectionText">
            Abrimos todos los días con franjas amplias para que puedas
            organizar tu entrenamiento sin complicaciones.
          </p>
        </div>

        {/* contenido */}

        <div className="schedule__content">

          <div className="schedule__blocks">
            {scheduleBlocks.map((block) => (
              <article className="schedule__block" key={block.title}>
                <span className="schedule__icon">
                  {block.icon}
                </span>

                <div>
                  <h3>{block.title}</h3>

                  <strong>{block.time}</strong>

                  <p>{block.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="schedule__panel">
            <div className="schedule__panelHeader">
              <span>
                <FaCalendarDays />
              </span>

              <div>
                <p>Agenda semanal</p>

                <h3>Disponibilidad general</h3>
              </div>
            </div>

            <div className="schedule__list">
              {weeklySchedule.map((item) => (
                <div className="schedule__item" key={item.day}>
                  <div>
                    <h4>{item.day}</h4>

                    <p>{item.detail}</p>
                  </div>

                  <span>
                    <FaClock />
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <a href="#contact" className="schedule__button">
              Consultar disponibilidad
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}