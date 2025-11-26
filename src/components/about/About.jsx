import styles from './about.module.css'
import cv from '../../assets/RayCV.json'

function About() {
    const { general, education = [], workExperience = [], projects = [], achievements = [], skills = [] } = cv || {}

    return (
        <div className={styles.about} id={styles.about}>
            
            <h2 className={styles.title}>Hi! My name is Alwin Ray, here's a little about me:</h2>
            <img src="src/assets/rnm.jpg" alt="Alwin Roble pfp" />
            <div className={styles.content}>
                <p>
                    I am currently a Computer Science student at California State University, Northridge (CSUN), where I’m building a strong foundation in software engineering, system design, and problem-solving. Over the years, I’ve gained experience across several fields—web development, customer service work, volleyball coaching, and administrative assisting. These roles helped me develop adaptability, communication skills, and the ability to learn quickly in fast-paced environments.
                </p>

                <p>
                    My family immigrated to California in 2010, and we’ve lived in Culver City ever since. Being raised in a Filipino household taught me the importance of hard work, community, and staying grounded. I recently got married in 2024, and outside of school and coding, I love spending time playing volleyball, traveling to new places, filming nature and volleyball content, and exploring creative projects. These hobbies keep me balanced and constantly inspired.
                </p>

                <p>
                    I graduated from University High School in 2017, and after high school I originally pursued nursing at Santa Monica College. Over time, I discovered my interest in technology and transitioned into web development. From 2017 to 2022, I received two Associate degrees at SMC—one in Web Development and another in General Science. During this period, I taught myself modern web technologies through platforms like FreeCodeCamp, The Odin Project, and various online tutorials. These resources helped me learn how to build responsive websites, understand best practices, and develop a genuine passion for software development.
                </p>

            </div>
            
            <img src="src/assets/volleypic2.png" alt="" className={styles.image2} />
            
            <img src="src/assets/sky.jpeg" alt="" className={styles.image2}/>
            
            <h2 className={`${styles.title} ${styles.path}`}>Path </h2>
            <div className={styles.content}>
                <p>
                    I grew up in Culver City after my family immigrated to California in 2010. Adjusting to a new country taught me early on how to adapt, stay resilient, and work hard—values that continue to guide me today. I’ve always balanced academics with real-world experience, working in restaurants, customer service, volleyball coaching, and assisting roles. Each of these taught me teamwork, leadership, and how to stay calm under pressure.
                    <br></br> <br></br>
                    My path into technology wasn’t traditional. After graduating from University High School in 2017, I started at Santa Monica College with the intention of becoming a nurse. Over time, I realized I was more drawn to problem-solving, creativity, and building things—so I shifted into web development. From 2017 to 2022, I earned two Associate degrees at SMC: Web Development and General Science.
                    <br></br> <br></br>
                    During this period, I taught myself to code using resources like FreeCodeCamp, The Odin Project, YouTube tutorials, and countless documentation rabbit holes. I learned how to build responsive websites, troubleshoot issues on my own, and understand fundamental programming concepts.
                    <br></br><br></br>
                    As I continued growing as a developer, I transferred to California State University, Northridge, where I’m now pursuing my B.S. in Computer Science. My coursework—combined with personal projects, hands-on learning, and constant curiosity—has pushed me into areas like software engineering, algorithms, embedded systems, and full-stack development.
                    <br></br><br></br>
                    Today, I’m motivated by the intersection of creativity and technology. Whether I’m coding, designing systems, or exploring new tools, I’m driven by the desire to build useful, meaningful, and intuitive solutions.
                </p>
            </div>
            
            
            {/* skills */}
            <h2 className={`${styles.title} ${styles.skillsTitle}`}>Education & Skills</h2>

            

            <div className={styles.content}>
                <p>
                    <strong>B.S. in Computer Science 2024 – 2026</strong> <br></br>
                    California State University, Northridge 
                </p>
                <p>
                    A.S. in Web Development and A.S. in General Science 2017 – 2022 <br></br>
                    Santa Monica College
                </p>
                <ul className={styles.skillsContainer}>
                    {skills.map((skill, index) => (
                        <li key={index} className={styles.skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            
            
            
        </div>
    )
}

export default About