import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Code, Shield, Briefcase, Award, ChevronDown } from 'lucide-react';

export function Home() {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    cybersecurity: ['Network Security', 'Ethical Hacking Basics', 'Vulnerability Assessment', 'Security Protocols', 'OWASP'],
  };

  const highlights = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive web applications',
      count: '10+',
      label: 'Projects',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security-first approach to application design',
      count: '5+',
      label: 'Certifications',
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'Hands-on internships and real-world practice',
      count: '3+',
      label: 'Internships',
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Staying current with industry practices',
      count: '100+',
      label: 'Hours Learning',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                <span className="text-blue-700 text-sm font-medium">Available for Opportunities</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Zaheer Ahmed
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
                Web Developer,AI & Cybersecurity Enthusiast
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-xl mx-auto lg:mx-0">
                Building secure, scalable, and maintainable web systems with a security-first approach.
              </p>
              
              <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                B.Tech in Information Technology Engineering | Passionate about Application Security & Ethical Hacking
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg font-medium"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="src\Assets\Zaheer's CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </a>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold text-gray-900">10+</p>
                    <p className="text-sm text-gray-600">Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold text-gray-900">5+</p>
                    <p className="text-sm text-gray-600">Certifications</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold text-gray-900">3+</p>
                    <p className="text-sm text-gray-600">Internships</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Profile Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl rotate-6 scale-105 opacity-10"></div>
                
                {/* Frame Container */}
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                  {/* Inner Frame */}
                  <div className="relative overflow-hidden rounded-xl">
                    {/* Profile Image */}
                    <img
                      src="\src\Assets\zaheer.jpeg"
                      alt="Zaheer Ahmed - Professional Profile"
                      className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                  
                  {/* Border Accent */}
                  <div className="absolute inset-0 border-4 border-blue-600 rounded-2xl opacity-20"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white border-4 border-white rounded-xl shadow-lg px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-blue-600">{item.count}</span>
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Proficient in modern web technologies and cybersecurity practices, with a focus on building secure and scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Frontend Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Cybersecurity</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cybersecurity.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Collaborate?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm actively seeking opportunities in web development and cybersecurity. Let's discuss how I can contribute to your team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all font-semibold border-2 border-blue-400"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}