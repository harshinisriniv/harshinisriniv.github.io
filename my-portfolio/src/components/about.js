import './about.css';
import aboutMe from '../assets/aboutme.png';
import { Link } from 'react-scroll';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a Data Engineering and Computer Science Junior at Texas A&M University, passionate about blending design and code to build experiences that are both beautiful and functional. See more on my work below!
          </p>
          <p className="small-text">
            tldr: product developer, designer, student, and latte lover.
          </p>
        </div>

        {/* Right image */}
        <div className="about-image-container">
          <img src={aboutMe} alt="About Me" className="about-image" />
          <Link to="contact" smooth={true} className="chat-link">
            Chat
          </Link>
          <Link to="work" smooth={true} className="work-link">
            See Work
          </Link>
        </div>
      </div>
    </section>
  );
}
