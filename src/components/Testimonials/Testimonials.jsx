// Testimonials.jsx
// Opiniones de socios de Forge Fitness.

import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa6";

import "./Testimonials.css";

const testimonials = [
  {
    name: "Camila R.",
    role: "Socia desde 2023",
    text: "Empecé sin experiencia y siempre me sentí acompañada. Los profes te corrigen, te motivan y el ambiente es excelente.",
  },
  {
    name: "Nicolás M.",
    role: "Entrena fuerza y funcional",
    text: "El gimnasio está muy bien equipado y los horarios me permiten entrenar después del trabajo sin problema.",
  },
  {
    name: "Elías S.",
    role: "Clases grupales",
    text: "Lo que más me gusta es la energía del lugar. Las clases son intensas, pero siempre adaptadas a cada persona.",
  },
];

export function Testimonials() {
  return (
    <section className="testimonials section section--cream" id="testimonials">
      <div className="testimonials__container container">

        {/* encabezado */}

        <div className="testimonials__header sectionHeader">
          <p className="sectionEyebrow">
            Testimonios
          </p>

          <h2 className="sectionTitle">
            Historias reales de personas que entrenan con nosotros
          </h2>

          <p className="sectionText">
            Más que resultados físicos, buscamos que cada persona construya
            confianza, constancia y una rutina que pueda sostener en el tiempo.
          </p>
        </div>

        {/* grilla */}

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonials__card"
              key={testimonial.name}
            >
              <div className="testimonials__top">
                <span className="testimonials__quote">
                  <FaQuoteLeft />
                </span>

                <div className="testimonials__stars" aria-label="5 estrellas">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>

              <p className="testimonials__text">
                “{testimonial.text}”
              </p>

              <div className="testimonials__person">
                <div className="testimonials__avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}