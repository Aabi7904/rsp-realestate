import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="section-emerald py-24 relative overflow-hidden">
    {/* Subtle pattern */}
    <div className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A24D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    />

    <div className="container mx-auto px-6 text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-4xl sm:text-5xl text-foreground mb-6"
      >
        Book Your Site Visit
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-elegant text-xl text-foreground/80 italic mb-10 max-w-lg mx-auto"
      >
        Experience the grandeur of our developments in person. Schedule your exclusive visit today.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/contact"
          className="inline-block gold-border bg-primary/10 px-12 py-4 font-body text-xs uppercase tracking-ultra text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground gold-shimmer animate-gold-pulse"
        >
          Schedule Visit
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
