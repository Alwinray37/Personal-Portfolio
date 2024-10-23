import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import { PrimeReactProvider } from 'primereact/api';

function App() {

	return (
		<main className={styles.app}>
			<Navbar/>
			<Hero/>
			<About />
			<Projects />
			<Contact />
		</main>
	)
}

export default App
