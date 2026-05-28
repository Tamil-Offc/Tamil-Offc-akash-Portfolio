export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="container-apple py-8 text-xs text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p>Copyright © {new Date().getFullYear()} Akash M. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="mailto:aakash02975@gmail.com" className="apple-link">Email</a>
            <a href="https://linkedin.com/in/m-akash-4848a7344" target="_blank" rel="noreferrer" className="apple-link">LinkedIn</a>
            <a href="tel:+919345387103" className="apple-link">Phone</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
