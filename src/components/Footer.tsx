export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/50">
      <div className="container-apple py-10 text-xs text-muted-foreground px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-center text-center sm:text-left">
          <p className="order-2 sm:order-1">Copyright © {new Date().getFullYear()} Akash M. All rights reserved.</p>
          <div className="flex gap-6 order-1 sm:order-2">
            <a href="mailto:aakash02975@gmail.com" className="hover:text-primary transition-colors">Email</a>
            <a href="https://linkedin.com/in/m-akash-4848a7344" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="tel:+919345387103" className="hover:text-primary transition-colors">Phone</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
