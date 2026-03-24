import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShieldCheck, FileCheck, Smile, Award, Landmark, Target, Eye } from "lucide-react";
import mdPortrait from "@/assets/rspmd2.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {

  // ================= PREMIUM COUNTER (2.5s SMOOTH EASE) =================
  const Counter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime = null;
      const duration = 3000;

      const animateCounter = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        const easeOut = 1 - Math.pow(1 - percentage, 3);
        setCount(Math.floor(easeOut * end));

        if (progress < duration) {
          requestAnimationFrame(animateCounter);
        }
      };

      requestAnimationFrame(animateCounter);
    }, [end]);

    return (
      
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.15, 1], opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-block"
      >
        {count}{suffix}
      </motion.span>
    );
  };

  return (
    <>
    <Helmet>
  <title>About RSP Developers | 25 Years of Real Estate Legacy</title>
  <meta name="description" content="Learn about RSP Developers Ltd and our visionary founder Mr. R.R. Sakthi Prasana. Over 25 years of excellence, 45+ projects, and 3000+ happy families in Chetpet." />
</Helmet>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#071521] via-[#0c1f33] to-[#06111c]" />

          <motion.div
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(255,215,120,0.3), transparent, rgba(255,215,120,0.3))",
              backgroundSize: "200% 200%",
            }}
          />

          <motion.div
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute w-[700px] h-[700px] bg-primary/10 blur-[160px] rounded-full top-[-250px] left-[-200px]"
          />

          <motion.div
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute w-[600px] h-[600px] bg-primary/10 blur-[160px] rounded-full bottom-[-250px] right-[-200px]"
          />

          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,215,120,0.4) 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="text-center max-w-5xl mx-auto pt-32 pb-20">

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.15em" }}
            transition={{ duration: 1.2 }}
            className="text-xs uppercase tracking-ultra text-primary mb-8"
          >
            25 Years of Excellence in Land Development
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="font-heading text-6xl sm:text-8xl leading-tight text-white"
          >
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="block">
              Building
            </motion.span>

            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="block gold-gradient-text">
              Landmarks
            </motion.span>

            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="block">
              Creating Legacies
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 1.5, duration: 1 }}
            className="h-[2px] bg-primary mx-auto mt-12"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            For over two decades, we have transformed prime land into
            high-value investment destinations across major growth corridors,
            delivering trust, appreciation and long-term prosperity.
          </motion.p>

          {/* ===== STATS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-10"
          >
            {[
              { value: 25, suffix: "+", label: "Years" },
              { value: 45, suffix: "+", label: "Projects" },
              { value: 3000, suffix: "+", label: "Families" },
              { value: 5, suffix: "", label: "Corridors" },
            ].map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-md bg-white/5 border border-white/10 py-8 px-4"
              >
                <p className="text-6xl sm:text-7xl font-heading gold-gradient-text">
                  <Counter end={item.value} suffix={item.suffix} />
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-4">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

    {/* ================= LUXURY MD SECTION ================= */}
<section className="py-28 px-6 bg-[#071521]">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

    {/* ===== LEFT IMAGE WITH GOLD FRAME ===== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative flex justify-center items-center"
>
  {/* Outer Gold Frame */}
  <div className="border border-[#c6a14a] p-[2px]">

    {/* Inner Frame */}
    <div className="bg-[#071521] p-3">

    <motion.img
  src={mdPortrait}
  alt="Managing Director"
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
  className="
    w-auto
    max-h-[70vh]
    object-cover
    shadow-2xl
  "
/>

    </div>
  </div>
</motion.div>

    {/* ===== RIGHT CONTENT ===== */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-gray-300"
    >

      <p className="text-sm tracking-[0.4em] text-[#c6a14a] mb-6">
        MANAGING DIRECTOR
      </p>

      <h2 className="font-serif text-5xl text-white mb-4">
        Mr R.R. SAKTHI PRASANA
      </h2>

      <p className="text-sm tracking-[0.3em] text-gray-400 mb-10">
        FOUNDER & VISIONARY LEADER
      </p>

      <div className="space-y-6 leading-relaxed text-gray-400">
        <p>
          With over 25 years of expertise in land and layout development,
          Mr. Sakthi Prasanna has built RSP Developers Ltd into one of the
          most trusted names in the Tiruvannamalai region. His vision of
          creating premium, well-planned residential layouts has transformed
          the landscape of Chetpet and surrounding areas.
        </p>

        <p>
          Under his leadership, RSP Developers has successfully delivered
          45+ projects, earning the trust of thousands of families.
          Every project reflects his commitment to quality, transparency,
          and customer satisfaction.
        </p>
      </div>

    </motion.div>

  </div>
</section>
      {/* ================= VISION & MISSION ================= */}
      <section className="py-28 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            { icon: Eye, title: "Our Vision", text: "To become the most trusted land development brand delivering sustainable and high-value communities." },
            { icon: Target, title: "Our Mission", text: "To provide legally secure, premium and high-appreciation investment opportunities." },
            { icon: Landmark, title: "Our Foundation", text: "Integrity, transparency and long-term relationships define our journey." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-10 border border-border bg-background shadow-xl hover:shadow-2xl transition"
            >
              <item.icon size={48} className="mx-auto mb-6 text-primary" />
              <h3 className="font-heading text-xl mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-5xl gold-gradient-text mb-20">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: "DTCP & RERA Approved", text: "Fully compliant projects ensuring secure investments." },
              { icon: FileCheck, title: "Clear Title", text: "Verified documentation and transparent ownership." },
              { icon: Smile, title: "Customer Satisfaction", text: "Trusted by thousands of families." },
              { icon: Award, title: "25+ Years Experience", text: "A legacy built on consistency and growth." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-background border border-border hover:shadow-[0_0_25px_rgba(255,215,120,0.2)] transition-all"
              >
                <item.icon size={44} className="mx-auto mb-6 text-primary" />
                <h3 className="font-heading text-lg mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default About;