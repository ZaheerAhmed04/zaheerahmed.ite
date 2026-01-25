import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/learning', label: 'Learning' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Zaheer Ahmed</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Web Developer & Cybersecurity Enthusiast focused on building secure, scalable, and maintainable web systems. Passionate about application security and continuous learning.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:zaheerahmed.ite@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ZaheerAhmed04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/zaheer-ahmed-4ab600371"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:zaheerahmed.ite@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-start gap-2"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>zaheerahmed.ite@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ZaheerAhmed04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-start gap-2"
                >
                  <Github className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>github.com/username</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/zaheer-ahmed-4ab600371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-start gap-2"
                >
                  <Linkedin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>linkedin.com/in/username</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 Zaheer Ahmed. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="\src\Assets\Zaheer's CV.pdf" className="text-gray-400 hover:text-white transition-colors">
                Download Resume
              </a>
              <span className="text-gray-600">•</span>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}