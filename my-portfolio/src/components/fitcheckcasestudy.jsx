import './fitcheckcasestudy.css';
import fitcheck1 from '../assets/fitcheck1.png';
import fitcheck2 from '../assets/fitcheck2.png';
import fitcheck3 from '../assets/fitcheck3.png';
import processWorkflow from '../assets/processworkflow.png';
import ca1 from '../assets/ca1.png';
import ca2 from '../assets/c2.png';
import cassidy from '../assets/cassidy.png';
import jordan from '../assets/jordan.png';
import journeyMapping from '../assets/journeymapping.png';
import lofi from '../assets/lofi.png';
import hifi from '../assets/hifi.png';
import userflow from '../assets/userflow.png';
import iteration1 from '../assets/iteration1.png';
import iteration2 from '../assets/iteration2.png';



export default function FitCheckCaseStudy() {
  return (
    <div className="case-study">
      <h1>FitCheck</h1>


      <h2 id="overview">Project Overview</h2>
      <p>
        For this project, I led the end-to-end product strategy, design, and development of <strong>FitCheck</strong>, 
        a fashion-sharing mobile app focused on inclusivity and anti-gatekeeping. FitCheck allows users to post daily outfits, 
        explore style feeds, and manage their closets in a social-first environment inspired by Instagram, Pinterest, and BeReal. 
        My role included UX research, design iterations, front-end and back-end engineering, and defining the overall product vision.
      </p>

      <h2 id="problem">Problem</h2>
      <p>
        Most fashion-sharing apps prioritize influencers or highly stylized content, which can make casual users feel excluded. 
        Many people want to share outfits, get inspiration, and manage their wardrobe, but existing apps either intimidate them 
        or lack basic social features. Users struggle to discover relatable styles, maintain a digital closet, and engage with 
        a community without feeling judged.
      </p>

      <h2 id="solution">Solution</h2>
      <p>
        FitCheck addresses these challenges by creating a <strong>safe, inclusive, and easy-to-use fashion-sharing platform</strong>:
      </p>
      <ul>
        <li>Inclusive posting without social pressure.</li>
        <li>Exploration feeds with diverse styles.</li>
        <li>Digital closets to organize and track wardrobe items.</li>
        <li>Tagging system to link outfits directly to clothing items.</li>
        <li>Real-time notifications and scalable features to support growth.</li>
      </ul>

      {/* Process workflow image */}
      <div className="process-workflow">
        <img src={processWorkflow} alt="Solution workflow for FitCheck" className="process-img" />
      </div>

      <h2 id="research">Research</h2>
      <p>
  To ground FitCheck in real user needs (not just feature ideas), we began with
  targeted secondary research on how people discover, share, and shop fashion online.
  We reviewed the current e-commerce landscape and social platforms to understand
  where inspiration becomes action (saving, tagging, purchasing) and where the flow
  breaks down.
</p>

<div className="highlight-box">
  <strong>Why this research?</strong> We needed to validate the problem space:
  are users overwhelmed by influencer-heavy feeds, is shopping disconnected from
  inspiration, and do current apps support inclusive, judgment-free sharing?
</div>

<p>
  We analyzed leading social and retail experiences such as Instagram, Pinterest, TikTok,
  and popular online clothing stores to evaluate content structures, product
  discovery paths, and checkout flows. We also examined how “collections” form
  around trending content to understand the cultural signals that drive demand.
  These insights helped us contextualize our primary research and shape hypotheses
  for interviews and usability tests.
</p>
      <div className="highlight-box">
        <strong>Key Insight:</strong> Users want quick outfit posting, social discovery, and wardrobe management without intimidation.
      </div>

      <h3>Empathize</h3>
      <p>
  Conducted 5 open-ended user interviews to understand fashion-sharing habits, challenges with existing apps, and wishlist features. Key findings:
</p>
<ul>
  <li>
    Quick posting without influencer pressure is critical.
    <blockquote class="user-quote">"I just want to share what I’m wearing without feeling judged."</blockquote>
  </li>
  <li>
    Digital wardrobe management is highly desired.
    <blockquote class="user-quote">"It’d be amazing if I could track my closet in one place."</blockquote>
  </li>
  <li>
    Discovery of diverse and realistic styles motivates engagement.
    <blockquote class="user-quote">"Seeing people like me share outfits makes me want to try new looks."</blockquote>
  </li>
</ul>
      <h3>Competitive Analysis</h3>
      <p>
  As part of our competitive analysis, we reviewed several platforms that reflected different aspects of our vision for fashion sharing and digital wardrobes. I personally focused on Instagram, Pinterest, and Fitdrop, examining how each platform approached community, content discovery, and self-expression. From this analysis, we captured key insights around strengths, weaknesses, opportunities for innovation, potential threats, and additional notes that guided our product direction.
</p>

      <div className="competitive-images">
        <img src={ca1} alt="Competitive Analysis 1" className="ca-img" />
        <img src={ca2} alt="Competitive Analysis 2" className="ca-img" />
      </div>
      <div className="data-analysis">
  <h2>Data Analysis & Insights</h2>
  <h3>Defining the Problem</h3>
  <p className="insight-quote">
    "Raw data tells a story—but analysis reveals the path forward."
  </p>
  <p>
    After gathering research from user interviews, competitive analysis, and market trends, 
    we synthesized the insights to form a holistic view of our users and their needs. 
    This step allowed us to prioritize pain points, understand motivations, and set clear 
    design objectives before moving into wireframes and prototyping.
  </p>
</div>

      <h2 id="personas">User Personas</h2>
      <p>
  Cassidy is a persona that reflects the key takeaways from our user interviews. Her bio highlights general characteristics of young, casual fashion enthusiasts who want to share outfits, explore styles, and engage socially without feeling intimidated. Her pain points, motivations, and goals capture the most important insights gathered during our research.
</p>

      <div className="persona-grid">
        <div className="persona">
          <img src={cassidy} alt="Persona Cassidy" className="persona-img" />
        </div>
        <div className="how-might-we">
  <strong>How Might We: </strong> 
  How might we create a fashion-sharing platform that allows for users to post, explore, and organize outfits easily while feeling included, inspired, and confident in a social environment?
</div>

        <div className="persona">
          <img src={jordan} alt="Persona Jordan" className="persona-img" />
        </div>
      </div>

      <h2 id="journey">Journey Mapping</h2>
      <p>
        To better understand Jordan’s experience while keeping my HMW statement in mind, I created a journey map outlining his interactions with FitCheck, including his goals, 
        actions, thoughts, pain points, emotions, and opportunities at each stage.
      </p>
      <div className="journey-img">
        <img src={journeyMapping} alt="Jordan Journey Mapping" className="process-img" />
      </div>

      <h2 id="design">Design Process</h2>
<h3>Ideation</h3>
<p>
  With insights from research, I moved to sketching the initial concepts for FitCheck. I created low-fidelity wireframes for posting, exploring, and managing outfits, paying special attention to how users would flow through the app and engage with its social features.
</p>
<p>
  This allowed for quick iteration on each screen, ensuring clarity, visual hierarchy, and a smooth experience across the feed, post creation, and digital closet.
</p>

<h3>User Flow</h3>
<p>
  I mapped out the complete journey between key features to ensure an intuitive experience. Screens were designed either from scratch or inspired by familiar social media conventions, which helped reduce friction and made the app feel immediately usable for first-time users. This guided both the low-fidelity sketches and the later high-fidelity prototypes.
</p>
<div className="userflow">
  <img src={userflow} alt="User flow for FitCheck" className="process-img" />
</div>
<h3>Low-Fidelity Wireframes</h3>
<p>
  The low-fidelity wireframes served as the foundation for understanding the structural hierarchy and core interactions of FitCheck. 
  I focused on mapping the essential user flows: feed exploration, outfit posting, and closet management, without the distraction of visual design, 
  allowing me to prioritize usability and information architecture.  
</p>
<p>
  My design choices were informed directly by research insights: users emphasized a need for minimal friction when posting outfits, 
  so the post creation flow was condensed into a single, scrollable screen with optional tagging features clearly accessible. 
  For the digital closet, I organized items into intuitive categories with swipeable navigation to reduce cognitive load, 
  while maintaining visibility of filtering and sorting options.  
</p>
<p>
  Each wireframe iteration incorporated findings from early usability testing and competitive analysis. 
  Observations showed that users struggled with overly complex navigation in existing fashion apps, 
  so I experimented with consistent bottom navigation for primary actions and a collapsible menu for secondary features. 
  These low-fidelity prototypes helped uncover pain points and informed the layout for high-fidelity prototypes, 
  ensuring that the interface was both intuitive and scalable.
</p>

      <img src={lofi} alt="Low Fidelity Wireframes" className="process-img" />
      <div className="data-analysis">
  <h3>Finalizing the Design</h3>
  <p className="insight-quote">
    "A polished prototype bridges the gap between vision and experience."
  </p>
  <p>
    After finalizing the low-fidelity layouts, I moved to high-fidelity wireframes to define the visual hierarchy, 
    interactions, and micro-interactions that would make FitCheck intuitive and engaging. 
    Each screen was refined to align with user expectations discovered during research, such as quick posting and seamless closet navigation. 
    Design patterns were chosen to reduce friction, with consistent iconography, spacing, and typography enhancing clarity.  
  </p>
  <p>
    Interactive elements like tappable outfit tags, expandable filters, and notification cues were added to mimic real-world interactions. 
    This step ensured that the flow from browsing the feed to posting or exploring a tagged item felt natural. 
    The high-fidelity wireframes served as a blueprint for later development, balancing aesthetic polish with functional usability.
  </p>
</div>


      <h3>High-Fidelity Wireframes</h3>
      <p>
        Once the structure was validated, I built high-fidelity mockups to refine the visual style, hierarchy, and interactions. 
        The app’s design language emphasized minimal clutter, card-style layouts, and accessible navigation. 
        At this stage, I introduced the tagging system, which allows users to link posts directly to clothing items.
      </p>
      <img src={hifi} alt="High Fidelity Wireframes" className="process-img" />
      <div className="data-analysis">
  <h3>Usability Testing & Iterations</h3>

  {/* Positive Feedback */}
  <p className="insight-quote positive">
    "Clicking on a tag and going straight to the item is a game-changer. It feels effortless!" – User Tester
  </p>
  <p>
    Based on this positive feedback, I enhanced the tagging UI to ensure users could jump directly to the exact clothing item featured in posts. This reduced friction and encouraged exploration of the wardrobe and feed.
  </p>

  <p className="insight-quote positive">
    "The Pinterest-style grid makes it so much easier to browse outfits. I don’t get bored scrolling." – User Tester
  </p>
  <p>
    Users responded well to the shift from a vertical feed to a Pinterest-style masonry grid. This layout increased visual variety and made it easier for users to quickly find outfits that matched their interests, improving engagement.
  </p>

  {/* Negative Feedback */}
  <p className="insight-quote negative">
    "The posting screen feels a bit cluttered; I’m not sure what I really need to fill in." – User Tester
  </p>
  <p>
    To address this, I simplified the posting screen by clarifying the required fields, making daily outfit sharing faster and less intimidating. This iteration balanced functionality with ease of use.
  </p>
        <img src={iteration1} alt="iterationone" className="process-img" />

  <p className="insight-quote negative">
    "I can’t always find the item I want in my closet. It feels messy sometimes." – User Tester
  </p>
  <p>
    In response, I added wardrobe filters and tag-based organization. Users can now sort items by color, brand, or style, which reduced frustration and improved the digital closet experience.
  </p>
        <img src={iteration2} alt="iterationtwo" className="process-img" />
</div>


      <h2 id="engineering">Engineering Highlights</h2>
      <div className="highlight-box">
        <strong>Key Takeaway:</strong> Balanced MVP performance, UX simplicity, and scalable architecture.
      </div>
      <ul>
        <li>React Native front-end with scalable navigation and state management.</li>
        <li>Firebase backend for dynamic user data, outfit metadata, and real-time updates.</li>
        <li>Prioritized MVP features while maintaining a clean user experience.</li>
      </ul>


      <h2 id="reflection">Reflection</h2>
      <p><strong>Lessons Learned:</strong></p>
      <ul>
        <li>Balancing design and engineering responsibilities solo.</li>
        <li>Making data-driven decisions to improve inclusivity and user engagement.</li>
        <li>Iterating designs based on real user feedback.</li>
      </ul>

      <p><strong>Successes:</strong></p>
      <ul>
        <li>Built a scalable architecture for a social fashion app.</li>
        <li>Delivered a user-friendly, inclusive platform with positive early feedback.</li>
      </ul>

      <p><strong>Challenges:</strong></p>
      <ul>
        <li>Tight deadlines for MVP development.</li>
        <li>Tradeoffs between feature complexity and user experience.</li>
      </ul>

      <p><strong>Future Improvements:</strong></p>
      <ul>
        <li>AI-powered outfit recommendations.</li>
        <li>Expanded social features like commenting and following.</li>
        <li>Enhanced analytics for wardrobe insights.</li>
      </ul>
    </div>
  );
}
