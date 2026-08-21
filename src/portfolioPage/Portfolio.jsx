const projects = [
  {
    title: 'Herramientas para FLACSO Uruguay',
    description:
      'Sistemas y automatizaciones para simplificar tareas de gestión, reuniones, contenidos e inscripciones, conectando interfaces web con Google Workspace y WordPress.',
    tags: ['React', 'Node.js', 'Google Workspace', 'WordPress'],
  },
  {
    title: 'Florería Camelia',
    description:
      'Sitio web comercial desarrollado con una base liviana y rápida, orientado a presentar catálogo, identidad y canales de contacto.',
    tags: ['Vite', 'JavaScript', 'Web'],
    href: 'https://github.com/ivan1arriola/floreria-camelia',
  },
  {
    title: 'Proyecto de Ciencia de Datos con R',
    description:
      'Proyecto académico de análisis de datos que reúne exploración, visualización y modelado reproducible en R.',
    tags: ['R', 'Datos', 'Estadística'],
    href: 'https://github.com/ivan1arriola/Proyecto_CienciaDeDatosConR2023',
  },
  {
    title: 'Proyecto JAP 2022',
    description:
      'E-commerce desarrollado durante Jóvenes a Programar. Es uno de los proyectos que marca el inicio de mi recorrido en desarrollo web.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/ivan1arriola/Proyecto_JAP2022',
  },
];

const Portfolio = () => {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Proyectos</p>
        <h1>Trabajo que conecta tecnología con problemas reales.</h1>
        <p className="section-intro">
          Una selección de proyectos profesionales, personales y académicos. Me interesa especialmente construir herramientas claras, mantenibles y útiles para quienes las usan.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <ul className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {project.href && (
              <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                Ver repositorio <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
