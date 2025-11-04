import type { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="min-h-screen py-24 flex items-center bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50 dark:from-gray-900 dark:via-orange-950/20 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900 dark:text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          
          {/* Skills Overview */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Proficient in modern web technologies with a focus on scalable, high-performance solutions. 
              Continuously exploring emerging technologies to stay ahead of industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 rounded-full bg-gradient-to-br from-[#007AFF]/10 to-[#5856D6]/10 dark:from-[#0A84FF]/10 dark:to-[#BF5AF2]/10 border border-[#007AFF]/20 dark:border-[#0A84FF]/20">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <span className="text-[#007AFF] dark:text-[#0A84FF]">15+</span> Technologies
                </span>
              </div>
              <div className="px-4 py-2 rounded-full bg-gradient-to-br from-[#34C759]/10 to-[#30D158]/10 border border-[#34C759]/20">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <span className="text-[#34C759] dark:text-[#30D158]">Full-Stack</span> Expertise
                </span>
              </div>
              <div className="px-4 py-2 rounded-full bg-gradient-to-br from-[#FF9500]/10 to-[#FF9F0A]/10 border border-[#FF9500]/20">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <span className="text-[#FF9500] dark:text-[#FF9F0A]">Cloud Native</span> Development
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="ios-card rounded-[24px] p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center tracking-tight">
                  <span className="w-2 h-2 bg-gradient-to-br from-[#007AFF] to-[#5856D6] rounded-full mr-3"></span>
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="bg-[#007AFF]/10 dark:bg-[#0A84FF]/10 text-[#007AFF] dark:text-[#0A84FF] px-3.5 py-1.5 rounded-full text-sm font-semibold border border-[#007AFF]/20 dark:border-[#0A84FF]/20 hover:scale-105 transition-transform duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
