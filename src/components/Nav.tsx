import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="nav-blur sticky top-0 z-[100] transition-all duration-300">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <NavLink to="/" className="text-xl font-bold tracking-tighter flex items-center gap-1 group">
          <span className="hidden sm:inline">Akash<span className="text-blue-600">.</span></span>
        </NavLink>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => 
                    `rounded-full px-4 py-2 text-sm font-medium transition-all hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 ${
                      isActive 
                      ? "text-primary font-semibold bg-primary/10" 
                      : "text-foreground/70"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="h-6 w-px bg-border/60 mx-2" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
