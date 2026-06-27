// Services.jsx
// Disciplinas principales disponibles en Forge Fitness.

import {
  FaArrowRight,
  FaBolt,
  FaDumbbell,
  FaFire,
  FaHeartPulse,
  FaPersonRunning,
  FaShieldHeart,
} from "react-icons/fa6";

import Service1 from "../../assets/Services/servicios-1.png";
import Service2 from "../../assets/Services/servicios-2.png";
import Service3 from "../../assets/Services/servicios-3.png";
import Service4 from "../../assets/Services/servicios-4.png";
import Service5 from "../../assets/Services/servicios-5.png";
import Service6 from "../../assets/Services/servicios-6.png";

import "./Services.css";

const services = [
  {
    image: Service1,
    icon: <FaDumbbell />,
    title: "Musculación",
    text: "Entrenamiento con máquinas y peso libre para ganar fuerza y mejorar tu físico.",
  },
  {
    image: Service2,
    icon: <FaPersonRunning />,
    title: "Funcional",
    text: "Movimientos completos para mejorar coordinación, movilidad y rendimiento diario.",
  },
  {
    image: Service3,
    icon: <FaHeartPulse />,
    title: "Cardio",
    text: "Zona equipada para mejorar la resistencia y cuidar tu salud cardiovascular.",
  },
  {
    image: Service4,
    icon: <FaFire />,
    title: "HIIT",
    text: "Sesiones intensas de corta duración para maximizar el gasto calórico.",
  },
  {
    image: Service5,
    icon: <FaBolt />,
    title: "Cross Training",
    text: "Combinación de fuerza, velocidad y resistencia para superar tus límites.",
  },
  {
    image: Service6,
    icon: <FaShieldHeart />,
    title: "Bienestar",
    text: "Espacios pensados para movilidad, recuperación y entrenamiento saludable.",
  },
];

export function Services() {
  return (
    <section className="services section section--dark" id="services">
      <div className="services__container container">

        <div className="sectionHeader services__header">

          <p className="sectionEyebrow">
            Nuestras disciplinas
          </p>

          <h2 className="sectionTitle">
            Elegí cómo querés entrenar
          </h2>

          <p className="sectionText">
            Cada persona tiene un objetivo distinto. Por eso ofrecemos
            diferentes modalidades para que encuentres la forma de entrenar
            que mejor se adapte a vos.
          </p>

        </div>

        <div className="services__grid">

          {services.map((service) => (

            <article
              className="services__card"
              key={service.title}
            >

              <div className="services__image">

                <img
                  src={service.image}
                  alt={service.title}
                />

                <div className="services__overlay" />

                <div className="services__icon">
                  {service.icon}
                </div>

              </div>

              <div className="services__content">

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <a
                  href="#plans"
                  className="services__link"
                >
                  Conocer planes

                  <FaArrowRight />
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}