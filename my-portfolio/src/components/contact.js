// Contact.js
import './contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-card">
        <p>If you'd like to collaborate, discuss opportunities, or just say hi, feel free to reach out!</p>
        <form
          action="mailto:harshinitx@gmail.com"
          method="post"
          encType="text/plain"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required />
          <button type="submit">Send</button>
        </form>
        <div className="contact-links">
          <a href="mailto:harshinitx@gmail.com"><FaEnvelope /> Email</a>
          <a href="https://www.linkedin.com/in/harshinisriniv" target="_blank"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/harshinisriniv" target="_blank"><FaGithub /> GitHub</a>
        </div>
      </div>
    </section>
  );
}