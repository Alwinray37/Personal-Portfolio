import styles from './App.module.css'
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import Profile from './components/profile/Profile.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
// import { fab } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
// import { far } from '@fortawesome/free-regular-svg-icons';
// library.add(fas, fab, far);

function App() {
	const location = useLocation()
	const navigate = useNavigate()

	// If we were redirected here by the GitHub Pages 404 fallback, it will
	// include the original path in a `redirect` query parameter. Read that
	// and navigate to the intended path so BrowserRouter can handle it.
	useEffect(() => {
		try {
			const params = new URLSearchParams(window.location.search)
			const redirect = params.get('redirect')
			if (redirect) {
				// decode and navigate to the original path
				navigate(decodeURIComponent(redirect), { replace: true })
			}
		} catch (e) {
			// ignore
		}
	// run once on mount
	}, [navigate])

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
								<Route path="*" element={<NotFound />} />
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
