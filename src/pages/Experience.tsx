import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Cybersecurity Intern',
      organization: 'Cyber Gyan (C-DAC Noida), Remote – Noida',
      duration: 'January 2025 - March 2025',
      responsibilities: [
        ' Evaluated anti-crypto jacking tools to detect and prevent cybersecurity threats.',
        ' Performed structured analysis of crypto mining detection tools.',
        ' Gained exposure to real-world vulnerabilities and countermeasures.',
        ' Enhanced skills in security testing and threat analysis.',
      ],
    },
    {
      id: 2,
      role: 'Ethical Hacking and Cybersecurity Intern',
      organization: 'IIT Jammu – I3C Lab (Techible onsite)',
      duration: 'June 2025 - August 2025',
      responsibilities: [
        'Learning secure software practices, network safety, and malware prevention',
        'Collaborating on hands-on cybersecurity projects under expert mentorship',
        'Gaining practical insight into industry-grade security tools and techniques',
      ],
    },
   {
  id: 3,
  role: 'Frontend Web Development Volunteer',
  organization: 'Baba Ghulam Shah Badshah University (BGSBU)',
  duration: 'December 2025 - Present',
  responsibilities: [
    'Contributed to the development of the official BGSBU university website as a volunteer',
    'Worked on frontend development using React,Typescript,HTML, CSS, and JavaScript',
    'Designed and implemented responsive user interface components',
    'Collaborated with the development team to improve website usability and performance',
    'Assisted in updating and maintaining web pages as per university requirements',
  ],
},
];
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Professional internships and hands-on experience in web development and cybersecurity, 
            building practical skills in secure application development and security assessment.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-base text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.organization}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="border-l-2 border-blue-200 pl-4 ml-2">
                <p className="text-base font-medium text-gray-700 mb-3">Key Responsibilities</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                      • {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">What I've Learned</h3>
          <p className="text-base text-gray-700">
            Through these experiences, I've developed a strong foundation in both web development and cybersecurity. 
            I've learned to approach software development with a security-first mindset, understanding that protection 
            against vulnerabilities must be built into applications from the ground up, not added as an afterthought.
          </p>
        </div>
      </div>
    </div>
  );
}