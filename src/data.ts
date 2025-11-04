import type { PersonalInfo, Skill, WorkExperience, Project, Education } from './types';

// ============================================================================
// PERSONAL INFORMATION
// ============================================================================

export const personalInfo: PersonalInfo = {
  name: 'Torfe Raaj A',
  title: 'Senior Full-Stack Developer',
  location: 'Chennai, India',
  phone: '+91 7550324307',
  email: 'torfe.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/torferaaj/',
  github: 'https://github.com/torferaaj/',
  whatsapp: 'https://wa.me/917550324307',
  heroTagline: 
    'Building enterprise-grade applications with Node.js, React.js, MongoDB, and AWS. ' +
    'Expert in database management, cloud architecture, and full-stack development with the MERN stack.',
  aboutMe:
    'I\'m a passionate full-stack developer who thrives on building scalable, production-ready systems. ' +
    'With 2.5+ years at Unifo Private Limited, I\'ve progressed from intern to Senior Developer, leading teams and delivering enterprise solutions. ' +
    'My expertise spans cloud architecture on AWS, database optimization, and AI integration. ' +
    'I believe in writing clean, maintainable code and mentoring teams to achieve excellence. ' +
    'When I\'m not coding, I\'m exploring new technologies and contributing to technical innovation.',
};

// ============================================================================
// TECHNICAL SKILLS
// ============================================================================

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Python',
      'C',
    ],
  },
  {
    category: 'Frontend',
    items: [
      'React.js',
      'HTML5 & CSS3',
      'Responsive Design',
      'State Management',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Hapi.js',
      'RESTful APIs',
      'Microservices',
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS (Lambda, EC2, S3, RDS, Cognito)',
      'Docker',
      'CI/CD (GitHub Actions)',
      'Serverless Architecture',
    ],
  },
  {
    category: 'Databases',
    items: [
      'MongoDB (Atlas, Mongoose)',
      'MySQL',
      'DynamoDB',
      'Redis',
    ],
  },
  {
    category: 'Search & Analytics',
    items: [
      'Elasticsearch',
      'MongoDB Atlas Search',
      'Full-Text Search',
    ],
  },
  {
    category: 'Tools & Methods',
    items: [
      'Git & GitHub',
      'Postman & Swagger',
      'Agile/Scrum',
      'Code Review & Mentoring',
    ],
  },
];

// ============================================================================
// WORK EXPERIENCE
// ============================================================================

const COMPANY_NAME = 'Unifo Private Limited';
const COMPANY_LOCATION = 'Chennai, IN';

export const workExperience: WorkExperience = {
  company: COMPANY_NAME,
  location: COMPANY_LOCATION,
  positions: [
    {
      title: 'Senior Developer',
      period: 'Apr 2024 - Present (1 yr 7 mos)',
      achievements: [
        'Optimized AWS infrastructure and MongoDB schema design, achieving 30% improvement in API response times',
        'Architected and delivered scalable full-stack features, accelerating product releases by 25%',
        'Led technical reviews and established coding standards for cross-functional team of 8+ engineers',
      ],
    },
    {
      title: 'Module Lead',
      period: 'Aug 2023 - Apr 2024 (9 mos)',
      achievements: [
        'Mentored 5+ junior developers and championed clean architecture principles across the team',
        'Re-engineered database models to scale 10x data volume while maintaining sub-second query performance',
        'Built serverless automation pipelines using AWS Lambda and Batch, reducing infrastructure costs by 20%',
      ],
    },
    {
      title: 'Software Development Engineer',
      period: 'Jun 2023 - Jul 2023 (2 mos)',
      achievements: [
        'Developed production-ready modules with Node.js and React.js, maintaining 95%+ test coverage',
        'Implemented Elasticsearch-powered search engine, delivering 4x faster query performance',
      ],
    },
    {
      title: 'Project Intern',
      period: 'Nov 2022 - May 2023 (7 mos)',
      achievements: [
        'Built secure authentication system with AWS Cognito supporting role-based access for 800+ users',
      ],
    },
  ],
};

// ============================================================================
// PROJECTS
// ============================================================================

export const projects: Project[] = [
  {
    title: 'Enterprise Job Automation & AI Digitization Platform',
    description: 
      'Built full-stack automation platform supporting multi-channel job creation (Email, Excel, API) using React.js, Node.js, MongoDB, and AWS. ' +
      'Integrated Gemini AI for intelligent document processing and data extraction, reducing manual entry time by 70%.',
    technologies: [
      'React.js',
      'Node.js',
      'Hapi.js',
      'MongoDB',
      'AWS Lambda',
      'Python',
      'Gemini AI',
    ],
  },
  {
    title: 'Enterprise Authentication & RBAC System',
    description: 
      'Architected modular authentication platform with AWS Cognito and DynamoDB, featuring granular role-based permissions, ' +
      'multi-tenant support, and JWT-based session management for 1000+ concurrent users.',
    technologies: [
      'Node.js',
      'AWS Cognito',
      'DynamoDB',
      'JWT',
      'OAuth 2.0',
    ],
  },
  {
    title: 'Intelligent Search & Prediction Engine',
    description: 
      'Developed high-performance search system using Elasticsearch and MongoDB Atlas Search with fuzzy matching, semantic search, and ML-based predictions. ' +
      'Achieved 200ms average query time on 10M+ record dataset.',
    technologies: [
      'Elasticsearch',
      'Atlas Search',
      'Node.js',
      'MongoDB',
      'ML Algorithms',
    ],
  },
  {
    title: 'Scalable Reporting & Analytics Dashboard',
    description: 
      'Engineered real-time reporting engine with scheduled and on-demand report generation using AWS Batch and Node.js streams. ' +
      'Processes 1M+ records with dynamic Excel export, reducing generation time from 5 minutes to 15 seconds.',
    technologies: [
      'React.js',
      'Node.js',
      'AWS Batch',
      'Streams API',
      'ExcelJS',
    ],
  },
];

// ============================================================================
// EDUCATION
// ============================================================================

export const education: Education = {
  institution: 'Kamaraj College Of Engineering And Technology, Anna University',
  degree: 'Bachelor Of Engineering',
  field: 'Computer Science And Engineering',
  location: 'Madurai, IN',
  gpa: '8.6',
  achievements: [
    'Dean\'s List for Academic Excellence',
    'Best Project Award - Brain Share (Final Year)',
  ],
};
