import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import rsplogo from "@/assets/rsplogoo.png";

const navLinks = [
  { label: "Projects", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-panel py-2" : "py-2 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">

          {/* Logo + Company Name */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src={rsplogo}
              alt="RSP Developers Logo"
              className="h-28 md:h-32 w-auto object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span className="font-famosa text-2xl md:text-3xl text-primary tracking-royal">
                RSP
              </span>

              <span className="font-famosa text-sm uppercase tracking-ultra text-muted-foreground">
                Developers Pvt.Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-base uppercase tracking-royal transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:9443355212"
              className="flex items-center gap-2 gold-border px-6 py-3 text-base uppercase tracking-royal text-primary font-body transition-all duration-500 hover:bg-primary hover:text-primary-foreground gold-shimmer"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`font-heading text-4xl tracking-royal transition-colors ${
                    location.pathname === link.path
                      ? "gold-gradient-text"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href="tel:9443355212"
              className="gold-border px-10 py-4 text-base uppercase tracking-royal text-primary font-body"
            >
              Call Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;