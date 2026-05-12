import { Link } from 'react-router-dom';
import { 
  Code, 
  Shield, 
  Terminal, 
  Cpu, 
  Globe, 
  Zap, 
  ArrowRight, 
  CheckCircle2,
  Users,
  Lightbulb,
  Rocket
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Custom web application development using modern frameworks like React, Node.js, and TypeScript. Focus on scalability and performance.',
      features: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'API Integration', 'Database Management'],
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Consulting',
      description: 'Security-first development approach. Vulnerability assessments, secure code reviews, and implementation of security best practices.',
      features: ['OWASP Top 10 Mitigation', 'Secure Authentication', 'Data Encryption', 'Vulnerability Audits'],
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Skills Development & Mentoring',
      description: 'Personalized training sessions for individuals or teams looking to master web development or cybersecurity fundamentals.',
      features: ['React & Modern JS', 'Node.js Backend Architecture', 'Security Awareness', 'Code Review Sessions'],
      color: 'green'
    }
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'Understanding your requirements and project goals in detail.'
    },
    {
      icon: Terminal,
      title: 'Strategy',
      description: 'Planning the architecture, security protocols, and tech stack.'
    },
    {
      icon: Rocket,
      title: 'Execution',
      description: 'Agile development with regular updates and feedback loops.'
    },
    {
      icon: Zap,
      title: 'Delivery',
      description: 'Final testing, deployment, and performance optimization.'
    }
  ];

  const getServiceTone = (color: string) => `service-tone-${color}`;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <span className="text-blue-700 text-sm font-medium">Services & Expertise</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Elevate Your Digital <span className="text-blue-600">Infrastructure</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Providing high-end development and security solutions. Whether you're looking to build a secure application or develop your team's technical skills, I'm here to help.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-blue-200"
            >
              Hire Me Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className={`relative group ${getServiceTone(service.color)} bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 flex flex-col h-full`}
                >
                  <div className="service-icon-wrap w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="service-icon w-7 h-7 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="service-check w-4 h-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="service-link mt-auto font-bold flex items-center gap-2 group/link"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How I Work</h2>
            <p className="text-gray-600">A structured approach to delivering excellence</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
                  )}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white border-2 border-blue-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-600 transition-colors">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Development CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-8 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-10 blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 opacity-10 blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Need a Custom Learning Path?</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                I offer one-on-one sessions tailored to your current skill level. From zero to hero in web development or focused security training.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all"
                >
                  Book a Session
                </Link>
                <Link 
                  to="/about" 
                  className="px-8 py-4 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition-all border border-gray-700"
                >
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
