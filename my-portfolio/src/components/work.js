import './work.css';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import FitCheckCaseStudy from './fitcheckcasestudy'; 
import QuestyCaseStudy from './questycasestudy'; 

import fitcheck1 from '../assets/fitcheck1.png';
import fitcheck2 from '../assets/fitcheck2.png';
import fitcheck3 from '../assets/fitcheck3.png';
import questy1 from '../assets/questy1.png';
import questy2 from '../assets/questy2.png';
import esports from '../assets/esports.png';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="work" className="work">
        <h2>Featured Projects</h2>
        <div className="work-grid">

          {/* FitCheck Card */}
          <div className="work-card fitcheck-card">
            <div className="work-images">
              <img src={fitcheck1} alt="FitCheck 1" className="work-image left" />
              <img src={fitcheck2} alt="FitCheck 2" className="work-image middle" />
              <img src={fitcheck3} alt="FitCheck 3" className="work-image right" />
            </div>
            <div className="work-info">
              <h3>FitCheck</h3>
              <p>A social-first fashion app prioritizing inclusivity and anti-gatekeeping.</p>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Firebase</span>
                <span className="tag">Expo</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Product Design</span>
                <span className="tag">Research</span>
              </div>
              <div className="work-buttons">
                <button onClick={() => setSelectedProject('FitCheck')} className="project-button">Case Study</button>
                <a href="https://github.com/harshinisriniv/fitcheck-app" className="project-button" target="_blank" rel="noopener noreferrer">
                  Code <FaGithub style={{ marginLeft: '5px' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Questy Card */}
          <div className="work-card questy-card">
            <div className="work-images">
              <img src={questy1} alt="Questy 1" className="work-image left" />
              <img src={questy2} alt="Questy 2" className="work-image right" />
            </div>
            <div className="work-info">
              <h3>Questy</h3>
              <p>A gamified productivity app turning daily tasks into engaging challenges with points, achievements, and progress tracking.</p>
              <div className="tags">
                <span className="tag">React Native</span>
                <span className="tag">Firebase</span>
                <span className="tag">TypeScript</span>
                <span className="tag">UI/UX Design</span>
                <span className="tag">LLMs</span>
              </div>
              <div className="work-buttons">
                <button onClick={() => setSelectedProject('Questy')} className="project-button">Case Study</button>
                <a href="https://github.com/harshinisriniv/gamify-productivity-life" className="project-button" target="_blank" rel="noopener noreferrer">
                  Code <FaGithub style={{ marginLeft: '5px' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Valorant Card */}
          <div className="work-card valorant-card">
            <div className="work-images">
              <img src={esports} alt="Valorant Match Predictor" className="work-image single" />
            </div>
            <div className="work-info">
              <h3>Valorant Match Predictor</h3>
              <p>A machine learning model that predicts match winners using in-game team statistics.</p>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">Scikit-Learn</span>
                <span className="tag">Random Forest</span>
                <span className="tag">Data Analysis</span>
                <span className="tag">Feature Engineering</span>
                <span className="tag">Visualization</span>
              </div>
              <div className="work-buttons">
                <a href="https://github.com/harshinisriniv/ecen360finalproject" className="project-button" target="_blank" rel="noopener noreferrer">
                  Code <FaGithub style={{ marginLeft: '5px' }} />
                </a>
                <a href="https://docs.google.com/document/d/1qVE_m7FT5XdBM5XX_096gO1A-8bV50QHhstJsA87zU8/edit?usp=drive_link" className="project-button" target="_blank" rel="noopener noreferrer">
        Research
      </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {selectedProject === 'FitCheck' && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setSelectedProject(null)}>X</button>
            <FitCheckCaseStudy />
          </div>
        </div>
      )}

      {selectedProject === 'Questy' && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setSelectedProject(null)}>X</button>
            <QuestyCaseStudy />
          </div>
        </div>
      )}
    </>
  );
}
