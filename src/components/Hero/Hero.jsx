// Hero.jsx
// Seccion principal de bienvenida de Forge Fitness.

import HeroImage from "../../assets/hero/hero.png";

import "./Hero.css";

const heroStats = [
  { value: "+12", label: "disciplinas" },
  { value: "+800", label: "socios activos" },
  { value: "06:00", label: "apertura diaria" },
];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <img src={HeroImage} alt="Personas entrenando en Forge Fitness" />
      </div>

      <div className="hero__overlay"></div>

      <div className="hero__container container">
        <div className="hero__content">
          <p className="hero__eyebrow">Entrenamiento premium en tu ciudad</p>

          <h1 className="hero__title">
            Forjá tu cuerpo.
            <span>Elevá tu disciplina.</span>
          </h1>

          <p className="hero__text">
            Un espacio moderno para entrenar fuerza, funcional, cardio y alto
            rendimiento con coaches profesionales, equipos premium y una
            comunidad que te impulsa todos los días.
          </p>

          <div className="hero__actions">
            <a href="#plans" className="btn btn--primary">
              Ver planes
            </a>

            <a href="#services" className="btn btn--outline">
              Explorar clases
            </a>
          </div>
        </div>

        <div className="hero__stats" aria-label="Datos destacados del gimnasio">
          {heroStats.map((stat) => (
            <article className="hero__stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}