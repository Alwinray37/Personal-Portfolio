import styles from './about.module.css'
import cv from '../../assets/RayCV.json'

function About() {
    const { general, education = [], workExperience = [], projects = [], achievements = [], skills = [] } = cv || {}

    return (
        <div className={styles.about} id={styles.about}>
            {/* Name, role, one liner, photo  */}
            <div id={styles.section1} className={styles.section}>
                <div className={styles.col1}>
                    <div>
                        <h2 className={styles.title}>Hi! My name is Alwin Ray, here's a little about me:</h2>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.lead}>{general?.summary}</p>
                        <p>
                            I immigrated to California in 2010 and started working at 16 as a kitchen porter across two restaurants, handling food prep, cleaning, bussing, and deliveries for five years. I later supported a law firm as a personal assistant, managing scheduling, phone and email correspondence, invoicing, and keeping office equipment running. I originally pursued nursing at Santa Monica College (SMC), but discovered a passion for building on the web and transitioned into web development—creating sites for telehealth practices, Shopify e‑commerce, and a local school board campaign. Along the way, I worked as a barista and coached volleyball for multiple clubs and schools, strengthening teamwork, communication, and leadership.
                        </p>
                        <p>
                            Today, I’m a Computer Science student at CSUN, focused on building accessible, performant websites and full‑stack applications. My recent work centers on React and Node.js with SQL backends, collaborating with small businesses and community organizations to launch practical, user‑friendly solutions.
                        </p>
                    </div>
                </div>
                <div className={styles.col2}>
                    <img src="src/assets/rnm.jpg" alt="Alwin Roble pfp" />
                </div>
            </div>

            {/* path, recent focus and impact */}
            <section className={`${styles.section} ${styles.section2}`}>
                <div className={styles.col1}>
                    <h2 className={styles.title}>Path and Current Focus</h2>
                    <div className={styles.content}>
                        
                    </div>
                </div>
                <div className={styles.col2}>
                    <img src="src/assets/sky.jpeg" alt="" />
                </div>
            </section>
            {/* Education */}
            <section className={styles.section}>
                <div className={styles.col1}>
                    <h2 className={styles.title}>Education</h2>
                </div>
                <div className={styles.col2}>
                    <div className={styles.content}>
                        <p>High School: University Senior High, 2013 – 2017</p>
                    </div>
                </div>
            </section>

            {/* skills */}
            <h2 className={styles.title}>Skills</h2>
            <section className={styles.section}>
                
                <ul className={styles.skillsContainer}>
                    {skills.map((skill, index) => (
                        <li key={index} className={styles.skill}>{skill}</li>
                    ))}
                </ul>
            </section>

            
        
        </div>
    )
}

export default About