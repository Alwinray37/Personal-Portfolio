import styles from './about.module.css'
import cv from '../../assets/RayCV.json'

function About() {
    const { general, education = [], workExperience = [], projects = [], achievements = [], skills = [] } = cv || {}

    return (
        <main className={styles.about} id="about">
            {/* Name, role, one liner, photo  */}
            <header className={styles.header}>
                <h1>About Alwin Ray,</h1>
                <p className={styles.lead}>{general?.summary}</p>
            </header>

            {/* path, recent focus and impact */}
            <section className={styles.section}>
                <h2>Path and Current Focus</h2>
                <p>
                    I immigrated to California in 2010 and started working at 16 as a kitchen porter across two restaurants, handling food prep, cleaning, bussing, and deliveries for five years. I later supported a law firm as a personal assistant, managing scheduling, phone and email correspondence, invoicing, and keeping office equipment running. I originally pursued nursing at Santa Monica College (SMC), but discovered a passion for building on the web and transitioned into web development—creating sites for telehealth practices, Shopify e‑commerce, and a local school board campaign. Along the way, I worked as a barista and coached volleyball for multiple clubs and schools, strengthening teamwork, communication, and leadership.
                </p>
                <p>
                    Today, I’m a Computer Science student at CSUN, focused on building accessible, performant websites and full‑stack applications. My recent work centers on React and Node.js with SQL backends, collaborating with small businesses and community organizations to launch practical, user‑friendly solutions.
                </p>
            </section>

            {/* featured work */}
            <section className={styles.section}>
                <h2>Featured Work</h2>
                <p>Here are a few projects I've worked on recently:</p>
                <ul className={styles.projectList}>
                    {projects.map((project, index) => (
                        <li key={index} className={styles.projectItem}>
                            <h3>{project.title}</h3>
                            <p className={styles.projectDesc}>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </li>
                    ))}
                </ul>
            </section>

            {/* skills */}
            <section className={styles.section}>
                <h2>Skills</h2>
                <ul className={styles.skillsContainer}>
                    {skills.map((skill, index) => (
                        <li key={index} className={styles.skill}>{skill}</li>
                    ))}
                </ul>
            </section>

            {/*  */}
        </main>
    )
}

export default About