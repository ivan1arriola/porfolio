import Title from '../components/Title.jsx';
import './css/about.css';

const About = () => {
    return (
        <section className="about">
            <Title>Sobre mí</Title>
            <p className='descripcion'>
                Soy una persona curiosa que se adentro al mundo del desarrollo web. Me gusta aprender cosas nuevas y me encanta la tecnología. Formalmente estudio Ingeniería en Computacion en la Universidad de la Republica.
            </p>
            <img alt="" src="https://avatars.githubusercontent.com/u/83203492?v=4" width="260" height="260" className="avatar avatar-user width-full border color-bg-default"></img>
        </section>
    );
}

export default About;