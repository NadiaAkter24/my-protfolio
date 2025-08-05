import React from 'react';
import './About.css'; // Import CSS for styling
import profilePic from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <img
          src={profilePic}
          alt="Nadia Akter"
          className="about-image"
        />
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! I'm <strong>Nadia Akter</strong>, a passionate and dedicated Computer Programming student at Centennial College.
          With a strong foundation in software development and web technologies, I aim to create professional, efficient, and user-friendly solutions.
          I enjoy working on real-world projects, continuously learning, and contributing meaningfully to team environments.
        </p>
        <p className="about-text">
          Throughout my studies, I have developed proficiency in multiple programming languages including Java, C#, Kotlin, and Python,
          and gained hands-on experience building full-stack applications using React, Spring Boot, Node.js, and various databases such as MongoDB and MySQL.
        </p>
        <p className="about-text">
          I am also skilled in software testing, cloud deployment with AWS and Azure DevOps, and following secure coding practices.
          Comfortable working in Unix/Linux environments, I am familiar with shell scripting, version control with Git, and CI/CD pipelines using Jenkins and Docker.
        </p>
        <p className="about-text">
          Beyond technical skills, I bring strong communication and customer service abilities developed through diverse work experiences.
          I thrive in collaborative team settings and adapt quickly to changing challenges, always eager to learn and contribute effectively.
        </p>
        <p className="about-text">
          Fluent in English, Bengali, and Hindi, I am a motivated and detail-oriented professional looking forward to making a positive impact in software development or IT support roles.
        </p>
      </div>
    </section>
  );
};

export default About;
