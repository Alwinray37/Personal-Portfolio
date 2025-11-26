import styles from './Projects.module.css'
import calculatorImg from '../../assets/calculator.png'
import etchImg from '../../assets/etchSketch.png'
import drillImg from '../../assets/vballDrills.png'
import stepUpImg from '../../assets/stepUp.png'

const projects = [
    {
        title: "StepUp",
        description: "SOSE Hackathon Oct. 2025 winner. A volunteer board that connects organizations and volunteers through smart scheduling and real time notifications..",
        image: stepUpImg,
        stack: "React+Vite, Bootstrap, Supabase",
        url: "https://devpost.com/software/stepup-yihtcg"
    },
    {
        title: "Calculator",
        description: "Simple Calculator built with HTML, CSS, and JavaScript, featuring addition, subtraction, multiplication, and division, as well as the ability to clear the display and delete individual digits.",
        image: calculatorImg,
        stack: "HTML, CSS, JavaScript",
        url: "https://alwinray37.github.io/WebDev/projects/calculator/calculator.html"
    },
    {
        title: "Volleyball Library",
        description: "A library of volleyball drills where coaches can use to create their practice plans.",
        image: drillImg,
        stack: "React, Node.js, MongoDB",
        url: "https://alwinray37.github.io/vball-practice/"
    },
    {
        title: "Etch-A-Sketch",
        description: "Web app that lets users draw and Sketch on a virtual canvas. Written in HTML, CSS and JavaScript.",
        image: etchImg,
        stack: "HTML, CSS, JavaScript",
        url: "https://alwinray37.github.io/WebDev/projects/etch-a-sketch/etch.html"
    }
];
// function to create a card for each project 
// given a project object, destructre and return a card 
const ProjectCard = ({ project }) => {
    return (
        <a href={project.url} className={styles.card}>
            <div className={styles.cardImg}>
                <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.title}>{project.title}</h3>
                <p>{project.description}</p>
                <p>Built with: {project.stack}</p>
            </div>
        </a>
    );
};

function Projects() {

    return (
        <div id={styles.projects} className={`container`}>
            <h1>Projects
                <a href="https://alwinray37.github.io/WebDev/"><button>See More</button></a>
            </h1>
            <div className={`${styles.projectsCont}`}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}
export default Projects