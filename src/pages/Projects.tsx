import { CheckCircle2, Code2, Sparkles } from "lucide-react";
import portfolio from "../assets/image.png"
import expense from "../assets/expense detector.jpeg"

const projects = [
  {
    title: "Expense Detector",
    tagline: "AI-integrated full-stack expense tracking app.",
    image: expense,
    stack: ["Python", "Django", "React.js", "MySQL", "REST API"],
    description: "A comprehensive solution for tracking finances with intelligent automation. This project showcases my ability to integrate AI into a robust full-stack architecture.",
    points: [
      "Full-stack architecture with Django REST Framework and React.",
      "MySQL database with optimized relational schemas.",
      "AI module for automatic expense categorization from text.",
      "Secure authentication and session management.",
      "Responsive UI designed for both mobile and desktop users."
    ],
    links: { github: "https://github.com/aakash02975-lang/Expense-dedector-frontend.git" }
  },
  {
    title: "Portfolio Canvas",
    tagline: "Modern creative portfolio with premium aesthetics.",
    image: portfolio,
    stack: ["React", "React Router", "Tailwind CSS", "Vite"],
    description: "A high-performance portfolio site built with the latest web technologies, focusing on motion design and user experience.",
    points: [
      "Client-side routing with React Router for seamless navigation.",
      "Pure CSS animations and micro-interactions.",
      "Responsive design using Tailwind CSS v4 features.",
      "Premium dark mode and glassmorphism implementation."
    ],
    links: { github: "https://github.com/aakash02975-lang/my-creative-canvas.git" }
  },
];

export function Projects() {
  return (
    <div className="bg-background min-h-screen">
      <section className="container-apple py-20 text-center sm:py-32">
        <p className="animate-fade-in text-sm font-semibold text-primary tracking-widest uppercase mb-4">Portfolio</p>
        <h1 className="animate-fade-up delay-100 mt-3 text-balance text-4xl font-bold tracking-tight sm:text-6xl md:text-8xl px-4">
          Crafted with <br className="hidden sm:block" /><span className="text-primary">Precision.</span>
        </h1>
        <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-2xl text-balance text-lg sm:text-xl text-muted-foreground px-4">
          A selection of projects that demonstrate my technical expertise and eye for detail.
        </p>
      </section>

      <section className="container-apple grid gap-16 sm:gap-24 pb-24 px-4">
        {projects.map((p, i) => (
          <article key={p.title} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className={`rounded-[1.5rem] sm:rounded-[2rem] aspect-video border border-border flex items-center justify-center overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
               <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map(s => (
                    <span key={s} className="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">{s}</span>
                  ))}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">{p.title}</h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{p.description}</p>
              </div>

              <ul className="space-y-3">
                {p.points.map(pt => (
                  <li key={pt} className="flex gap-3 text-foreground/80 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a href={p.links.github} className="btn-pill bg-secondary text-foreground hover:bg-secondary/80 flex items-center justify-center gap-2 border border-border px-6 py-3">
                  <Code2 size={18} /> Source Code
                </a>
              </div>
            </div>
          </article>
        ))}

        <div className="mt-16 sm:mt-24 rounded-[2rem] sm:rounded-[3rem] border-2 border-dashed border-border bg-card p-8 sm:p-16 text-center shadow-inner">
          <Sparkles className="mx-auto mb-6 text-primary w-10 h-10 sm:w-12 sm:h-12" />
          <h3 className="text-xl sm:text-2xl font-bold mb-4">The next big thing is in progress.</h3>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">I'm always working on something new. Check back soon for more exciting projects!</p>
        </div>
      </section>
    </div>
  );
}
