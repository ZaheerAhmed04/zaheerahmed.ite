import React from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  GraduationCap, 
  Lock, 
  Globe, 
  BrainCircuit,
  Briefcase,
  Zap,
  User
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <About />
    </div>
  );
}

export function About() {

  const coreInterests = [
    {
      title: "Secure Web Development",
      description: "Building modern, scalable apps with a focus on OWASP guidelines and robust architecture.",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      lightBg: "bg-blue-50"
    },
    {
      title: "Cybersecurity",
      description: "System security analysis, ethical hacking, and evaluation of defensive tools.",
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      lightBg: "bg-indigo-50"
    },
    {
      title: "Artificial Intelligence",
      description: "Exploring smart algorithms and AI concepts to solve complex real-world problems.",
      icon: <BrainCircuit className="w-6 h-6 text-purple-600" />,
      lightBg: "bg-purple-50"
    },
    {
      title: "Secure Coding",
      description: "Implementing defensive programming standards in C++, Java, and JavaScript.",
      icon: <Lock className="w-6 h-6 text-slate-700" />,
      lightBg: "bg-slate-100"
    }
  ];

  const skills = [
    "Data Structures", "OOPs (Java)", "C++", "AI Logic",
    "React.js", "Tailwind CSS", "Node.js", "Anti-Cryptojacking"
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-8 space-y-14">

          {/* INTRO SECTION */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <div>
              <h2 className="text-sm font-extrabold tracking-widest text-indigo-600 uppercase mb-3">
                Information Technology Engineer
              </h2>

              <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Hi, I'm <span className="text-indigo-600">Zaheer Ahmed</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                I am a B.Tech Information Technology Engineering student at Baba Ghulam Shah Badshah University,
                Rajouri (Batch 2023), with strong interests in Cybersecurity, Artificial Intelligence,
                and Web Development.
              </p>

              <p className="text-slate-600 mt-4">
                I focus on building secure, intelligent, and scalable digital solutions by combining
                system security, smart algorithms, and modern web technologies.
              </p>
            </div>

            {/* PROFILE IMAGE */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">

                {/* Glow */}
                <div className="absolute -inset-4 rounded-full bg-indigo-400/20 blur-2xl"></div>

                <div className="
                  relative w-52 h-72
                  rounded-full bg-white/70
                  backdrop-blur-xl
                  p-[6px]
                  border border-white/60
                  shadow-xl
                  transition-all duration-500
                  group-hover:scale-105
                ">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-200">
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjH2wRGtw2cwFNWkLnjJWmuk-BjeOo1dpbUpI48xvsJahBGUk6TS_KEEguCto-8Cbszm17uGivHoZGabEoefEiX0PVgUPw5zHnskSxEVI04PYo-LSPHdGPGGj7MbUT7_nvGjqhfAeXSfC8QxrAx-k7hqEf3YVcBUtJx7wzsvZGCIAwksp78jQdc6jZwHfoX/s463/zaheer.jpeg"
                      alt="Zaheer Ahmed"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center bg-indigo-50">
                      <User className="w-20 h-20 text-indigo-300" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

           {/* EXPERIENCE & STACK */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-3xl shadow-lg">
              <h3 className="font-bold text-lg mb-2">Experience</h3>
              <p className="font-semibold">Cybersecurity Intern</p>
              <p className="text-sm text-indigo-600">Cyber Gyan, Noida</p>
              <p className="text-sm text-slate-500 mt-2">
                System security analysis and anti-cryptojacking research.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl shadow-lg">
              <h3 className="font-bold text-lg mb-4">Technical Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-bold bg-slate-100 rounded-xl">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* INTERESTS */}
          <div className="grid sm:grid-cols-2 gap-5">
            {coreInterests.map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl shadow-lg">
                <div className={`${item.lightBg} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-4">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl">Academic Status</h3>
            </div>

            <p className="text-sm uppercase opacity-70">Degree</p>
            <p className="font-bold mb-4">B.Tech IT (Batch 2023)</p>

            <p className="text-sm uppercase opacity-70">Institution</p>
            <p className="font-medium">BGSBU, Rajouri</p>
          </div>
        </div>

      </div>
    </section>
  );
}
