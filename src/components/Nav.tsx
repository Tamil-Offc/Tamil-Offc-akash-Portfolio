import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ] as const;

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="nav-blur sticky top-0 z-[100] transition-all duration-300">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <NavLink to="/" className="text-xl font-bold tracking-tighter flex items-center gap-1 group">
          <span>Akash<span className="text-blue-600">.</span></span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile Toggle & ThemeToggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out border-b border-border md:hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "color-mix(in srgb, var(--background) 95%, transparent)", backdropFilter: "blur(20px)" }}
      >
        <nav className="flex flex-col p-6 gap-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => 
                `flex items-center px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                  isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
