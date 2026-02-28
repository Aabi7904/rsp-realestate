import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects, roads, type Road } from "@/data/projects";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const imageMap: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
  "project-4": project4,
};

const ProjectShowcase = () => {
  const [activeRoad, setActiveRoad] = useState<Road>("ALL");
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const filtered = activeRoad === "ALL"
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
          Our Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6"
        >
          Imperial Projects
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
              <div
                key={project.id}
                id={project.id}
                data-project-card
                className={`group relative h-[400px] sm:h-[500px] overflow-hidden cursor-pointer transition-all duration-700 ${
                  visibleItems.has(project.id) ? "opacity-100" : "opacity-0 translate-y-8"
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
                  <span className="emerald-badge mb-6">{project.road}</span>

                  <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                    {project.name}
                  </h3>

                  <div className="gold-divider w-16 mb-4 transition-all duration-500 group-hover:w-24" />

                  <p className="font-body text-sm text-muted-foreground max-w-md mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-body text-xs uppercase tracking-royal opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    View Project <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Status badge */}
                <div className="absolute top-6 right-6">
                  <span className={`font-body text-[10px] uppercase tracking-royal px-3 py-1 ${
                    project.status === "Ongoing"
                      ? "bg-primary/20 text-primary"
                      : project.status === "Upcoming"
                        ? "bg-accent/20 text-emerald-light"
                        : "text-muted-foreground"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;
