import { NavLink } from 'react-router-dom';
import { Menu, X, Home, User, FolderGit, Briefcase, Award, GraduationCap, Mail, FileText, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: User },
    { to: '/projects', label: 'Projects', icon: FolderGit },
    { to: '/experience', label: 'Experience', icon: Briefcase },
    { to: '/certifications', label: 'Certifications', icon: Award },
    { to: '/learning', label: 'Learning', icon: GraduationCap },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white border-b border-gray-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                <Sparkles size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-bold text-lg leading-none">Zaheer Ahmed</span>
                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter mt-1">Web & Security Engineer</span>
              </div>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                      isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a href="/Assets/Zaheer's CV.pdf" className="ml-4 px-5 py-2 bg-gray-900 text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-md">
                Resume
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-700"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[64px] z-[9998] bg-white border-t border-gray-100 overflow-y-auto">
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-bold ${
                      isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 bg-gray-50'
                    }`
                  }
                >
                  <link.icon size={20} />
                  {link.label}
                </NavLink>
              ))}
              <a href="/Assets/Zaheer's CV.pdf" className="flex items-center justify-center gap-3 w-full py-4 bg-gray-900 text-white font-bold rounded-xl mt-4">
                <FileText size={20} />
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}
