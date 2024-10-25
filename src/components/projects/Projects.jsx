import styles from './Projects.module.css'
import calculatorImg from '../../assets/calculator.png'
import etchImg from '../../assets/etchSketch.png'
import drillImg from '../../assets/vballDrills.png'

const projects = [
    {
        title: "Calculator",
        description: "Simple Calculator made with HTML, CSS, and JavaScript",
        image: calculatorImg,
        stack: "HTML, CSS, JavaScript"
    },
    {
        title: "Volleyball Library",
        description: "A library of volleyball drills where coaches can use to create their practice plans.",
        image: drillImg,
        stack: "React, Node.js, MongoDB"
    },
    {
        title: "Etch-A-Sketch",
        description: "Web app that lets users draw and Sketch on a virtual canvas. Written in HTML, CSS and JavaScript.",
        image: etchImg,
        stack: "Python, Flask, SQL"
    }
];
const ProjectCard = ({ project }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <img src={project.image} alt={project.title} />
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <p>{project.description}</p>
            {/* <div className={styles.stack}>{project.stack}</div> */}
        </div>
    );
};

function Projects() {

    return (
        <div id='projects' className={`container ${styles.projects}`}>
            <h1>Projects</h1>
            <div className={`${styles.projectsCont}`}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <a href="https://alwinray37.github.io/WebDev/"><button>See More.</button></a>
        </div>
    )
}
export default Projects