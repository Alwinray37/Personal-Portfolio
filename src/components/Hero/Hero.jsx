import React from 'react';
import styles from'./Hero.module.css'
import pfp from '../../assets/RayPfp.png'
import profileInfo from '../../assets/profileinfo.json'


function Hero() {
    const info = profileInfo;

    return (
        <div id={styles.heroComponent}>
            {/* column 1   */}
            <div className={`${styles.heroText} ${styles.col1}`}>
                <div className={styles.intro}>
                    <h2>Alwin Ray Roble</h2>
                    <div className={styles.heroTitles}>
                        <p>{info.title}</p>
                        <p>{info.subtitle}</p>  
                    </div>
                </div>
                <div className={styles.links}>
                    {info.links.map(link => (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                            <i className={link.faIcon}/> {link.name}
                        </a>
                    ))}
                    <a href={`mailto:${info.email}`}>
                        <i className={`fa-regular fa-envelope`}/> {info.email}
                    </a>
                </div>
            </div>

            {/* column 2 */}
            <div className={`${styles.col2}`}>
                <div className={styles.pfp}>
                    <img src={pfp} alt="" />
                </div>
            </div>
            
            
        </div>
    );
}

export default Hero