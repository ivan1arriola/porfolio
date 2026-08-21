const Contact = () => {
  return (
    <section className="page-section contact-page">
      <div className="section-heading">
        <p className="eyebrow">Contacto</p>
        <h1>¿Tenés una idea, un problema o un proyecto para conversar?</h1>
        <p className="section-intro">
          Mi perfil público y mis proyectos están en GitHub. Es el mejor punto de partida para conocer mi trabajo y contactarme.
        </p>
      </div>

      <div className="contact-panel">
        <div>
          <span className="contact-label">GitHub</span>
          <strong>@ivan1arriola</strong>
        </div>
        <a
          className="button button-primary"
          href="https://github.com/ivan1arriola"
          target="_blank"
          rel="noreferrer"
        >
          Abrir GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
