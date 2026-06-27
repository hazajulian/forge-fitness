// WhatsAppButton.jsx
// Boton flotante para contacto rapido por WhatsApp.

import { FaWhatsapp } from "react-icons/fa6";

import "./WhatsAppButton.css";

const whatsappNumber = "";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hola, quiero consultar por los planes de Forge Fitness."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      className="whatsappButton"
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      title="Escribinos por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}