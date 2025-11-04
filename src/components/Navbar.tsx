import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/useTheme';

interface NavbarProps {
  onResumeClick: () => void;
}

const Navbar = ({ onResumeClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [mobileIndicatorStyle, setMobileIndicatorStyle] = useState({ top: 0, height: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          // Throttle section detection
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          
          scrollTimeoutRef.current = setTimeout(() => {
            const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
            const current = sections.find(section => {
              const element = document.getElementById(section);
              if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
              }
              return false;
            });
            if (current) setActiveSection(current);
          }, 50);
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Update desktop indicator position when active section changes
    const updateIndicator = () => {
      if (navRef.current) {
        const activeLink = navRef.current.querySelector(`[data-section="${activeSection}"]`);
        if (activeLink) {
          const rect = activeLink.getBoundingClientRect();
          const navRect = navRef.current.getBoundingClientRect();
          setIndicatorStyle({
            left: rect.left - navRect.left,
            width: rect.width,
            opacity: 1,
          });
        }
      }
    };

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(updateIndicator);
  }, [activeSection]);

  useEffect(() => {
    // Update mobile indicator position when active section changes
    const updateMobileIndicator = () => {
      if (mobileNavRef.current && isMobileMenuOpen) {
        const activeLink = mobileNavRef.current.querySelector(`[data-mobile-section="${activeSection}"]`);
        if (activeLink) {
          const rect = activeLink.getBoundingClientRect();
          const navRect = mobileNavRef.current.getBoundingClientRect();
          setMobileIndicatorStyle({
            top: rect.top - navRect.top,
            height: rect.height,
            opacity: 1,
          });
        }
      }
    };

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(updateMobileIndicator);
  }, [activeSection, isMobileMenuOpen]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Immediately update the active section for instant visual feedback
    const sectionId = href.substring(1);
    setActiveSection(sectionId);
    
    const target = document.querySelector(href);
    if (target) {
      // For home section, scroll to top
      if (href === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // For other sections, calculate using the scrolled navbar height
        // The navbar will be in scrolled state (py-3) after navigation
        // Approximate height: 64px (py-3 = 12px * 2 + content ~40px)
        const scrolledNavbarHeight = 64;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: targetPosition - scrolledNavbarHeight,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled 
          ? 'backdrop-blur-[20px] bg-white/70 dark:bg-[#1C1C1E]/70 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.05)] py-3' 
          : 'backdrop-blur-[20px] bg-white/40 dark:bg-[#1C1C1E]/40 py-5'
      }`}
    >
      <div className="px-8 xl:px-16">
        <div className="flex justify-between items-center gap-4 xl:gap-8">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="text-xl md:text-2xl lg:text-3xl font-bold relative group tracking-tight z-10 flex-shrink-0 flex items-center gap-2"
          >
            {/* Custom Logo Icon */}
            <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF] to-[#5856D6] rounded-xl rotate-0 group-hover:rotate-180 transition-transform duration-500"></div>
              <span className="relative text-white font-bold text-sm md:text-base lg:text-xl z-10">TR</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-gradient">Torfe</span>
              <span className="text-gray-900 dark:text-white ml-1">Raaj</span>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#007AFF] to-[#5856D6] group-hover:w-full transition-all duration-300"></div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-1 relative flex-shrink-0" ref={navRef}>
            {/* Sliding Background Indicator */}
            <div
              className="absolute rounded-full bg-[#007AFF]/12 dark:bg-[#0A84FF]/12 backdrop-blur-sm border border-[#007AFF]/20 dark:border-[#0A84FF]/20 transition-all duration-200 ease-out pointer-events-none"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                height: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: indicatorStyle.opacity,
                willChange: 'left, width, opacity',
              }}
            />
            
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-section={link.href.substring(1)}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`px-3 xl:px-4 py-2 rounded-full font-medium transition-colors duration-200 relative z-10 tracking-tight text-sm xl:text-base whitespace-nowrap ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#007AFF] dark:text-[#0A84FF]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#007AFF] dark:hover:text-[#0A84FF]'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Resume Download Button */}
            <button
              onClick={onResumeClick}
              className="ml-2 px-3 xl:px-4 py-2 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white font-semibold hover:shadow-[0_4px_16px_rgba(0,122,255,0.4)] transition-all duration-300 hover:scale-105 flex items-center gap-2 tracking-tight text-sm xl:text-base whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </button>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-2 xl:ml-4 p-2.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-sm hover:scale-110 flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2 xl:hidden flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-sm hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <button
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileNavRef}
            className="xl:hidden mt-4 py-3 px-2 backdrop-blur-[20px] bg-white/80 dark:bg-[#1C1C1E]/80 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-gray-200/50 dark:border-gray-700/50 animate-scale-in relative"
          >
            {/* Sliding Background Indicator for Mobile */}
            <div
              className="absolute left-2 right-2 rounded-2xl bg-[#007AFF]/12 dark:bg-[#0A84FF]/12 backdrop-blur-sm border border-[#007AFF]/20 dark:border-[#0A84FF]/20 transition-all duration-200 ease-out pointer-events-none"
              style={{
                top: `${mobileIndicatorStyle.top}px`,
                height: `${mobileIndicatorStyle.height}px`,
                opacity: mobileIndicatorStyle.opacity,
                willChange: 'top, height, opacity',
              }}
            />
            
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-mobile-section={link.href.substring(1)}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`block px-4 py-3 rounded-2xl font-medium transition-colors duration-200 tracking-tight relative z-10 ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#007AFF] dark:text-[#0A84FF]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-[#007AFF] dark:hover:text-[#0A84FF]'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Resume Download Button for Mobile */}
            <button
              onClick={() => {
                onResumeClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full px-4 py-3 mt-2 rounded-2xl bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white font-semibold text-center hover:shadow-[0_4px_16px_rgba(0,122,255,0.4)] transition-all duration-300 relative z-10 tracking-tight flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
