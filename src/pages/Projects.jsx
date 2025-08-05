import React from 'react';
import './Projects.css';
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import img5 from "../assets/images/image5.png";
import img6 from "../assets/images/image6.png";
import img7 from "../assets/images/image7.png";
import img8 from "../assets/images/image8.png";
import img9 from "../assets/images/image9.png";
import img10 from "../assets/images/image10.png";
import img11 from "../assets/images/image11.png";
import img12 from "../assets/images/image12.png";
import img13 from "../assets/images/image13.png";
import img14 from "../assets/images/image14.png";
import img15 from "../assets/images/image15.png";

// Replace these placeholder URLs with your actual project images
const projects = [
  {
    title: "Doctor Appointment Mobile App",
    tech: "Android, Kotlin, Firebase",
    description: "Designed and developed a mobile app to streamline doctor bookings. Integrated real-time database, authentication, and a user-friendly UI for appointment scheduling and management.",
    imageUrl: img1,
  },
  {
    title: "Gym Management Web Application",
    tech: "React, Spring Boot, MySQL",
    description: "Built a full-stack platform with secure login, trainer-client assignment, workout scheduling, and notifications. Implemented REST APIs for CRUD operations and database integration.",
    imageUrl: img2,
  },
  {
    title: "Multithreaded Java Desktop App",
    tech: "Java, JDBC",
    description: "Created a responsive desktop app with form-based UI, enabling efficient multithreaded data processing and dynamic database interaction.",
    imageUrl: img3,
  },
  {
    title: "2D/3D Game Projects",
    tech: "Java, Unity",
    description: "Developed interactive games demonstrating object-oriented programming, animation, and event handling. Focused on game logic, player controls, and UI design.",
    imageUrl: img4,
  },
  {
    title: "Cloud-Based API Service",
    tech: "AWS S3, DynamoDB, Node.js",
    description: "Deployed secure and scalable RESTful APIs. Used AWS services for file storage and NoSQL database integration, with Postman used for testing endpoints.",
    imageUrl: img5,
  },
  {
    title: "Movie Listing and Booking App",
    tech: "AWS, Visual Studio Code",
    description: "Developed a web application for browsing and booking movies. Integrated backend services using AWS and used Visual Studio Code for development and deployment with a clean and responsive UI.",
    imageUrl: img6,
  },
  {
    title: "Software Security Analysis",
    tech: "DVWA, XAMPP, Kali Linux",
    description: "Worked on real-world vulnerabilities including SQL injection, command injection, and XSS. Documented exploits and applied security fixes based on OWASP guidelines.",
    imageUrl: img7,
  },
  {
    title: "DevOps Pipeline Implementation",
    tech: "Jenkins, Git, Azure DevOps",
    description: "Configured CI/CD pipelines to automate testing and deployment. Integrated Git for version control and used DevOps boards for task management and team collaboration.",
    imageUrl:img8,
  },
  {
    title: "Library Management System",
    tech: "Spring WebFlux, MongoDB, Thymeleaf",
    description: "Created a reactive web app with CRUD features, form validation, and NoSQL storage. Implemented modular design and REST endpoints for seamless user interaction.",
    imageUrl: img9,
  },
  {
    title: "Iris Flower Prediction App",
    tech: "TensorFlow.js, React, Express.js",
    description: "Built a full-stack application that trains a neural network using TensorFlow.js on the iris dataset. Developed a Vite-based React frontend to display real-time prediction probabilities from the Express backend API.",
    imageUrl: img10,
  },
  {
    title: "Camunda BPMN Automation",
    tech: "REST Connectors, Kafka Integration",
    description: "Designed a BPMN process using Camunda Cloud with REST connector tasks to retrieve data and publish it to a Kafka topic. Took part in workflow orchestration and integration with mock APIs.",
    imageUrl: img11,
  },
  {
    title: "Azure DevOps Boards Implementation",
    tech: "Work Items, Git Integration",
    description: "Created structured Agile artifacts including Epics, Features, User Stories, and Tasks. Linked these to Git branches and pull requests to streamline collaborative project workflows.",
    imageUrl: img12,
  },
  {
    title: "Environmental Impact Summarizer",
    tech: "JavaScript, AI APIs",
    description: "Implemented a summarizer tool using GPT/Gemini API in a JavaScript UI. Parsed environmental news articles and generated brief summaries with clear formatting and links.",
    imageUrl: img13,
  },
  {
    title: "Break-and-Enter Risk Classifier",
    tech: "Pandas, Matplotlib, Scikit-learn, SMOTE",
    description: "Analyzed Toronto police data to identify high-risk neighborhoods for break-and-enter incidents. Handled missing data, encoded and scaled features, created a custom target label, visualized trends, applied feature selection, and used SMOTE to handle class imbalance—preparing the data for predictive modeling.",
    imageUrl: img14,
  },
  {
    title: "Mobile Store Web App",
    tech: "React, Node.js",
    description: "Collaborated on a group project to build an online mobile store where users could browse and purchase smartphones. Implemented dynamic product listings, shopping cart functionality, and RESTful APIs for order processing and data handling.",
    imageUrl: img15,
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      {projects.map(({ title, tech, description, imageUrl }, index) => (
        <div key={index} className="projects-block">
          <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
          <div className="project-text">
            <h2>{title}</h2>
            <p className="tech-stack"><em>{tech}</em></p>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
