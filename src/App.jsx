import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import { PrimeReactProvider } from 'primereact/api';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
// import { fab } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
// import { far } from '@fortawesome/free-regular-svg-icons';
// library.add(fas, fab, far);

function App() {

	return (
		<main className={styles.app}>
			<Navbar/>
			<div className={styles.main}>
			<Hero/>
			<About />
			<Projects />
			<Contact />
			</div>
		</main>
	)
}

export default App
