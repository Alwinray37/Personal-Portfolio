import React, { useState } from "react"
import styles from './Navbar.module.css'
import 'primeicons/primeicons.css'
import { Link, NavLink } from "react-router-dom";


function Navbar(){

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navLinks}`} >
                <NavLink to="/" className={({isActive}) => isActive ? styles.active : undefined}>AlwinRay</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? styles.active : undefined}>Bio</NavLink>
                {/* <NavLink to="/projects" className={({isActive}) => isActive ? styles.active : undefined}>Projects</NavLink> */}
                <NavLink to="/contact" className={({isActive}) => isActive ? styles.active : undefined}>Contact</NavLink>

                {/* resume */}
                <a href="/Alwin_Roble_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-file-arrow-down"></i> Resume
                </a>
            </div>
        </nav>
    )
}

export default Navbar