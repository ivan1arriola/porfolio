const skillGroups = [
  {
    title: 'Web',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'WordPress'],
  },
  {
    title: 'Backend y automatización',
    items: ['Node.js', 'Python', 'Apps Script', 'SQL', 'APIs'],
  },
  {
    title: 'Plataformas',
    items: ['Google Workspace', 'Linux', 'GitHub Actions', 'Vercel'],
  },
];

const About = () => {
  return (
    <section className="page-section about-page">
      <div className="section-heading">
        <p className="eyebrow">Sobre mí</p>
        <h1>Me interesa entender el problema antes de elegir la herramienta.</h1>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            Estudio Ingeniería en Computación en la Universidad de la República y trabajo desarrollando y manteniendo soluciones digitales para FLACSO Uruguay.
          </p>
          <p>
            Mi trabajo suele cruzar desarrollo web, automatización, administración de plataformas y datos. Me interesa especialmente reducir tareas repetitivas y convertir procesos operativos en sistemas más claros y sostenibles.
          </p>
          <p>
            No intento usar una tecnología porque esté de moda: prefiero soluciones pequeñas, comprensibles y fáciles de mantener cuando son suficientes.
          </p>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
