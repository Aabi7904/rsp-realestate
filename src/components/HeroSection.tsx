import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import heroImg from "@/assets/hero-land.jpg";
import logoImg from "@/assets/since.png";

const HeroSection = () => {
  const location = useLocation();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      key={location.pathname}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImg}
          alt="Aerial view of premium land development"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content
          — On mobile the navbar is ~56–64px tall, so pt-20 (80px) gives
            a safe gap without pushing content too far down.
          — On md+ the navbar is taller but justify-center handles centering. */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">

        {/* Logo (since1.png) */}
        <motion.img
          src={logoImg}
          alt="RSP Developers Since 1999"
          initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-20 sm:w-28 md:w-36 lg:w-48 mb-1 drop-shadow-[0_0_30px_rgba(255,215,0,0.35)]"
        />

        {/* Gold Divider */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "6rem" }}
          transition={{ duration: 1 }}
          className="gold-divider mb-2 w-24"
        />

        {/* Company Name
            Reduced tracking on xs so the long string doesn't wrap oddly */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body text-[10px] sm:text-xs md:text-base lg:text-lg
                     uppercase tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.4em]
                     text-primary font-semibold mb-4 sm:mb-6 w-full px-2"
        >
          RSP DEVELOPERS PVT.LTD. &mdash; SINCE 1999
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-display
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                     gold-gradient-text tracking-royal mb-4 sm:mb-6 leading-tight"
        >
          LAND OF LEGACY.
        </motion.h1>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-elegant
                     text-base sm:text-lg md:text-xl lg:text-2xl
                     text-muted-foreground italic
                     max-w-[280px] sm:max-w-sm md:max-w-xl
                     mb-8 sm:mb-12"
        >
          A Premium Investment Destination Since 1999
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          onClick={scrollToProjects}
          className="gold-border
                     px-8 sm:px-10 md:px-12
                     py-3 sm:py-4
                     font-body text-xs sm:text-sm
                     uppercase tracking-ultra
                     text-primary
                     transition-all duration-500
                     hover:bg-primary hover:text-primary-foreground
                     gold-shimmer"
        >
          Enter Our Projects
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-primary/50 to-transparent"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;