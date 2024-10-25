import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'

function About() {
    return(
        <div className={`${styles.about} container`} id="about">
            <div className={`${styles.section}`}>
                <div className={`${styles.col}`}>
                    <h1>About</h1>
                    <p>I’m a Computer Science student at California State University, Northridge, with a passion for software development and technology innovation. I hold two associate degrees from Santa Monica College, one in Web Development and another in General Science, giving me a well-rounded foundation in both the technical and analytical aspects of computing.</p>
                    <h3>Experience With:</h3>
                    <div className={styles.skillsContainer}>
                    <FontAwesomeIcon icon="fa-brands fahtml5"/>
                        <span><FontAwesomeIcon icon={faHtml5}/> HTML</span>
                        <span><FontAwesomeIcon icon={faCss3}/> CSS</span>
                        <span><FontAwesomeIcon icon={faJs}/> JavaScript</span>
                        <span><FontAwesomeIcon icon={faReact}/> React.js</span>
                    </div>
                    {/* <button>Learn More About Ray.</button> */}
                </div>
                <div className={`${styles.imgContainer}`}>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About