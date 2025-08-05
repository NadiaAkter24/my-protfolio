import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <h1>Welcome to My Portfolio!</h1>
        <p>Hi there! I'm Nadia Akter, and I'm excited to share my work and journey with you.</p>
        <p>Feel free to explore my <strong>About Me</strong> section to learn more about my skills and experiences.</p>
        <a href="#about" className="btn-explore">Explore About Me</a>
      </div>
    </section>
  );
};

export default Welcome;
