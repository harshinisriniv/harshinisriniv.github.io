import './hero.css';
import pixelArt from '../assets/harshini.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I’m Harshini</h1>
        <img src={pixelArt} alt="Pixel Art" className="hero-image" />
        <p>I like to design and build cool stuff!</p>
      </div>
      <div className="hero-tabs-left">
  <a href="#about">about</a>
  <a href="#work">work</a>
</div>

<div className="hero-tabs-right">
  <a href="#experiences">experiences</a>
  <a href="#contact">contact</a>
</div>
    </section>
  );
}
