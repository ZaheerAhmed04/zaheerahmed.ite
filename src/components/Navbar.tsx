import { NavLink } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  FolderGit, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Mail, 
  FileText, 
  Sparkles,
  Zap,
  Moon,
  Sun
} from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    document.documentElement.classList.toggle('dark', shouldUseDark);
    document.documentElement.style.colorScheme = shouldUseDark ? 'dark' : 'light';
    setIsDarkMode(shouldUseDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: User },
    { to: '/projects', label: 'Projects', icon: FolderGit },
    { to: '/experience', label: 'Experience', icon: Briefcase },
    { to: '/services', label: 'Services', icon: Zap },
    { to: '/certifications', label: 'Certifications', icon: Award },
    { to: '/learning', label: 'Learning', icon: GraduationCap },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode((current) => {
      const next = !current;

      document.documentElement.classList.toggle('dark', next);
      document.documentElement.style.colorScheme = next ? 'dark' : 'light';
      localStorage.setItem('theme', next ? 'dark' : 'light');

      return next;
    });
  };

  return (
    <nav 
      className={`sticky top-0 w-full z-[10000] bg-white dark:bg-gray-900 border-b transition-all duration-300 ${
        scrolled ? 'shadow-md border-gray-200 dark:border-gray-800 py-2' : 'border-gray-100 dark:border-gray-800 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout: 3-Column Grid for perfect centering */}
        <div className="hidden lg:grid grid-cols-3 items-center h-14">
          
          {/* Column 1: Logo (Left) */}
          <div className="flex justify-start">
            <NavLink to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black">
                <Sparkles size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-black dark:text-white font-montserrat font-bold text-lg leading-none tracking-tight uppercase">Zaheer</span>
                <span className="text-[9px] text-gray-500 font-medium uppercase tracking-widest mt-1">Engineer</span>
              </div>
            </NavLink>
          </div>

          {/* Column 2: Navlinks (Center) */}
          <div className="flex justify-center">
            <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800/50 p-1 rounded-2xl border border-gray-100 dark:border-gray-700/50">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[12px] font-bold tracking-wide transition-all relative group font-poppins ${
                      isActive ? 'text-black dark:text-white' : 'text-gray-500 hover:text-black dark:hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      <span className={`absolute bottom-1 left-3 right-3 h-[2px] bg-black dark:bg-white transition-all duration-300 transform origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Column 3: Controls (Right) */}
          <div className="flex justify-end items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 text-gray-500 hover:text-black dark:hover:text-white">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="/Assets/Zaheer's CV.pdf" className="px-5 py-2 bg-black dark:bg-white text-white dark:text-black text-[12px] font-bold rounded-lg hover:opacity-80 transition-all">
              RESUME
            </a>
          </div>
        </div>

        {/* Mobile Layout: Flex justify-between */}
        <div className="lg:hidden flex items-center justify-between h-14">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black">
              <Sparkles size={18} />
            </div>
            <span className="text-black dark:text-white font-montserrat font-bold text-lg tracking-tight">ZAHEER</span>
          </NavLink>

          <div className="flex items-center gap-2">
            <button onClick={toggleDarkMode} className="p-2 text-gray-500">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-700 dark:text-gray-200">
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100000] bg-white dark:bg-gray-900 flex flex-col pt-20">
          <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-6 border-b dark:border-gray-800">
            <span className="text-black dark:text-white font-montserrat font-bold text-xl uppercase tracking-tight">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-700 dark:text-gray-200">
              <X size={28} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-xl font-bold text-lg ${
                    isActive ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <link.icon size={20} className={isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'} />
                    <span>{link.label}</span>
                  </>
                )}
              </NavLink>
            ))}
            <div className="pt-6 pb-20">
              <a href="/Assets/Zaheer's CV.pdf" className="flex items-center justify-center gap-3 w-full py-5 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-xl shadow-lg">
                <FileText size={20} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
