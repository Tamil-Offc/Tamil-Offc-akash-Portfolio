const channels = [
  { label: "Email", value: "aakash02975@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=aakash02975@gmail.com" },
  { label: "Phone", value: "+91 93453 87103", href: "tel:+919345387103" },
  { label: "LinkedIn", value: "m-akash-4848a7344", href: "https://linkedin.com/in/m-akash-4848a7344" },
  { label: "Location", value: "Madurai, Tamil Nadu" },
];

export function Contact() {
  return (
    <div>
      <section className="container-apple py-20 text-center sm:py-32 px-4">
        <p className="animate-fade-in text-sm font-medium text-muted-foreground uppercase tracking-widest">Contact</p>
        <h1 className="animate-fade-up delay-100 mt-3 text-balance text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Let's work together.
        </h1>
        <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-xl text-balance text-lg sm:text-xl text-muted-foreground px-4">
          Open to Python Developer or Backend Developer roles, internships, and freelance work.
        </p>
        <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aakash02975@gmail.com" target="_blank" rel="noreferrer" className="btn-pill btn-primary px-10 py-3 w-full sm:w-auto text-center">Say hello</a>
          <a href="https://linkedin.com/in/m-akash-4848a7344" target="_blank" rel="noreferrer" className="btn-ghost text-[15px] font-medium border border-border sm:border-none rounded-full py-2 px-6 w-full sm:w-auto text-center">
            View LinkedIn &rsaquo;
          </a>
        </div>
      </section>

      <section className="container-apple grid gap-4 grid-cols-1 sm:grid-cols-2 pb-24 px-4">
        {channels.map((c) => {
          const inner = (
            <div className="flex flex-col h-full justify-between">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">{c.label}</p>
              <p className="mt-4 break-words text-lg sm:text-xl font-medium text-foreground">{c.value}</p>
            </div>
          );
          const cls = "block rounded-[1.5rem] sm:rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:shadow-lg hover:border-primary/30 group";
          return c.href ? (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
              {inner}
            </a>
          ) : (
            <div key={c.label} className={cls}>{inner}</div>
          );
        })}
      </section>
    </div>
  );
}
