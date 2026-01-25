import { Mail, Github, Linkedin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-base sm:text-lg text-gray-600">
            I'm open to discussing opportunities in web development, cybersecurity, internships, or collaboration on security-focused projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900 mb-1">Email</p>
                  <a
                    href="mailto:zaheerahmed.ite@gmail.com"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    zaheerahmed.ite@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Preferred for professional inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900 mb-1">GitHub</p>
                  <a
                    href="https://github.com/ZaheerAhmed04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    github.com/username
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    View my code and projects
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900 mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/zaheer-ahmed-4ab600371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    linkedin.com/in/username
                  </a>
                  <p className="text-gray-600 text-sm mt-1">
                    Connect professionally
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Interest</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-base text-gray-700 mb-4">
                I'm particularly interested in opportunities related to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Send className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-base text-gray-700">Web Application Security & Penetration Testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Send className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-base text-gray-700">Secure Full-Stack Development Roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Send className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-base text-gray-700">Cybersecurity Internships & Training Programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Send className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-base text-gray-700">Collaborative Projects on Security Tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <Send className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-base text-gray-700">Networking & Security Operations</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Response Time:</span> I typically respond to professional inquiries within 24-48 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Availability</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-base font-medium text-gray-900 mb-2">Current Status</p>
              <p className="text-sm text-gray-600">
                Open to internships, part-time opportunities, and collaborative projects while completing my B.Tech degree.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-base font-medium text-gray-900 mb-2">Preferred Work</p>
              <p className="text-sm text-gray-600">
                Remote or Hybrid positions in web development, cybersecurity analysis, or security-focused software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}