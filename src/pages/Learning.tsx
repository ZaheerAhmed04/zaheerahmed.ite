import { BookOpen, Target, Code, Shield } from 'lucide-react';

export function Learning() {
  const currentFocus = [
    {
      id: 1,
      icon: Shield,
      title: 'Advanced Cybersecurity Concepts',
      description: 'Deepening knowledge in advanced penetration testing, malware analysis, and security architecture design.',
      progress: 'Ongoing',
    },
    {
      id: 2,
      icon: Code,
      title: 'Secure Coding Practices',
      description: 'Mastering security-first development approaches, including input validation, encryption, and secure session management.',
      progress: 'Ongoing',
    },
    {
      id: 3,
      icon: BookOpen,
      title: 'Ethical Hacking & Penetration Testing',
      description: 'Practicing ethical hacking methodologies through labs and capture-the-flag challenges to identify vulnerabilities.',
      progress: 'Ongoing',
    },
    {
      id: 4,
      icon: Target,
      title: 'Network Security & Protocols',
      description: 'Understanding TCP/IP security, VPNs, firewalls, and network monitoring tools for infrastructure protection.',
      progress: 'Ongoing',
    },
  ];

  const currentProjects = [
    {
      id: 1,
      title: 'Personal Security Lab Environment',
      description: 'Building a virtualized lab for practicing penetration testing and security assessments in a controlled environment.',
    },
    {
      id: 2,
      title: 'OWASP Compliance Checker',
      description: 'Developing an automated tool to scan web applications for OWASP Top 10 vulnerabilities.',
    },
    {
      id: 3,
      title: 'Security Blog Platform',
      description: 'Creating a blog to document learning journey, write about security concepts, and share practical tutorials.',
    },
  ];

  const upcomingCertifications = [
    {
      id: 1,
      name: 'Certified Ethical Hacker (CEH)',
      target: 'Q2 2026',
    },
    {
      id: 2,
      name: 'CompTIA Security+',
      target: 'Q3 2026',
    },
    {
      id: 3,
      name: 'AWS Certified Security - Specialty',
      target: 'Q4 2026',
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Current Learning & Work</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
            Continuous learning and hands-on practice are essential in cybersecurity and web development. 
            Here's what I'm currently focused on and working toward.
          </p>
        </div>

        {/* Current Focus Areas */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Learning Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentFocus.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded border border-blue-200">
                        {item.progress}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Current Projects */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Active Personal Projects</h2>
          <div className="space-y-4">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Certification Roadmap</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-base text-gray-700 mb-6">
              Preparing for industry-recognized certifications to validate my skills and knowledge in cybersecurity.
            </p>
            <div className="space-y-4">
              {upcomingCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center justify-between bg-white p-4 rounded border border-gray-200"
                >
                  <div>
                    <p className="text-base font-medium text-gray-900">{cert.name}</p>
                    <p className="text-sm text-gray-600">Target: {cert.target}</p>
                  </div>
                  <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded">
                    Planned
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Philosophy */}
        <section>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning Philosophy</h3>
            <p className="text-base text-gray-700 mb-3">
              I believe that cybersecurity and web development require continuous learning due to the rapidly 
              evolving threat landscape and technology stack. My approach combines:
            </p>
            <ul className="space-y-2 text-base text-gray-700">
              <li>• <span className="font-medium">Hands-on Practice:</span> Building real projects and participating in security challenges</li>
              <li>• <span className="font-medium">Formal Education:</span> Pursuing certifications and structured courses</li>
              <li>• <span className="font-medium">Community Engagement:</span> Following security researchers and contributing to discussions</li>
              <li>• <span className="font-medium">Documentation:</span> Writing about what I learn to reinforce understanding</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}