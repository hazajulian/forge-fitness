// FAQ.jsx
// Preguntas frecuentes sobre planes, horarios y entrenamiento.

import { useState } from "react";

import {
  FaChevronDown,
  FaCircleQuestion,
} from "react-icons/fa6";

import "./FAQ.css";

const faqs = [
  {
    question: "¿Necesito experiencia previa para empezar?",
    answer:
      "No. Podés empezar desde cero. Nuestros entrenadores te guían, corrigen la técnica y adaptan los ejercicios a tu nivel.",
  },
  {
    question: "¿Puedo probar una clase antes de inscribirme?",
    answer:
      "Sí. Podés coordinar una visita o clase de prueba para conocer el gimnasio, el ambiente y la modalidad que mejor se adapte a vos.",
  },
  {
    question: "¿Los planes incluyen clases grupales?",
    answer:
      "Depende del plan elegido. El plan Premium incluye clases grupales, seguimiento profesional y evaluación física.",
  },
  {
    question: "¿Hay entrenadores disponibles en todos los horarios?",
    answer:
      "Sí. Durante las principales franjas horarias contamos con coaches disponibles para acompañarte y resolver dudas.",
  },
  {
    question: "¿Puedo entrenar solo musculación?",
    answer:
      "Sí. Podés usar la sala de musculación, peso libre y máquinas, o combinarlo con funcional, cardio y otras disciplinas.",
  },
];

export function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  function handleToggle(index) {
    setOpenQuestion(openQuestion === index ? null : index);
  }

  return (
    <section className="faq section section--light" id="faq">
      <div className="faq__container container">

        {/* encabezado */}

        <div className="faq__header sectionHeader">
          <p className="sectionEyebrow">
            Preguntas frecuentes
          </p>

          <h2 className="sectionTitle">
            Todo lo que necesitás saber antes de empezar
          </h2>

          <p className="sectionText">
            Resolvemos las dudas más comunes para que puedas elegir tu plan y
            comenzar a entrenar con tranquilidad.
          </p>
        </div>

        {/* contenido */}

        <div className="faq__content">

          <div className="faq__aside">
            <span className="faq__icon">
              <FaCircleQuestion />
            </span>

            <h3>¿Tenés otra consulta?</h3>

            <p>
              Escribinos y te ayudamos a elegir el plan, horario o disciplina
              que mejor se adapte a tus objetivos.
            </p>

            <a href="#contact" className="btn btn--dark">
              Contactar
            </a>
          </div>

          <div className="faq__list">
            {faqs.map((faq, index) => (
              <article
                className={`faq__item ${
                  openQuestion === index ? "faq__item--open" : ""
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => handleToggle(index)}
                >
                  <span>{faq.question}</span>

                  <FaChevronDown />
                </button>

                <div className="faq__answer">
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}