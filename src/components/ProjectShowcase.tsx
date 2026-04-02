import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, roads, type Road } from "@/data/projects";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import dhanaSriNagar from "@/assets/dhana-sri-nagar.png";
import laxmigarden from "@/assets/laxmi garden.png";
import balajiNagar from "@/assets/balaji nagar.png";
import laxmigarden3 from "@/assets/laxmi garden 3.png";
import happyhome from "@/assets/happy home.png";
import sivasakthiNagar from "@/assets/sivasakthi nagar.png";
import pournamiNagar from "@/assets/pournami nagar.png";
import anandamnagar from "@/assets/anandam nagar.png";
import udhayamNagar from "@/assets/udhayam nagar.png";
import laxminagar from "@/assets/laxmi nagar.png";
import srinivasaNagar from "@/assets/srinivasa nagar.png";
import maruthiNagar from "@/assets/maruthi nagar.png";
import tulasivanam from "@/assets/tulasi vanam.png";
import sairamnagar from "@/assets/sairam nagar.png";
import maruthinagarextended from "@/assets/maruthi nagar extended.png";
import renukaNagar from "@/assets/renuka nagar.png";

const imageMap: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
  "project-4": project4,
  "dhana-shri-nagar": dhanaSriNagar,
  "laxmi-garden": laxmigarden,
  "balaji-nagar": balajiNagar,
  "laxmi-garden-3": laxmigarden3,
  "happy-home": happyhome,
  "sivasakthi-nagar": sivasakthiNagar,
  "pournami-nagar": pournamiNagar,
  "anandam-nagar": anandamnagar,
  "udhayam-nagar": udhayamNagar,
  "laxmi-nagar": laxminagar,
  "srinivasa-nagar": srinivasaNagar,
  "maruthi-nagar": maruthiNagar,
  "tulasi-vanam": tulasivanam,
  "sairam-nagar": sairamnagar,
  "maruthi-nagar-extended": maruthinagarextended,
  "renuka-nagar": renukaNagar,
};

const btnGoldShadow: React.CSSProperties = {
  boxShadow: "0 0 20px rgba(212,175,55,0.4)",
};

const ProjectShowcase = () => {
  const [activeRoad, setActiveRoad] = useState<Road | "ALL">("ALL");
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const filtered =
    activeRoad === "ALL"
      ? projects
      : projects.filter((p) => p.road === activeRoad);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-project-card]");
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [filtered]);

  return (
    <section id="projects" className="py-24 relative">
      {/* Section header */}
      <div className="text-center mb-16 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-xs uppercase tracking-ultra text-primary mb-4"
        >
          Explore Now
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6"
        >
          Our Projects
        </motion.h2>
        <div className="gold-divider max-w-[100px] mx-auto" />
      </div>

      {/* Royal filter bar */}
      <div className="mb-16 overflow-x-auto px-6">
        <div className="flex justify-center gap-4 sm:gap-8 min-w-max mx-auto">
          {roads.map((road) => (
            <button
              key={road}
              onClick={() => setActiveRoad(road)}
              className={`relative font-body text-[11px] sm:text-xs uppercase tracking-royal py-3 transition-all duration-500 whitespace-nowrap ${
                activeRoad === road
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {road}
              {activeRoad === road && (
                <motion.div
                  layoutId="activeRoad"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Project panels */}
      <div className="space-y-2 px-4 sm:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoad}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            {filtered.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                id={project.id}
                data-project-card
                className={`group relative block h-[400px] sm:h-[500px] overflow-hidden cursor-pointer transition-all duration-700 ${
                  visibleItems.has(project.id)
                    ? "opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Image */}
                <img
                  src={imageMap[project.image]}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all duration-700" />

                {/* Gold border on hover */}
                <div className="absolute inset-4 border border-transparent group-hover:border-primary/30 transition-all duration-700 pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  {/* Road name pill */}
                  <span className="mb-6 px-5 py-2 bg-black/80 text-primary border border-primary/40 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full shadow-xl backdrop-blur-md">
                    {project.road}
                  </span>

                  {/* Project name */}
                  <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-6 transition-transform duration-500 group-hover:-translate-y-2 drop-shadow-2xl">
                    {project.name}
                  </h3>

                  <div className="gold-divider w-16 mb-10 transition-all duration-500 group-hover:w-24" />

                  {/* View project button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <div
                      className="flex items-center gap-3 px-8 py-3.5 bg-primary text-black font-bold text-[11px] uppercase tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
                      style={btnGoldShadow}
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Status badge */}
                <div className="absolute top-6 right-6">
                  <span
                    className={`font-body text-[10px] uppercase tracking-royal px-3 py-1 ${
                      project.status === "Ongoing"
                        ? "bg-primary/20 text-primary"
                        : project.status === "Upcoming"
                        ? "bg-accent/20 text-emerald-light"
                        : "text-muted-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;