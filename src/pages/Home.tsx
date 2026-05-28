import { Link } from "react-router-dom";
import { Code2, Database, Layers, Mail, Sparkles } from "lucide-react";
import akash from "../assets/file_0000000079b87208abb5c347b7814f91.png"

export function Home() {
  return (
    <div className="bg-background">
      {/* Hero — Premium Apple Style */}
      <section className="surface-dark relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container-apple py-24 text-center sm:py-32 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold mb-6 animate-fade-in">
            <Sparkles size={14} className="text-white" />
            <span>Available for new opportunities</span>
          </div>
          <h1 className="animate-fade-up delay-100 text-balance text-6xl font-bold tracking-tight sm:text-8xl bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Akash M.
          </h1>
          <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-2xl text-balance text-xl text-white/80 sm:text-3xl font-light">
            Crafting the future with <span className="text-white font-medium">Python &amp; Full Stack</span> engineering.
            <br />
            <span className="text-white/50 text-lg sm:text-xl">Elegant code. Scalable systems. Seamless experiences.</span>
          </p>
          <div className="animate-fade-up delay-300 mt-10 flex items-center justify-center gap-6 flex-wrap">
            <Link to="/projects" className="btn-pill btn-primary px-8">View Projects</Link>
            <Link to="/contact" className="btn-ghost text-[15px] font-medium border border-white/10 rounded-full group">
              Get in touch <span className="group-hover:translate-x-1 transition-transform inline-block">&rsaquo;</span>
            </Link>
          </div>

          {/* Monogram tile with float animation */}
          <div className="animate-fade-up delay-500 mt-20 flex justify-center">
            <div className="animate-float relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <div className="grid h-40 w-40 place-items-center rounded-[2.5rem] bg-white/5 text-6xl font-semibold tracking-tight ring-1 ring-white/20 backdrop-blur-md shadow-2xl overflow-hidden">
                <img src={akash} alt="Akash M" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Arsenal — Responsive Grid */}
      <section className="py-24 container-apple">
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-3">Expertise</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Tech Arsenal</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard 
            icon={<Code2 className="text-primary" />}
            title="Frontend"
            skills={["React", "TypeScript", "Tailwind CSS", "Next.js"]}
          />
          <SkillCard 
            icon={<Database className="text-primary" />}
            title="Backend"
            skills={["Python", "Django", "PostgreSQL", "Node.js"]}
          />
          <SkillCard 
            icon={<Layers className="text-primary" />}
            title="DevOps & AI"
            skills={["Docker", "Git", "AI APIs", "Vercel"]}
          />
        </div>
      </section>

      {/* Featured Projects Selection */}
      <section className="bg-secondary py-24">
        <div className="container-apple">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-xs mb-3">Portfolio Highlights</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Selected Work</h2>
            </div>
            <Link to="/projects" className="hidden sm:block apple-link font-medium">Browse All Projects &rsaquo;</Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <FeatureTile
              eyebrow="AI-Integrated"
              title="Expense Detector"
              subtitle="Intelligent full-stack expense tracker that automates receipt analysis. Built with Django, React, and MySQL."
              to="/projects"
              cta="Explore Project"
              dark
            />
            <FeatureTile
              eyebrow="Web Development"
              title="Design Canvas"
              subtitle="A creative playground for exploring modern UI patterns and animations. Built for performance."
              to="/projects"
              cta="Learn More"
            />
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/projects" className="apple-link font-medium">Browse All Projects &rsaquo;</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 container-apple">
        <div className="surface-dark rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Mail size={120} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Let's build something <br className="sm:hidden" /> remarkable together.</h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Currently accepting new projects and job opportunities. If you have a vision, let's make it a reality.
          </p>
          <Link to="/contact" className="btn-pill btn-primary px-12 py-4 animate-glow">
            Say Hello
          </Link>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="p-8 rounded-[2rem] bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 py-2 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
}

function FeatureTile({
  eyebrow, title, subtitle, to, cta, dark,
}: {
  eyebrow: string; title: string; subtitle: string; to: string; cta: string; dark?: boolean;
}) {
  return (
    <article
      className={
        "group relative overflow-hidden rounded-[2.5rem] p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl sm:p-14 " +
        (dark ? "surface-dark" : "bg-card text-card-foreground border border-border shadow-sm")
      }
    >
      <p className={"text-sm font-semibold tracking-widest uppercase " + (dark ? "text-primary/70" : "text-primary")}>{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className={"mx-auto mt-4 max-w-md text-balance text-base leading-relaxed " + (dark ? "text-white/70" : "text-muted-foreground")}>
        {subtitle}
      </p>
      <div className="mt-8">
        <Link to={to} className={"btn-pill " + (dark ? "bg-white text-black hover:bg-white/90" : "btn-primary")}>{cta}</Link>
      </div>
    </article>
  );
}
