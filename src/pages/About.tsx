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
      <section className="container-apple py-24 text-center sm:py-32">
        <p className="animate-fade-in text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">My Story</p>
        <h1 className="animate-fade-up delay-100 mt-3 text-balance text-5xl font-bold tracking-tight sm:text-8xl">
          A builder of <br className="hidden sm:block" /><span className="text-blue-600">Digital Solutions.</span>
        </h1>
        <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-3xl text-balance text-xl text-muted-foreground leading-relaxed">
          I'm a detail-oriented <span className="text-foreground font-medium">Python &amp; Full Stack Developer</span> based in Madurai. 
          My passion lies in bridging the gap between complex backend logic and seamless frontend experiences. 
          I specialize in building AI-integrated applications that solve real-world problems.
        </p>
      </section>

      {/* Expertise Grid */}
      <section className="container-apple py-12">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold tracking-tight uppercase text-blue-600/80 tracking-[0.2em]">Expertise</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <div key={g.title} className={`animate-fade-up delay-${(i % 5 + 1) * 100} rounded-[2rem] border border-border bg-card p-8 hover:shadow-xl transition-all group`}>
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
      <section className="container-apple mt-32">
        <h2 className="text-center text-4xl font-bold tracking-tight mb-16">Recognition & Accomplishments</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="surface-dark rounded-[3rem] p-12 relative overflow-hidden group">
            <Award className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            <p className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-4">Certification</p>
            <h3 className="text-3xl font-bold tracking-tight mb-2">Python Full Stack</h3>
            <p className="text-white/60 mb-6 font-medium">Opztech Training Center</p>
            <p className="text-white/70 text-lg leading-relaxed">
              Immersion in full-cycle web development including Python, Django, and modern DB architectures.
            </p>
          </div>
          <div className="rounded-[3rem] border border-border bg-card p-12 relative overflow-hidden group">
            <Sparkles className="absolute -bottom-8 -right-8 w-48 h-48 text-blue-500/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">Achievement</p>
            <h3 className="text-3xl font-bold tracking-tight mb-2">Best Student Performer</h3>
            <p className="text-muted-foreground mb-6 font-medium">Generative AI in Web Dev · Zhahi Tech</p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Recognized for exceptional contribution and innovative application of AI in modern web workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="container-apple mt-32 mb-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="text-blue-600" />
            <h2 className="text-3xl font-bold tracking-tight">Academic Journey</h2>
          </div>
          <div className="space-y-8">
            {education.map((e) => (
              <div key={e.degree} className="relative pl-8 border-l-2 border-border group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border group-hover:bg-blue-600 transition-colors" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{e.degree}</h3>
                    <p className="text-muted-foreground font-medium">{e.school}</p>
                  </div>
                  <div className="text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit">
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
