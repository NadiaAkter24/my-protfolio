import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container" id="education">
      <h1>EDUCATION</h1>

      <div className="education-block">
        <h2>❖ Advanced Diploma in Software Engineering Technology Co-op</h2>
        <p><strong>Centennial College</strong>, Toronto, Ontario, Canada</p>
        <p><strong>GPA:</strong> 3.392 (Cumulative)</p>
        <p><strong>Duration:</strong> January 2023 – April 2025</p>

        <p>
          Throughout my education at Centennial College, I developed a strong foundation in programming,
          web development, and software engineering principles. My coursework equipped me with the
          skills to build secure and reliable applications, apply data structures and algorithms effectively,
          and collaborate efficiently within Agile development environments.
        </p>

        <h3>Relevant Courses Completed:</h3>
        <ul>
          <li>Programming 1, Software Engineering Fundamentals, Web Interface Design, Functions & Number Systems</li>
          <li>Programming 2, Discrete Mathematics, College Communications 1 (ESL), Introduction to Database Concepts</li>
          <li>Client-Side Web Development, Software Requirements Engineering, Unix/Linux OS, Advanced Database Concepts</li>
          <li>Java Programming, Web Application Development, Software Systems Design, Advanced Business Communications</li>
          <li>Programming 3, Software Testing & QA, Linear Algebra & Statistics, Networking for Software Developers</li>
          <li>Mobile App Development, Data Structures & Algorithms, Software Development Project 1, Business & Entrepreneurship</li>
          <li>Enterprise App Development, API Engineering & Cloud Computing, Software Security, Data Warehousing & Predictive Analytics</li>
          <li>IT Project Management, Emerging Technologies, Software Project 2, Enterprise Systems Integration, DevOps Implementation</li>
          <li>Employment Skills II, ILP: Leadership/Contemporary Workplaces</li>
        </ul>

        <h3>Key Achievements:</h3>
        <ul>
          <li>Maintained a GPA of 3.39, demonstrating strong academic performance</li>
          <li>Built full-stack apps using React, Spring Boot, MySQL & Firebase</li>
          <li>Developed Android app for real-time doctor appointments</li>
          <li>Created games and desktop apps with Java, Unity, and WinForms</li>
          <li>Hands-on skills in REST APIs, cloud (AWS), and secure coding</li>
          <li>Experienced with Git, Postman, Jenkins, and Azure DevOps</li>
          <li>Applied Agile methods, UML modeling, and software documentation</li>
        </ul>
      </div>

      <div className="education-block">
        <h2>❖ High School Diploma, IGCSE and GCE</h2>
        <p><strong>Bangladesh International School Dammam</strong>, Saudi Arabia</p>
        <p><strong>Duration:</strong> January 2011 – August 2022</p>

        <p>
          Completed high school (IGCSE and GCE) with a focus on Mathematics, Physics, Chemistry, and Biology.
        </p>

        <h3>Key Achievements:</h3>
        <ul>
          <li>Physics (A*)</li>
          <li>Chemistry (A*)</li>
          <li>Biology (A*)</li>
          <li>Mathematics (A*)</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
