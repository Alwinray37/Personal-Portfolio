import React from 'react';
import styles from'./Hero.module.css'
import pfp from '../../assets/RayPfp.png'



function Hero() {
    return (
        <div className={`container`}>
            <div className={`${styles.heroText}`}>
                <h1>Hello, I'm Alwin Ray! </h1>
                <p>
                    Computer Science Student at CSUN. <br/>
                    Web Developer | Volleyball Coach
                </p>
                <a href="#contact"><button>Let's Connect</button></a>
            </div>
            <div className={`${styles.pfp}`}>
                <img src={pfp} alt="" />
            </div>
        </div>
    );
}

export default Hero