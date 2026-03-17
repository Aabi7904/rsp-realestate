import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import rspLogo from "@/assets/rsplogo.jpg";

const Footer = () => (
  <footer className="bg-card py-16 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Brand */}
        <div>
          {/* Logo */}
          <img
            src={rspLogo}
            alt="RSP Developers Logo"
            className="w-28 mb-4"
          />

          {/* Company Name */}
          <span className="font-famosa text-3xl text-primary tracking-royal">
            RSP
          </span>

          <p className="font-famosa text-sm uppercase tracking-ultra text-muted-foreground mt-1 mb-4">
            Developers Pvt.Ltd
          </p>

          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Premium land and layout development since 1999. Building legacies near Tiruvannamalai.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-sm text-foreground mb-4">
            Quick Links
          </h4>

          <div className="space-y-3">
            {[
              { label: "Projects", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm text-foreground mb-4">
            Contact
          </h4>

          <div className="space-y-3">

            <a
              href="tel:9443355212"
              className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              9443355212
            </a>

            <a
              href="mailto:sakthiprasannarsp@gmail.com"
              className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              sakthiprasannarsp@gmail.com
            </a>

            <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              Chetpet, near Tiruvannamalai
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sakthiprasanarsp?igsh=MXI0aHg4b2Y2dGJ0cw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4 text-primary" />
              Instagram
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@r.r.sakthiprasana8719?si=7LYVNjz-IvcjOls0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="w-4 h-4 text-primary" />
              YouTube
            </a>

          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="gold-divider mb-8" />

      {/* Bottom Section */}
      <div className="text-center space-y-3">

        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} RSP Developers Ltd. All rights reserved.
        </p>

        <p className="font-body text-xs text-muted-foreground">
          Developed by{" "}
          <a
            href="https://www.synclifysolutions.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Synclify Solutions
          </a>
        </p>

      </div>
    </div>
  </footer>
);

export default Footer;