// Plans.jsx
// Planes de membresía disponibles en Forge Fitness.

import {
  FaCheck,
  FaArrowRight,
} from "react-icons/fa6";

import "./Plans.css";

const plans = [
  {
    name: "Mensual",
    price: "$29.900",
    subtitle: "Ideal para comenzar",
    featured: false,
    features: [
      "Acceso libre al gimnasio",
      "Sala de musculación",
      "Zona funcional",
      "Vestuarios completos",
    ],
  },
  {
    name: "Premium",
    price: "$39.900",
    subtitle: "La opción más elegida",
    featured: true,
    features: [
      "Todo el plan Mensual",
      "Clases grupales",
      "Seguimiento profesional",
      "Evaluación física",
      "Entrenamiento personalizado",
    ],
  },
  {
    name: "Anual",
    price: "$349.900",
    subtitle: "Máximo ahorro",
    featured: false,
    features: [
      "Acceso ilimitado",
      "Todas las disciplinas",
      "Beneficios exclusivos",
      "Congelamiento de membresía",
    ],
  },
];

export function Plans() {
  return (
    <section
      className="plans section section--cream"
      id="plans"
    >
      <div className="plans__container container">

        <div className="plans__header sectionHeader">

          <p className="sectionEyebrow">
            Membresías
          </p>

          <h2 className="sectionTitle">
            Elegí el plan que mejor se adapte a vos
          </h2>

          <p className="sectionText">
            Sin contratos complicados. Elegí la modalidad que
            mejor acompañe tus objetivos y entrená cuando quieras.
          </p>

        </div>

        <div className="plans__grid">

          {plans.map((plan) => (

            <article
              key={plan.name}
              className={`plans__card ${
                plan.featured ? "plans__card--featured" : ""
              }`}
            >

              {plan.featured && (
                <span className="plans__badge">
                  Más elegido
                </span>
              )}

              <h3>{plan.name}</h3>

              <div className="plans__price">
                {plan.price}
              </div>

              <p className="plans__subtitle">
                {plan.subtitle}
              </p>

              <ul className="plans__list">

                {plan.features.map((feature) => (

                  <li key={feature}>

                    <FaCheck />

                    <span>{feature}</span>

                  </li>

                ))}

              </ul>

              <a
                href="#contact"
                className="plans__button"
              >
                Elegir plan

                <FaArrowRight />
              </a>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}