import './experiences.css';

export default function Experiences() {
  const experiences = [
    {
      title: 'Challenge Developer & Workshop Lead',
      company: 'TAMU Datathon',
      location: 'College Station, TX',
      date: 'Jan 2025 – Present',
      description: `Designed and implemented interdisciplinary hackathon challenges for 250+ participants, translating problem statements into actionable technical specifications. Guided teams through structured ideation, prototyping, and solution delivery, ensuring technical feasibility and alignment with user needs. Collaborated with engineers, sponsors, and stakeholders to maintain scalable and efficient challenge workflows, improving participant engagement and solution quality.`
    },
    {
      title: 'Technology Intern',
      company: 'Levy Football',
      location: 'College Station, TX',
      date: 'Sep 2024 – Present',
      description: `Managed operational readiness for 200+ Point-of-Sale systems across large-scale events serving 50,000+ attendees per game, ensuring seamless technical operations. Diagnosed and resolved critical system issues under time-sensitive conditions, maintaining 100% uptime during peak periods. Coordinated with cross-functional teams to optimize workflows and enhance digital experience for staff and event attendees.`
    },
    {
      title: 'Web Development Fellow',
      company: 'Kode With Klossy',
      location: 'Houston, TX',
      date: 'June 2024',
      description: `Developed FemUnity, a web platform increasing access to feminine care and educational resources using JavaScript, Python, and responsive web frameworks. Built core features including a donation portal, educational hub, and geolocation-based resource mapping supporting 40+ verified locations. Translated wireframes into responsive UI components using Figma, ensuring seamless UX and accessibility. Managed project milestones and collaborated with a cross-functional team to deliver a high-quality MVP under strict deadlines.`
    },
    {
        title: 'Freshman Leaders Advancing in Service and Honor',
        company: 'Texas A&M University',
        location: 'College Station, TX',
        date: '2023 – 2024',
        description: `Developed leadership, teamwork, and project management skills through structured service and technical initiatives. Designed and executed programs promoting strategic problem-solving and community engagement, while fostering a network of high-performing peers.`
      },
    {
      title: 'Research Intern',
      company: 'MD Anderson Cancer Center',
      location: 'Houston, TX',
      date: 'Jun 2022 – Aug 2022',
      description: `Conducted independent research on cancer cell growth and treatment efficacy, using software tools like IMGJ and Gelcounter to analyze experimental data. Developed a reproducible data analysis pipeline, improving accuracy and efficiency of tumor quantification methods. Presented findings at a research symposium, winning 1st place for data-driven insights and technical rigor.`
    },
    
  ];

  return (
    <section id="experiences" className="experiences">
      <h2>My Experiences</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company} — {exp.location}</h4>
              <div className="experience-card">
                <p>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}