import React from 'react';
import styles from'./Hero.module.css'
import pfp from '../../assets/RayPfp.png'
import profileInfo from '../../assets/profileinfo.json'


function Hero() {
    const info = profileInfo;

    return (
        <div className={styles.container}>
            <div className={`${styles.heroText} ${styles.col1}`}>
                <div>
                    <h2>Alwin Ray Roble</h2>
                    <div className='hero-titles'>
                        <p>{info.title}</p>
                        <p>{info.subtitle}</p>  
                    </div>
                    {/* <div className="contact">
                        <a href={`mailto:${info.email}`}>{info.email}</a>

                    </div> */}
                </div>
                <div className={styles.links}>
                    {info.links.map(link => (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                            <i className={link.faIcon}/>
                        </a>
                    ))}
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