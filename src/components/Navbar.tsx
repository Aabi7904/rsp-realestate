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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* NAV BAR — z-[60] sits above the mobile menu backdrop (z-50) */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || mobileOpen ? "glass-panel py-2" : "py-2 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

          {/* Logo + Company Name */}
          <Link
            to="/"
            className="flex items-center gap-2 md:gap-4"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src={rsplogo}
              alt="RSP Developers Logo"
              className="h-14 sm:h-16 md:h-28 lg:h-32 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-famosa text-base sm:text-lg md:text-2xl lg:text-3xl text-primary tracking-royal">
                RSP
              </span>
              <span className="font-famosa text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] md:tracking-ultra text-muted-foreground">
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

          {/* Mobile Hamburger — z-[70] so it stays clickable above the overlay */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-1 relative z-[70]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
            )}
          </button>

        </div>
      </motion.nav>

      {/* ── MOBILE FULL-SCREEN MENU ──
          z-[50] — below the navbar (z-60) so the top bar stays visible.
          Solid dark background so nothing bleeds through from hero.       */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[50] flex flex-col items-center justify-center gap-8 px-6"
            style={{
              backgroundColor: "hsl(216, 30%, 6%)",   /* fully opaque — no bleed-through */
              backdropFilter: "blur(0px)",
            }}
          >
            {/* Nav Links */}
            <nav className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`font-heading text-3xl sm:text-4xl tracking-royal transition-colors ${
                      location.pathname === link.path
                        ? "gold-gradient-text"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Gold Divider */}
            <div className="gold-divider w-24" />

            {/* Call Now */}
            <motion.a
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.28, duration: 0.3 }}
              href="tel:9443355212"
              className="flex items-center justify-center gap-2 gold-border w-full max-w-[260px] py-4 text-sm uppercase tracking-royal text-primary font-body"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;