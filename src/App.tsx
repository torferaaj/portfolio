import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationSection from './components/Education';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ResumeViewer from './components/ResumeViewer';
import BubbleCursor from './components/BubbleCursor';
import { ThemeProvider } from './context/ThemeContext';
import { personalInfo, skills, workExperience, projects, education } from './data';

function App() {
  const [isResumeViewerOpen, setIsResumeViewerOpen] = useState(false);

  const handleResumeClick = useCallback(() => {
    setIsResumeViewerOpen(true);
  }, []);

  const handleResumeClose = useCallback(() => {
    setIsResumeViewerOpen(false);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F2F2F7] dark:bg-[#000000] transition-colors duration-500">
        <BubbleCursor />
        <Navbar onResumeClick={handleResumeClick} />
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <Skills skills={skills} />
        <Experience experience={workExperience} />
        <Projects projects={projects} />
        <EducationSection education={education} />
        <Contact personalInfo={personalInfo} />
        <ScrollToTop />
        <ResumeViewer 
          isOpen={isResumeViewerOpen} 
          onClose={handleResumeClose} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
