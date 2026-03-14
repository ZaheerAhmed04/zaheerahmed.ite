import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
{
  id: 1,
  title: 'Digital Prayer Timetable',
  date: '05-08-2025',
  problem: 'Mosques and communities often require a clear and accessible way to display daily prayer schedules digitally without relying on expensive dedicated prayer clock hardware.',
  solution: 'Built a web-based digital prayer timetable that displays daily prayer schedules in a clean digital interface with a live clock. The application can be easily deployed on any screen or browser and accessed online.',
  techStack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Netlify'],
  status: 'Live',
  liveUrl: 'https://digitalprayerclock.netlify.app/',
  githubUrl: 'https://github.com/ZaheerAhmed04/Digital--Prayer-Timetable',
}
,  {
  id: 1, 
  title: 'File Encrypter & Decrypter',
  date: '05-08-2025', 
  problem: 'Users often need to share sensitive files over insecure channels but lack a simple way to encrypt them without installing complex software.',
  solution: 'Built a client-side web application that uses AES encryption to secure files in the browser before they are shared, ensuring data privacy.',
  techStack: ['React', 'Web Crypto API', 'Tailwind CSS', 'JavaScript', 'Netlify'],
  status: 'Live',
  liveUrl: 'https://fileencrypter.netlify.app/',
  githubUrl: 'https://github.com/ZaheerAhmed04/CyberDriveX', 
},
    {
  id: 2, // Assuming this is the next ID in your list
  title: 'Kanzul Irfan Digital Quran',
  date: '15-11-2025',
  problem: 'Traditional Islamic texts and commentaries (Tafsir) are often difficult to access or navigate in a portable, user-friendly digital format.',
  solution: 'Created a responsive web platform that digitizes the Kanzul Irfan Quranic translation and commentary, featuring an intuitive interface for multi-device reading.',
  techStack: ['html','Javascript', 'Tailwind CSS', 'CSS', 'Netlify'],
  status: 'Live',
  liveUrl: 'https://kanzul-irfan.netlify.app/',
  githubUrl: 'https://github.com/ZaheerAhmed04/Kanzul-Irfan/',
},
    {
      id: 3,
      title: 'To-Do-List',
      problem: 'To manage tasks effectively,user need to manage and organize their daily activities with features like task prioritization, deadlines, and reminders.',
      solution: 'Developed a full-stack to-do list application allowing users to create, update, delete, and categorize tasks securely.',
      techStack: ['html', 'CSS', 'JavaScript', 'Netlify'],
      status: 'Live',
      liveUrl: 'https://taskmate-me.netlify.app/',
      githubUrl: 'https://github.com/ZaheerAhmed04/taskmate-me',
    },
    {
       id: 4,
  title: 'Scientific Calculator Web App',
  problem: 'Many online learners and developers lack a simple, browser-based scientific calculator that supports both basic and advanced mathematical operations without needing external software.',
  solution: 'Built a responsive and user-friendly scientific calculator web app using HTML, CSS, and JavaScript that performs basic arithmetic, trigonometric, logarithmic, and other advanced mathematical functions directly in the browser.',
  techStack: ['HTML', 'CSS', 'JavaScript'],
  status: 'Completed',
  liveUrl: 'https://zaheerahmed04.github.io/Scientific-Calculator/',
  githubUrl: 'https://github.com/zaheerahmed04/Scientific-Calculator',
    },
    {
     
  id: 5,
  title: 'BGSBU Cleanliness Feedback Page',
  problem: 'There is no centralized, interactive way for university students and staff to provide feedback on campus cleanliness and waste management at departmental locations.',
  solution: 'Built a user-friendly web page that displays waste categories (Plastic, Paper, Organic, Metal) and allows users to submit feedback and rate cleanliness of departments and canteens.',
  techStack: ['HTML', 'CSS', 'JavaScript'],
  status: 'Completed',
  liveUrl: 'https://zaheer-ahmed015.github.io/BGSBU-Cleanliness-Page/',
  githubUrl: 'https://github.com/zaheer-ahmed015/BGSBU-Cleanliness-Page',


    },
    {
      id: 6,
      title: 'ZaheerAhmed|Portfolio',
      problem: 'Many personal portfolios lack proper structure, responsiveness, and usability, making it difficult for users and recruiters to navigate and understand the developer’s skills effectively.',
      solution: 'A user-friendly and responsive portfolio built using HTML, CSS, and JavaScript, designed to showcase projects, skills, and professional profile with a clean and modern interface.',
      techStack: ['HTML, CSS, JavaScript'],
      status: 'Planned',
      liveUrl: 'https://zaheerahmed04.github.io/Portfolio/',
      githubUrl: 'https://github.com/ZaheerAhmed04/Portfolio',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Planned':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
            A collection of web development and cybersecurity projects showcasing secure application design, 
            vulnerability assessment, and implementation of security best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <span className={`px-2 py-1 text-xs rounded border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Problem</p>
                  <p className="text-sm text-gray-600">{project.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Solution</p>
                  <p className="text-sm text-gray-600">{project.solution}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
