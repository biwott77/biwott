import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../styles/Home.css';
import atbash from './atbash.jpg';
import wwww from './wwww.jpg';
import final from './final.png';

const HomePage = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Creator', 'Surgeon', 'Specialist'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const [webDevHover, setWebDevHover] = useState(false);
  const [cyberSecHover, setCyberSecHover] = useState(false);
  const [certHover, setCertHover] = useState(false);

  const [webDevTyping] = useTypewriter({
    words: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Swift', 'Kotlin', 'Assembly', 'React'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const [cyberSecTyping] = useTypewriter({
    words: ["Traininf", 'Vendor-Training', 'In-house'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const [certTyping] = useTypewriter({
    words: ['Umbrella', 'Moi'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  const [Intro] = useTypewriter({
    words: ['Where do we start?', 'Let’s Create', 'Let’s Design', 'Let’s Brainstorm', 'Let’s Innovate', 'Let’s Integrate', 'Let’s Elevate', 'Each Other', 'Thank you!'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="home" style={{backgroundColor: 'red'}}>
      <div className="animated-thank-you">
        <p>Thank you for visiting my site!</p>
      </div>
      <div className="home-content">
        <div className="intro-container">
          <h2>✅ Hi 👋, and welcome to my Portfolio!</h2>
          <h2>✅ I’m thrilled to have you here. Dive in, explore my work, and let’s connect!</h2>
          <h1><span style={{ color: 'yellow', margin: '20px' }}>{Intro}</span></h1>
          <p>
            With a passion for technology and an eye for creativity, I bring ideas to life through code. Whether it's developing engaging user experiences or building robust applications, I’m dedicated to crafting solutions that make a difference.
          </p>
          <p>
            As you browse through my projects, I hope you'll see my commitment to innovation and attention to detail. Every line of code and every pixel is a step toward creating something meaningful.
          </p>
          <a href="#contact" className="cta-button">Let’s Collaborate!</a>
          <h2>
            I'm a <span style={{ color: 'green' }}>{text}</span>
            <Cursor cursorColor='white' />
          </h2>
        </div>

        <div className="animated-images-container">
          <div className="animated-images">
            <div className="image-container">
              <img 
                src={atbash} 
                alt="Animation 1" 
                loading="lazy"
                srcSet={`${atbash} 300w, ${atbash} 600w`}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 45vw, 30vw"
              />
            </div>
            <div className="image-container">
              <img src={wwww} alt="Animation 2" />
            </div>
            <div className="image-container">
              <img src={final} alt="Animation 3" />
            </div>
          </div>
        </div>

        <div className="skills-certifications">
          <div
            className="skill-cert-container"
            onMouseEnter={() => setWebDevHover(true)}
            onMouseLeave={() => setWebDevHover(false)}
          >
            <h3>
              {webDevHover ? (
                <>
                  {webDevTyping}
                  <Cursor cursorColor='white' />
                </>
              ) : (
                'Web Development'
              )}
            </h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>MySQL</li>
              <li>Django</li>
              <li>React</li>
            </ul>
          </div>

          <div
            className="skill-cert-container"
            onMouseEnter={() => setCyberSecHover(true)}
            onMouseLeave={() => setCyberSecHover(false)}
          >
            <h3>
              {cyberSecHover ? (
                <>
                  {cyberSecTyping}
                  <Cursor cursorColor='white' />
                </>
              ) : (
                'Oranges'
              )}
            </h3>
            <ul>
              <li>Pineapple</li>
              <li>Orange</li>
              <li>Mang0</li>
              <li>Banana</li>
              <li>Apple</li>
            </ul>
          </div>

          <div
            className="skill-cert-container"
            onMouseEnter={() => setCertHover(true)}
            onMouseLeave={() => setCertHover(false)}
          >
            <h3>
              {certHover ? (
                <>
                  {certTyping}
                  <Cursor cursorColor='white' />
                </>
              ) : (
                'Certifications'
              )}
            </h3>
            <ul>
              <li>Mobile Development</li>
              <li>Software Development</li>
              <li>Crypto</li>
              <li>Bitcoin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
