const channels = [
  { label: "Email", value: "aakash02975@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=aakash02975@gmail.com" },
  { label: "Phone", value: "+91 93453 87103", href: "tel:+919345387103" },
  { label: "LinkedIn", value: "m-akash-4848a7344", href: "https://linkedin.com/in/m-akash-4848a7344" },
  { label: "Location", value: "Madurai, Tamil Nadu" },
];

export function Contact() {
  return (
    <div>
      <section className="container-apple py-24 text-center sm:py-32">
        <p className="animate-fade-in text-sm font-medium text-muted-foreground">Contact</p>
        <h1 className="animate-fade-up delay-100 mt-3 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
          Let's work together.
        </h1>
        <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-xl text-balance text-xl text-muted-foreground">
          Open to Python Developer or Backend Developer roles, internships, and freelance work.
        </p>
        <div className="animate-fade-up delay-300 mt-8 flex items-center justify-center gap-6">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aakash02975@gmail.com" target="_blank" rel="noreferrer" className="btn-pill btn-primary">Say hello</a>
          <a href="https://linkedin.com/in/m-akash-4848a7344" target="_blank" rel="noreferrer" className="btn-ghost text-[15px] font-medium">
            View LinkedIn &rsaquo;
          </a>
        </div>
      </section>

      <section className="container-apple grid gap-3 sm:grid-cols-2">
        {channels.map((c) => {
          const inner = (
            <>
              <p className="text-sm font-medium text-muted-foreground">{c.label}</p>
              <p className="mt-2 break-words text-xl font-medium text-foreground">{c.value}</p>
            </>
          );
          const cls = "block rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md";
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
