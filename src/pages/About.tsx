import { motion } from "framer-motion";
import StatsSection from "@/components/StatsSection";
import mdPortrait from "@/assets/md-portrait.jpg";

const About = () => (
  <>
    {/* Hero */}
    <section className="section-navy min-h-[60vh] flex items-center justify-center text-center px-6 pt-32 pb-20">
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-body text-xs uppercase tracking-ultra text-primary mb-6"
        >
          Our Legacy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-5xl sm:text-7xl text-foreground mb-6"
        >
          25+ Years of Trusted<br />Development
        </motion.h1>
        <div className="gold-divider max-w-[100px] mx-auto" />
      </div>
    </section>

    {/* MD Section */}
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="gold-border p-3">
              <img
                src={mdPortrait}
                alt="Mr. Sakthi Prasanna - Managing Director"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            {/* Gold corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">
              Managing Director
            </p>
            <h2 className="font-heading text-4xl gold-gradient-text mb-2">
              Mr. Sakthi Prasanna
            </h2>
            <p className="font-body text-xs uppercase tracking-royal text-muted-foreground mb-8">
              Founder & Visionary Leader
            </p>
            <div className="gold-divider max-w-[60px] mb-8" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              With over 25 years of unwavering dedication to land development, Mr. Sakthi Prasanna 
              has built RSP Developers Ltd into one of the most trusted names in the Tiruvannamalai region. 
              His vision of creating premium investment destinations has transformed countless acres of land 
              into thriving communities.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Under his leadership, RSP Developers has completed 45+ prestigious projects across five 
              major road corridors, earning the trust of over 3,000 families. His commitment to 
              transparency, quality infrastructure, and customer satisfaction remains the cornerstone 
              of every RSP development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Company statement */}
    <section className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-elegant text-2xl sm:text-3xl text-foreground italic leading-relaxed mb-8"
        >
          "We don't just sell land — we create legacies. Every plot we develop carries the promise 
          of a prosperous future, backed by 25 years of trust and excellence."
        </motion.blockquote>
        <div className="gold-divider max-w-[60px] mx-auto mb-4" />
        <p className="font-body text-xs uppercase tracking-royal text-primary">
          Mr. Sakthi Prasanna
        </p>
      </div>
    </section>

    <StatsSection />
  </>
);

export default About;
