import React, { useState } from 'react';
import styles from './Contact.module.css'
import emailjs from 'emailjs-com'

function EmailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your email sending logic here
    const templateParams = {
        from_email: email,
        message: message,
    };
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
    });
  };

  return (
    <form onSubmit={handleSubmit} id={`${styles.emailForm}`}>
      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      
      <label htmlFor="message">Your Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        required
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default EmailForm;
