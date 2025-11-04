import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="min-h-screen py-24 bg-gradient-to-br from-gray-50 via-rose-50/30 to-gray-50 dark:from-gray-900 dark:via-rose-950/20 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          {/* Project Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 px-5 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50">
              <svg className="w-5 h-5 text-[#34C759] dark:text-[#30D158]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">All Projects Delivered Successfully</span>
            </div>
            <div className="flex items-center space-x-2 px-5 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50">
              <svg className="w-5 h-5 text-[#007AFF] dark:text-[#0A84FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Production-Grade Solutions</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="ios-card rounded-[24px] p-6 group"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-[#007AFF] dark:group-hover:text-[#0A84FF] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Status Badge */}
                <div className="mb-5">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#34C759]/10 dark:bg-[#30D158]/10 border border-[#34C759]/20 dark:border-[#30D158]/20">
                    <div className="w-2 h-2 bg-[#34C759] dark:bg-[#30D158] rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-[#34C759] dark:text-[#30D158]">Production Ready</span>
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-br from-[#007AFF]/10 to-[#5856D6]/10 dark:from-[#0A84FF]/10 dark:to-[#BF5AF2]/10 text-[#007AFF] dark:text-[#0A84FF] px-3 py-1.5 rounded-full text-xs font-semibold border border-[#007AFF]/20 dark:border-[#0A84FF]/20"
                    >
                      {tech}
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

export default Projects;
