import type { WorkExperience } from '../types';

interface ExperienceProps {
  experience: WorkExperience;
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="min-h-screen py-24 bg-gradient-to-br from-gray-50 via-purple-50/30 to-gray-50 dark:from-gray-900 dark:via-purple-950/30 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900 dark:text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          
          {/* Key Metrics Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-5 rounded-[20px] bg-gradient-to-br from-[#007AFF]/10 to-[#5856D6]/10 dark:from-[#0A84FF]/10 dark:to-[#BF5AF2]/10 border border-[#007AFF]/20 dark:border-[#0A84FF]/20">
              <div className="text-3xl font-bold text-[#007AFF] dark:text-[#0A84FF] mb-1">30%</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Performance Boost</div>
            </div>
            <div className="text-center p-5 rounded-[20px] bg-gradient-to-br from-[#34C759]/10 to-[#30D158]/10 border border-[#34C759]/20">
              <div className="text-3xl font-bold text-[#34C759] dark:text-[#30D158] mb-1">25%</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Faster Delivery</div>
            </div>
            <div className="text-center p-5 rounded-[20px] bg-gradient-to-br from-[#FF9500]/10 to-[#FF9F0A]/10 border border-[#FF9500]/20">
              <div className="text-3xl font-bold text-[#FF9500] dark:text-[#FF9F0A] mb-1">20%</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center p-5 rounded-[20px] bg-gradient-to-br from-[#5856D6]/10 to-[#BF5AF2]/10 border border-[#5856D6]/20 dark:border-[#BF5AF2]/20">
              <div className="text-3xl font-bold text-[#5856D6] dark:text-[#BF5AF2] mb-1">8+</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Team Members Led</div>
            </div>
          </div>
          
          <div className="ios-card rounded-[28px] p-8 md:p-12">
            <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {experience.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">{experience.location}</p>
              </div>
            </div>
            <div className="space-y-6">
              {experience.positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-[20px] p-6 border border-gray-200 dark:border-gray-700 shadow-md"
                >
                  <div className="flex justify-between items-start mb-5 flex-wrap gap-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                      {position.title}
                    </h4>
                    <span className="text-[#007AFF] dark:text-[#0A84FF] font-semibold px-4 py-1.5 rounded-full bg-[#007AFF]/10 dark:bg-[#0A84FF]/10">
                      {position.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {position.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 dark:text-gray-200"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#34C759]/20 dark:bg-[#30D158]/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-[#34C759] dark:text-[#30D158]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {index === 0 && (
                    <div className="mt-5 pt-5 border-t border-gray-200/50 dark:border-gray-700/50">
                      <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Key Responsibilities
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200">
                          <div className="w-1.5 h-1.5 bg-[#007AFF] dark:bg-[#0A84FF] rounded-full"></div>
                          <span>Architecture & System Design</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200">
                          <div className="w-1.5 h-1.5 bg-[#007AFF] dark:bg-[#0A84FF] rounded-full"></div>
                          <span>Code Review & Quality Assurance</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200">
                          <div className="w-1.5 h-1.5 bg-[#007AFF] dark:bg-[#0A84FF] rounded-full"></div>
                          <span>AWS Cloud Infrastructure</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200">
                          <div className="w-1.5 h-1.5 bg-[#007AFF] dark:bg-[#0A84FF] rounded-full"></div>
                          <span>Team Mentorship & Leadership</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
