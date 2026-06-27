// Contact.jsx
// Seccion de contacto y consulta para Forge Fitness.

import { useState } from "react";

import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

import "./Contact.css";

const contactEmail = "contacto@forgefitness.com";
const whatsappNumber = "";

const initialForm = {
  name: "",
  email: "",
  plan: "Mensual",
  message: "",
};

const contactInfo = [
  {
    icon: <FaLocationDot />,
    title: "Ubicación",
    text: "Av. Fuerza 1240, Buenos Aires",
  },
  {
    icon: <FaPhone />,
    title: "Teléfono",
    text: "+54 9 11 XXXX-XXXX",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: contactEmail,
  },
];

export function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
    setSuccess("");
  }

  function validateForm() {
    if (!formData.name.trim()) {
      return "Completá tu nombre.";
    }

    if (!formData.email.trim()) {
      return "Completá tu email.";
    }

    if (!formData.email.includes("@")) {
      return "Ingresá un email válido.";
    }

    if (!formData.message.trim()) {
      return "Escribí tu consulta.";
    }

    return "";
  }

  function buildMessage() {
    return `Hola, soy ${formData.name}.

Estoy interesado/a en el plan: ${formData.plan}.

Mi email es: ${formData.email}.

Consulta:
${formData.message}`;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setIsSending(true);
      setError("");
      setSuccess("");

      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Nueva consulta desde Forge Fitness",
          _template: "table",
          _captcha: "false",
          Nombre: formData.name,
          Email: formData.email,
          "Plan de interés": formData.plan,
          Mensaje: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      setSuccess("Consulta enviada correctamente. Te responderemos pronto.");
      setFormData(initialForm);
    } catch (error) {
      setError("No se pudo enviar la consulta. Intentá nuevamente o escribinos por WhatsApp.");
    } finally {
      setIsSending(false);
    }
  }

  function handleWhatsappClick(event) {
    const validationError = validateForm();

    if (validationError) {
      event.preventDefault();
      setError(validationError);
      return;
    }

    const text = encodeURIComponent(buildMessage());

    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="contact section section--dark" id="contact">
      <div className="contact__container container">

        {/* encabezado */}

        <div className="contact__content">
          <p className="sectionEyebrow">
            Contacto
          </p>

          <h2 className="sectionTitle">
            Empezá tu cambio hoy
          </h2>

          <p className="sectionText">
            Escribinos para coordinar una visita, consultar disponibilidad o
            elegir el plan que mejor se adapte a tus objetivos.
          </p>

          <div className="contact__info">
            {contactInfo.map((item) => (
              <article className="contact__item" key={item.title}>
                <span className="contact__icon">
                  {item.icon}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="contact__whatsapp"
            onClick={handleWhatsappClick}
          >
            <FaWhatsapp />
            Hablar por WhatsApp
          </button>
        </div>

        {/* formulario */}

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Nombre</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              disabled={isSending}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isSending}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="plan">Plan de interés</label>

            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              disabled={isSending}
            >
              <option>Mensual</option>
              <option>Premium</option>
              <option>Anual</option>
              <option>Quiero asesoramiento</option>
            </select>
          </div>

          <div className="contact__field">
            <label htmlFor="message">Mensaje</label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Contanos qué objetivo tenés o qué querés consultar..."
              value={formData.message}
              onChange={handleChange}
              disabled={isSending}
            />
          </div>

          {error && (
            <p className="contact__error">
              {error}
            </p>
          )}

          {success && (
            <p className="contact__success">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="contact__button"
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar consulta"}
          </button>
        </form>

      </div>
    </section>
  );
}