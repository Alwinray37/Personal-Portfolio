import React, { useState } from "react"
import styles from './Navbar.module.css'
import resume from '../../../public/Alwin_Roble_CV.pdf'
import 'primeicons/primeicons.css'


function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen); // Toggle the menu open/close state
    };

    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>ARR</a>

            {/* Hamburger menu */}
            <i className={`pi pi-bars ${styles.menuBar}`} onClick={handleMenuToggle}></i>

            <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`} onClick={() => setMenuOpen(false)}>
                <a href="https://linkedin.com/in/alwinray">LinkedIn</a>
                <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar