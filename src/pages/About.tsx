import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldCheck, FileCheck, Smile, Award } from "lucide-react";
import mdPortrait from "@/assets/md-portrait.jpg";

const About = () => {

  // Counter Animation
  const Counter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2500;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center text-center px-6 pt-32 pb-20">

        {/* ===== Premium Background Layers ===== */}
        <div className="absolute inset-0 -z-10">

          {/* Base Navy Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1f33] via-[#102a44] to-[#0a1a2a]" />

          {/* Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,120,0.08),transparent_40%)]" />

          {/* Luxury Gold Dot Pattern */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,215,120,0.35) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
  
          {/* Subtle Noise */}
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

        </div>

        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-xs uppercase tracking-ultra text-primary mb-6"
          >
            Our Legacy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-heading text-5xl sm:text-7xl text-foreground mb-14 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.05em" }}
              transition={{ duration: 1.2 }}
              className="block"
            >
              25+ Years of Trusted
            </motion.span>
            Development
          </motion.h1>

          {/* Achievement Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-14 mt-10">

            <div>
              <p className="font-heading text-6xl sm:text-7xl gold-gradient-text">
                <Counter end={25} suffix="+" />
              </p>
              <p className="text-sm uppercase tracking-royal text-muted-foreground mt-4">
                Years of Trust
              </p>
            </div>

            <div>
              <p className="font-heading text-6xl sm:text-7xl gold-gradient-text">
                <Counter end={45} suffix="+" />
              </p>
              <p className="text-sm uppercase tracking-royal text-muted-foreground mt-4">
                Projects Completed
              </p>
            </div>

            <div>
              <p className="font-heading text-6xl sm:text-7xl gold-gradient-text">
                <Counter end={3000} suffix="+" />
              </p>
              <p className="text-sm uppercase tracking-royal text-muted-foreground mt-4">
                Happy Families
              </p>
            </div>

            <div>
              <p className="font-heading text-6xl sm:text-7xl gold-gradient-text">
                <Counter end={5} />
              </p>
              <p className="text-sm uppercase tracking-royal text-muted-foreground mt-4">
                Major Corridors
              </p>
            </div>

          </div>

          <div className="gold-divider max-w-[120px] mx-auto mt-16" />

        </div>
      </section>

      {/* ================= MD SECTION ================= */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-primary" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                major road corridors, earning the trust of over 3,000 families.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 px-6 border-t border-border bg-muted/20">
        <div className="container mx-auto max-w-6xl text-center">

          <h2 className="font-heading text-5xl gold-gradient-text mb-20">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {[
              {
                icon: ShieldCheck,
                title: "DTCP & RERA Approved",
                text: "Fully compliant projects ensuring secure and legally approved investments."
              },
              {
                icon: FileCheck,
                title: "Clear Title",
                text: "Transparent documentation and verified ownership for complete peace of mind."
              },
              {
                icon: Smile,
                title: "100% Customer Satisfaction",
                text: "Trusted by thousands of families for reliability, integrity and excellence."
              },
              {
                icon: Award,
                title: "25+ Years of Trusted Service",
                text: "A legacy built over decades of consistent growth and successful developments."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative w-full h-[320px] max-w-[280px] mx-auto
p-8 flex flex-col items-center justify-center text-center
bg-background border border-border
transition-all duration-500 ease-out
hover:scale-[1.01]
hover:shadow-[0_0_18px_rgba(255,215,120,0.15)]
group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <item.icon 
                  size={44} 
                  className="mx-auto mb-6 text-primary group-hover:scale-105 transition-transform duration-300" 
                />

                <h3 className="font-heading text-lg mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </>
  );
};

export default About;