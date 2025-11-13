import styles from './Contact.module.css'
import EmailForm from './EmailForm';
import 'primeicons/primeicons.css'

const contactLinks =[
    {
        title: "Email",
        icon: <i className="pi pi-envelope"></i>,  // You can replace this with an actual image or SVG icon
        aTag: "mailto:alwinray37@gmail.com"
    },
    {
        title: "LinkedIn",
        icon: <i className='pi pi-linkedin'></i>,  // You can replace this with an actual image or SVG icon
        aTag: "https://linkedin.com/in/alwinray"
    },
    {
        title: "GitHub",
        icon: <i className='pi pi-github'></i>,  // You can replace this with an actual image or SVG icon
        aTag: "https://github.com/alwinray37"
    },
    {
        title: "Instagram",
        icon: <i className='pi pi-instagram'></i>,  // You can replace this with an actual image or SVG icon
        aTag: "https://instagram.com/alwinray"
    }
];
const ContactLinks = () => {
    return (
        <div>
            {contactLinks.map((link, index) => (
                <li key={index}>
                    <a href={link.aTag} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className={styles.contactLink}>  {/* Correct class */}
                        <span style={{ marginRight: '8px' }}>{link.icon}</span>
                        {link.title}
                    </a>
                </li>
            ))}
        </div>
    );
};

function Contact() {
    return (
        <div id={`contact`} className={`container ${styles.contact}`}>
            <h1>Connect With Me:</h1>
            <div className={`${styles.linksContainer}`}>
                {/* <EmailForm /> */}
                <ContactLinks />
            </div>
        </div>
    )
}
export default Contact