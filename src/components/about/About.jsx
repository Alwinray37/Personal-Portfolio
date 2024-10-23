import styles from './about.module.css'

function About() {
    return(
        <div className={`${styles.about} container`} id="about">
            <div className={`${styles.section}`}>
                <div className={`${styles.col}`}>
                    <h1>About</h1>
                    <p>I’m a Computer Science student at California State University, Northridge, with a passion for software development and technology innovation. I hold two associate degrees from Santa Monica College, one in Web Development and another in General Science, giving me a well-rounded foundation in both the technical and analytical aspects of computing.</p>
                </div>
                <div className={`${styles.imgContainer}`}>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About