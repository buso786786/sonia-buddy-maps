import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="Sonia Buddy" className="h-9 w-9" />
              <span className="font-display font-bold text-lg">Sonia Buddy</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Your smart travel companion across all 23 districts of West Bengal.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><a href="/#features" className="hover:text-foreground">Features</a></li>
              <li><a href="/#about" className="hover:text-foreground">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link></li>
              <li><Link to="/child-safety" className="hover:text-foreground">Child Safety</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Account Deletion</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="mailto:zisakhoofficial@gmail.com" className="hover:text-foreground break-all">
                  zisakhoofficial@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> West Bengal, India
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {["Instagram", "Twitter", "Facebook"].map((s) => (
                <a key={s} href="#" aria-label={s} className="px-3 py-1.5 rounded-lg border border-border text-xs font-medium hover:border-accent hover:text-accent transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sonia Buddy. All rights reserved.</p>
          <p>Built for the commuters of West Bengal.</p>
        </div>
      </div>
    </footer>
  );
}
