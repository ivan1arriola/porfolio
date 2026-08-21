import { Link } from 'react-router-dom';

const focusAreas = ['Desarrollo web', 'Automatización', 'Datos', 'Infraestructura'];

function App() {
  return (
    <section className="hero page-section">
      <div className="hero-copy">
        <p className="eyebrow">Ingeniería en Computación · Desarrollo · Automatización</p>
        <h1>
          Hola, soy <span>Iván Arriola.</span>
        </h1>
        <p className="hero-lead">
          Construyo herramientas web y automatizaciones que convierten procesos complejos o manuales en experiencias más simples, confiables y fáciles de mantener.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/portfolio">
            Ver proyectos
          </Link>
          <Link className="button button-secondary" to="/about">
            Sobre mí
          </Link>
        </div>

        <ul className="focus-list" aria-label="Áreas de trabajo">
          {focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-large" />
        <div className="orbit orbit-small" />
        <div className="planet">
          <span>IA</span>
        </div>
        <span className="star star-one">✦</span>
        <span className="star star-two">✦</span>
        <span className="star star-three">·</span>
      </div>
    </section>
  );
}

export default App;
