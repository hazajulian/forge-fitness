// Benefits.jsx
// Beneficios principales de entrenar en Forge Fitness.

import { FaDumbbell, FaUserCheck, FaClock, FaPeopleGroup } from "react-icons/fa6";

import "./Benefits.css";

const benefits = [
  {
    icon: <FaDumbbell />,
    title: "Equipamiento premium",
    text: "Máquinas modernas, zona funcional, peso libre y espacios preparados para entrenar cómodo y seguro.",
  },
  {
    icon: <FaUserCheck />,
    title: "Coaches profesionales",
    text: "Entrenadores atentos que te guían, corrigen técnica y adaptan el entrenamiento a tu nivel.",
  },
  {
    icon: <FaClock />,
    title: "Horarios amplios",
    text: "Entrená temprano, al mediodía o después del trabajo con una agenda pensada para tu rutina.",
  },
  {
    icon: <FaPeopleGroup />,
    title: "Comunidad real",
    text: "Un ambiente motivador, respetuoso y diverso para que entrenar se vuelva parte de tu vida.",
  },
];

export function Benefits() {
  return (
    <section className="benefits section section--cream" id="benefits">
      <div className="benefits__container container">
        <div className="sectionHeader benefits__header">
          <p className="sectionEyebrow">Por qué elegirnos</p>

          <h2 className="sectionTitle">Entrená mejor desde el primer día</h2>

          <p className="sectionText">
            Combinamos instalaciones de alto nivel, acompañamiento profesional y
            una experiencia cómoda para que cada entrenamiento tenga sentido.
          </p>
        </div>

        <div className="benefits__grid">
          {benefits.map((benefit) => (
            <article className="benefits__card card" key={benefit.title}>
              <div className="benefits__icon" aria-hidden="true">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}