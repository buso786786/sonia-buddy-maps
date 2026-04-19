import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const legalLinks = [
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/child-safety", label: "Child Safety" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Sonia Buddy" className="h-9 w-9" />
            <span className="font-display font-bold text-lg tracking-tight">
              Sonia Buddy
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-foreground" }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
            <a
              href="/#features"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="/#about"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <Link
              to="/faq"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-foreground" }}
            >
              FAQ
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setLegalOpen(true)}
              onMouseLeave={() => setLegalOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors">
                Legal <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {legalOpen && (
                <div className="absolute right-0 top-full pt-2 w-56">
                  <div className="glass-card rounded-xl p-2">
                    {legalLinks.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        className="block px-3 py-2 text-sm rounded-lg text-foreground hover:bg-secondary transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-primary !py-2.5 !px-4 !text-sm"
          >
            Get the App
          </a>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-card rounded-2xl p-4 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-lg hover:bg-secondary text-sm font-medium" onClick={() => setOpen(false)}>
              Home
            </Link>
            <a href="/#features" className="block px-3 py-2 rounded-lg hover:bg-secondary text-sm font-medium" onClick={() => setOpen(false)}>
              Features
            </a>
            <a href="/#about" className="block px-3 py-2 rounded-lg hover:bg-secondary text-sm font-medium" onClick={() => setOpen(false)}>
              About
            </a>
            <Link to="/faq" className="block px-3 py-2 rounded-lg hover:bg-secondary text-sm font-medium" onClick={() => setOpen(false)}>
              FAQ
            </Link>
            <div className="pt-2 mt-2 border-t border-border">
              <p className="px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">Legal</p>
              {legalLinks.map((l) => (
                <Link key={l.to} to={l.to} className="block px-3 py-2 rounded-lg hover:bg-secondary text-sm" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
