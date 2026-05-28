import { Award, BookOpen, Briefcase, GraduationCap, Laptop, Sparkles } from "lucide-react";

const skillGroups = [
  { title: "Languages", items: ["Python", "SQL"], icon: <Laptop size={18} /> },
  { title: "Backend", items: ["Django", "Django REST Framework"], icon: <Briefcase size={18} /> },
  { title: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS"], icon: <Laptop size={18} /> },
  { title: "Database", items: ["MySQL", "PostgreSQL"], icon: <Laptop size={18} /> },
  { title: "Tools", items: ["Postman", "Git", "Docker"], icon: <Laptop size={18} /> },
  { title: "Concepts", items: ["REST API", "ORM", "OAuth", "MVC"], icon: <BookOpen size={18} /> },
];

const education = [
  { degree: "B.Sc Information Technology", school: "NMSSVN College, Madurai", year: "2025", score: "64%" },
  { degree: "HSC", school: "MNU Jayaraj Nadar HSS, Madurai", year: "2022", score: "60%" },
];

export function About() {
  return (
    <div className="bg-background min-h-screen">
      <section className="container-apple py-20 text-center sm:py-32">
        <p className="animate-fade-in text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">My Story</p>
        <h1 className="animate-fade-up delay-100 mt-3 text-balance text-4xl font-bold tracking-tight sm:text-6xl md:text-8xl px-4">
          A builder of <br className="hidden sm:block" /><span className="text-blue-600">Digital Solutions.</span>
        </h1>
        <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-3xl text-balance text-lg sm:text-xl text-muted-foreground leading-relaxed px-4">
          I'm a detail-oriented <span className="text-foreground font-medium">Python &amp; Full Stack Developer</span> based in Madurai. 
          My passion lies in bridging the gap between complex backend logic and seamless frontend experiences. 
          I specialize in building AI-integrated applications that solve real-world problems.
        </p>
      </section>

      {/* Expertise Grid */}
      <section className="container-apple py-12">
        <div className="flex items-center gap-4 mb-12 px-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase text-blue-600/80 tracking-[0.2em]">Expertise</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {skillGroups.map((g, i) => (
            <div key={g.title} className={`animate-fade-up delay-${(i % 5 + 1) * 100} rounded-[1.5rem] sm:rounded-[2rem] border border-border bg-card p-6 sm:p-8 hover:shadow-xl transition-all group`}>
              <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                {g.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li key={it} className="skill-badge">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications - Premium Style */}
      <section className="container-apple mt-24 sm:mt-32 px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-tight mb-12 sm:mb-16">Recognition & Accomplishments</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="surface-dark rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 relative overflow-hidden group">
            <Award className="absolute -bottom-8 -right-8 w-32 h-32 sm:w-48 sm:h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            <p className="text-xs sm:text-sm font-semibold text-blue-400 tracking-widest uppercase mb-4">Certification</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Python Full Stack</h3>
            <p className="text-white/60 mb-6 font-medium text-sm sm:text-base">Opztech Training Center</p>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed relative z-10">
              Immersion in full-cycle web development including Python, Django, and modern DB architectures.
            </p>
          </div>
          <div className="rounded-[2.5rem] sm:rounded-[3rem] border border-border bg-card p-8 sm:p-12 relative overflow-hidden group">
            <Sparkles className="absolute -bottom-8 -right-8 w-32 h-32 sm:w-48 sm:h-48 text-blue-500/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            <p className="text-xs sm:text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">Achievement</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Best Student Performer</h3>
            <p className="text-muted-foreground mb-6 font-medium text-sm sm:text-base">Generative AI in Web Dev · Zhahi Tech</p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed relative z-10">
              Recognized for exceptional contribution and innovative application of AI in modern web workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="container-apple mt-24 sm:mt-32 mb-20 sm:mb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-10 sm:mb-12">
            <GraduationCap className="text-blue-600 shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Academic Journey</h2>
          </div>
          <div className="space-y-8">
            {education.map((e) => (
              <div key={e.degree} className="relative pl-8 border-l-2 border-border group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border group-hover:bg-blue-600 transition-colors" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-blue-600 transition-colors">{e.degree}</h3>
                    <p className="text-muted-foreground font-medium text-sm sm:text-base">{e.school}</p>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit shrink-0">
                    {e.year} • {e.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
