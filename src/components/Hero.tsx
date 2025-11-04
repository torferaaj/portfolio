import type { PersonalInfo } from '../types';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero = ({ personalInfo }: HeroProps) => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      // Use the scrolled navbar height since navbar will shrink after scroll
      const scrolledNavbarHeight = 64;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: targetPosition - scrolledNavbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-indigo-50/40 to-gray-50 dark:from-gray-950 dark:via-indigo-950/30 dark:to-gray-950 transition-colors duration-500 pt-20 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
              Hey, I'm <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-200 mb-6 font-semibold tracking-tight">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.heroTagline}
            </p>
            
            {/* Stats Section */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Open to Opportunities</span>
              </div>
              <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 shadow-sm">
                <svg className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">15+ Projects Shipped</span>
              </div>
              <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 shadow-sm">
                <svg className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">2.5+ Years Experience</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href={`mailto:${personalInfo.email}`}
                className="ios-button text-white px-8 py-3.5 rounded-full font-semibold text-base hover:shadow-[0_8px_24px_rgba(0,122,255,0.4)] transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </a>
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-[#007AFF] dark:text-[#0A84FF] px-8 py-3.5 rounded-full border border-gray-300/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 font-semibold text-base hover:shadow-lg hover:scale-105"
              >
                View Projects
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#007AFF] dark:hover:text-[#0A84FF] transition-all duration-300 hover:scale-110 border border-gray-300/50 dark:border-gray-700/50 hover:shadow-lg"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#007AFF] dark:hover:text-[#0A84FF] transition-all duration-300 hover:scale-110 border border-gray-300/50 dark:border-gray-700/50 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
