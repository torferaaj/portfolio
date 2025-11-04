import type { PersonalInfo } from '../types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About = ({ personalInfo }: AboutProps) => {
  return (
    <section id="about" className="min-h-screen py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="ios-card rounded-[28px] p-8 md:p-12">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              {personalInfo.aboutMe}
            </p>
            
            {/* What I Do Section */}
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-[#007AFF]/5 to-[#5856D6]/5 dark:from-[#0A84FF]/5 dark:to-[#BF5AF2]/5 border border-[#007AFF]/10 dark:border-[#0A84FF]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                What I Bring to the Table
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Scalable Architecture</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Building systems that grow with your business needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Cloud Expertise</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">AWS-powered solutions with cost optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Performance Focus</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Optimizing for speed and efficiency at scale</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Team Leadership</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Mentoring developers and driving code quality</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md">
                <div className="w-10 h-10 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md">
                <div className="w-10 h-10 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-700 dark:text-gray-300 hover:text-[#007AFF] dark:hover:text-[#0A84FF] transition-colors font-medium">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md">
                <div className="w-10 h-10 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md">
                <div className="w-10 h-10 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-semibold">2.5+ Years Experience</span>
              </div>
            </div>
            
            {/* Interests & Values */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-5 rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#34C759] to-[#30D158] flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Continuous Learning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Always exploring new tech</p>
              </div>
              <div className="text-center p-5 rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF9500] to-[#FF9F0A] flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Collaboration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Building better together</p>
              </div>
              <div className="text-center p-5 rounded-2xl bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007AFF] to-[#0A84FF] flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Quality First</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Clean, maintainable code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
