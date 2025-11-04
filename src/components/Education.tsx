import type { Education } from '../types';

interface EducationProps {
  education: Education;
}

const EducationSection = ({ education }: EducationProps) => {
  return (
    <section id="education" className="min-h-screen py-24 flex items-center bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50 dark:from-gray-900 dark:via-green-950/30 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="ios-card rounded-[28px] p-8 md:p-12">
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                  {education.institution}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold">
                  {education.degree}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{education.field}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 dark:text-gray-300 mb-3">{education.location}</p>
                <div className="px-4 py-2 rounded-full bg-[#34C759]/10 dark:bg-[#30D158]/10">
                  <p className="text-[#34C759] dark:text-[#30D158] font-bold text-lg">
                    GPA: {education.gpa}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <div className="w-1.5 h-1.5 bg-[#007AFF] dark:bg-[#0A84FF] rounded-full"></div>
                  <span className="text-sm font-medium">Data Structures & Algorithms</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <div className="w-1.5 h-1.5 bg-[#007AFF] dark:bg-[#0A84FF] rounded-full"></div>
                  <span className="text-sm font-medium">Database Management Systems</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <div className="w-1.5 h-1.5 bg-[#007AFF] dark:bg-[#0A84FF] rounded-full"></div>
                  <span className="text-sm font-medium">Web Technologies</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <div className="w-1.5 h-1.5 bg-[#007AFF] dark:bg-[#0A84FF] rounded-full"></div>
                  <span className="text-sm font-medium">Cloud Computing</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <div className="w-1.5 h-1.5 bg-[#007AFF] dark:bg-[#0A84FF] rounded-full"></div>
                  <span className="text-sm font-medium">Software Engineering</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                  <div className="w-1.5 h-1.5 bg-[#007AFF] dark:bg-[#0A84FF] rounded-full"></div>
                  <span className="text-sm font-medium">Operating Systems</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
                Achievements
              </h4>
              <div className="flex flex-wrap gap-3">
                {education.achievements.map((achievement) => (
                  <span
                    key={achievement}
                    className="bg-white dark:bg-gray-800 backdrop-blur-sm text-gray-700 dark:text-gray-200 px-4 py-2.5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md flex items-center font-medium hover:scale-105 transition-transform duration-200"
                  >
                    <svg
                      className="w-5 h-5 text-[#FFD60A] dark:text-[#FFD60A] mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
