import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import resumeFile from './assets/resume/Nadia_Akter_Resume.pdf';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Padding top to offset fixed navbar */}
        <Welcome />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Resume download button fixed bottom-right */}
      <a
        href={resumeFile}
        download="Nadia_Akter_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded shadow-lg hover:bg-blue-700 transition"
        title="Download Resume"
      >
        📄 Resume
      </a>
    </>
  );
};

export default App;
