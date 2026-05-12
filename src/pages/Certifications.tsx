import { Award, ExternalLink, Calendar } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      id: 1,
      name: 'Cyber Security Internship',
      issuer: 'Cyber Gyan (C-DAC Noida)',
      year: '2025',
      description: 'Completed a cybersecurity internship focused on anti-cryptojacking tool evaluation, threat detection, and security testing fundamentals.',
      verificationUrl: '#',
      verified: true,
    },
    {
      id: 2,
      name: 'Ethical Hacking & Cyber Security',
      issuer: 'IIT Jammu, Techible I3C - IIT Jammu',
      year: '2025',
      description: 'Summer School 2025 training covering secure software practices, network safety, malware prevention, and hands-on cybersecurity workflows.',
      verificationUrl: '#',
      verified: true,
    },
    {
      id: 3,
      name: 'Common Internship Test',
      issuer: 'Internship Studio',
      year: '2025',
      description: 'Completed internship readiness assessment demonstrating aptitude for professional internship opportunities.',
      verificationUrl: '#',
      verified: true,
    },
    {
      id: 4,
      name: 'Live Masterclass on Claude AI',
      issuer: 'Skill Nation',
      year: '2025',
      description: 'Completed AI-focused masterclass exploring Claude AI use cases and practical productivity workflows.',
      verificationUrl: '#',
      verified: true,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certifications</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Professional certifications and training programs demonstrating commitment to continuous learning 
            in web development and cybersecurity domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-base font-medium text-gray-700">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.year}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{cert.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    {cert.verified ? (
                      <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded border border-green-200">
                        Verified
                      </span>
                    ) : (
                      <span className="text-xs text-gray-700 bg-gray-50 px-2 py-1 rounded border border-gray-200">
                        In Progress
                      </span>
                    )}
                    {cert.verificationUrl === '#' ? (
                      <span className="text-sm text-gray-600">Listed in CV</span>
                    ) : (
                      <a
                        href={cert.verificationUrl}
                        className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
                      >
                        View Certificate
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Professional Development</h3>
          <p className="text-base text-gray-700 mb-4">
            I am committed to staying current with industry standards and emerging security threats. 
            My certification journey reflects a dedication to both theoretical knowledge and practical application 
            in web development and cybersecurity.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded border border-gray-200">
              <p className="text-3xl font-semibold text-gray-900">{certifications.length}</p>
              <p className="text-sm text-gray-600">Total Certifications</p>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <p className="text-3xl font-semibold text-gray-900">
                {certifications.filter(c => c.verified).length}
              </p>
              <p className="text-sm text-gray-600">Verified</p>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <p className="text-3xl font-semibold text-gray-900">2024-2025</p>
              <p className="text-sm text-gray-600">Active Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
