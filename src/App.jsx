import styles from './App.module.css'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Profile from './components/profile/Profile.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
// import { fab } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
// import { far } from '@fortawesome/free-regular-svg-icons';
// library.add(fas, fab, far);

function App() {
	const location = useLocation()

	return (
		<>
			<main className={styles.app}>
				<Navbar/>
				<div className={styles.main}>
					<div className={styles.container}>
						{/* keyed wrapper so the page remounts on route change and triggers the CSS animation */}
						<div className={styles.page} key={location.pathname}>
							<Routes location={location}>
								<Route path="/" element={<Hero />} />
								<Route path="/about" element={<About />} />
								<Route path="/projects" element={<Projects />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="/profile" element={<Profile />} />
							</Routes>
						</div>
					</div>

					<Projects />
				</div>
				<Footer/>
			</main>
		</>
	)
}

export default App
