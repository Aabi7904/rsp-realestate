import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
  X,
  Route,
  Droplets,
  Zap,
  TreePine,
  Lamp,
  ShieldCheck,
  ParkingCircle,
  Waves,
  LayoutGrid,
  CheckCircle2,
  List,
} from "lucide-react";
import { projects } from "@/data/projects";
import { toast } from "sonner";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import laxmigarden3 from "@/assets/laxmi-gardern-3.jpeg";
import happyhome from "@/assets/happy home.png";
import sivasakthinagar from "@/assets/sivasakthi-nagar.jpeg";
import sairamnagar from "@/assets/sairam-nagar.jpeg";
import balajinagar from "@/assets/balaji nagar.png";
import pournaminagar from "@/assets/pournami-nagar.jpeg";
import anandamnagar from "@/assets/anandam nagar.png";
import udhayamnagar from "@/assets/udhayam nagar.png";
import srinivasanagar from "@/assets/srinivasa nagar.png";
import maruthinagar from "@/assets/maruthi-nagar.jpeg";
import renukanagar from "@/assets/renugambal-nagar.jpeg";
import laxmigarden from "@/assets/laxmi-gardern.jpeg";
import laxminagar from "@/assets/laxmi nagar.png";
import maruthinagar2 from "@/assets/maruthi nagar extended.png";
import dhanasrinagar from "@/assets/dhana-sri-nagar.png";
import thulasivanam from "@/assets/tulasi-vanam.jpeg";

import dhanasrinagarplots from "@/assets/dhanasri-nagar-plots.jpg";
import lakshmigardernplots from "@/assets/lakshmi-gardern-plots.jpg";
import sivasakthinagarplots from "@/assets/sivasakthi-nagar-plots.jpg";
import happyhomeplots from "@/assets/happy-home-plots.jpg";
import lakshmigardern3plots from "@/assets/lakshmi-gardern3-plots.jpg";
import balajinagarplots from "@/assets/balaji-nagar-plots.jpg";
import srinivasanagarplots from "@/assets/srinivasa-nagar-plots.jpg";
import lakshminagarplots from "@/assets/lakshmi-nagar-plots.jpg";
import udhayamnagarplots from "@/assets/udhayam-nagar-plots.jpg";
import pournaminagarplots from "@/assets/pournami-nagar-plots.jpg";
import sairamnagarplots from "@/assets/sairam-nagar-plots.jpg";
import anandhamnagarplots from "@/assets/anandham-nagar-plots.jpg";
import thulasivanamplots from "@/assets/thulasi-vanam-plots.jpg";
import renugambalnagarplots from "@/assets/renugambal-nagar-plots.jpg";
import maruthinagarplots from "@/assets/maruthi-nagar-plots.jpg";


const imageMap: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
  "project-4": project4,
  "laxmi-garden-3": laxmigarden3,
  "happy-home": happyhome,
  "sivasakthi-nagar": sivasakthinagar,
  "sairam-nagar": sairamnagar,
  "dhana-shri-nagar": dhanasrinagar,
  "balaji-nagar": balajinagar,
  "pournami-nagar": pournaminagar,
  "anandam-nagar": anandamnagar,
  "udhayam-nagar": udhayamnagar,
  "srinivasa-nagar": srinivasanagar,
  "tulasi-vanam": thulasivanam,
  "maruthi-nagar": maruthinagar,
  "renuka-nagar": renukanagar,
  "laxmi-garden": laxmigarden,
  "laxmi-nagar": laxminagar,
  "maruthi-nagar-extended": maruthinagar2,

  "dhanasri-nagar-plots": dhanasrinagarplots,
  "lakshmi-gardern-plots": lakshmigardernplots,
  "sivasakthi-nagar-plots": sivasakthinagarplots,
  "happy-home-plots": happyhomeplots,
  "lakshmi-gardern3-plots": lakshmigardern3plots,
  "balaji-nagar-plots": balajinagarplots,
  "srinivasa-nagar-plots": srinivasanagarplots,
  "lakshmi-nagar-plots": lakshminagarplots,
  "udhayam-nagar-plots": udhayamnagarplots,
  "anandham-nagar-plots": anandhamnagarplots,
  "pournami-nagar-plots": pournaminagarplots,
  "sairam-nagar-plots": sairamnagarplots,
  "thulasi-vanam-plots": thulasivanamplots,
  "renugambal-nagar-plots": renugambalnagarplots,
  "maruthi-nagar-plots": maruthinagarplots,


  
};

const iconMap: Record<string, React.ElementType> = {
  Road: Route,
  Droplets,
  Zap,
  TreePine,
  Lamp,
  ShieldCheck,
  ParkingCircle,
  Waves,
};

const anim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ── Simple Fullscreen Zoom Viewer ─────────────────────────────────────────────
interface ZoomViewerProps {
  src: string;
  onClose: () => void;
}

const ZoomViewer: React.FC<ZoomViewerProps> = ({ src, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black flex flex-col"
      style={{ touchAction: "auto" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-3 z-10 flex-shrink-0"
        style={{ background: "rgba(0,0,0,0.75)" }}
      >
        <span className="text-white/40 text-[11px] uppercase tracking-widest select-none">
          Pinch / scroll to zoom
        </span>
        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white border border-white/25 rounded-full px-4 py-2 text-xs font-medium transition-colors"
        >
          <X className="w-4 h-4" />
          Close
        </button>
      </div>

      {/* Scrollable / pinch-zoomable image area */}
      <div
        className="flex-1 overflow-auto"
        style={{ touchAction: "pan-x pan-y pinch-zoom" }}
      >
        <img
          src={src}
          alt=""
          draggable={false}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        />
      </div>

      {/* Bottom bar — easy thumb access */}
      <div
        className="flex items-center justify-center py-4 flex-shrink-0"
        style={{ background: "rgba(0,0,0,0.75)" }}
      >
        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white border border-white/25 rounded-full px-8 py-3 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Project
        </button>
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((p) => p.id === slug);
  const project = projects[currentIndex];

  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [lightboxType, setLightboxType] = useState<"gallery" | "layout" | "plotList" | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [touchingMap, setTouchingMap] = useState(false);

  // ── Scroll to top whenever the slug (project) changes ──
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 pt-32">
        <h1 className="font-heading text-4xl text-foreground">Project Not Found</h1>
        <Link
          to="/"
          className="gold-border px-6 py-3 font-body text-xs uppercase tracking-royal text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Back to Home
        </Link>
      </section>
    );
  }

  const galleryImages = project.galleryImages.map((k) => imageMap[k]);
  const plotListImage = project.plotListImage
    ? imageMap[project.plotListImage] ?? project.plotListImage
    : null;

  const layoutSrc = imageMap[project.layoutImage];

  const handleSwipe = (_: any, info: any) => {
    if (touchingMap) return;
    if (info.offset.x < -50 && nextProject) {
      window.scrollTo({ top: 0, behavior: "instant" });
      navigate(`/projects/${nextProject.id}`);
    } else if (info.offset.x > 50 && prevProject) {
      window.scrollTo({ top: 0, behavior: "instant" });
      navigate(`/projects/${prevProject.id}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  const openLightbox = (type: "gallery" | "layout" | "plotList", idx = 0) => {
    setLightboxType(type);
    setLightboxIdx(idx);
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
    setLightboxType(null);
  };

  const getLightboxSrc = () => {
    if (lightboxType === "layout") return layoutSrc;
    if (lightboxType === "plotList") return plotListImage ?? "";
    if (lightboxType === "gallery" && lightboxIdx !== null) return galleryImages[lightboxIdx];
    return "";
  };

  const isZoomViewer =
    lightboxIdx !== null &&
    (lightboxType === "layout" || lightboxType === "plotList");

  return (
    <motion.div
      key={slug}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleSwipe}
      className="overflow-x-hidden touch-none"
    >
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={imageMap[project.image]}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="absolute inset-4 border border-primary/10 pointer-events-none" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            {/* ── Road name badge — bold, large, clearly visible ── */}
            <span className="mb-6 px-6 py-3 bg-black/85 text-primary border-2 border-primary/70 text-base sm:text-lg font-extrabold rounded-full shadow-2xl backdrop-blur-md inline-block tracking-wide">
              {project.road}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl text-foreground mb-4 drop-shadow-2xl"
          >
            {project.name}
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <div className="gold-divider max-w-[100px] mx-auto mb-6" />
            <p className="font-body text-sm text-primary flex items-center justify-center gap-2 mb-10 font-medium tracking-wide">
              <MapPin className="w-4 h-4" />
              {project.address}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex justify-center"
          >
            <a
              href="#enquiry"
              className="px-10 py-4 font-body text-xs uppercase tracking-ultra bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.4)] gold-shimmer"
            >
              Enquire Now
            </a>
          </motion.div>
        </div>
        <Link
          to="/"
          className="absolute top-28 left-6 sm:left-10 z-10 flex items-center gap-2 font-body text-xs uppercase tracking-royal text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </section>

      {/* ... inside ProjectDetail component ... */}

{/* ── Layout Map Section ── */}
<section className="py-24 px-6 border-b border-border">
  <div className="container mx-auto max-w-5xl">
    <motion.div
      variants={anim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">Master Plan</p>
      <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">Project Layout</h2>
      <div className="gold-divider max-w-[80px] mx-auto" />
    </motion.div>

    <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <div
        className="gold-border p-2 cursor-pointer group"
        onClick={() => openLightbox("layout")}
      >
        <img
          src={layoutSrc}
          alt={`${project.name} Layout`}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <p className="text-center mt-3 font-body text-[10px] text-muted-foreground uppercase tracking-widest">
        Tap to open &amp; zoom
      </p>
    </motion.div>

    {/* ── Available Plots List ── */}
    {plotListImage && (
      <motion.div
        variants={anim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-20 border-t border-border/40 pt-16"
      >
        <div className="text-center mb-10">
          <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4 flex items-center justify-center gap-2">
            <List className="w-4 h-4" />
            Plot Availability
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl text-foreground mb-4">
            Available Plots List
          </h3>
          <div className="gold-divider max-w-[60px] mx-auto mb-4" />
          <p className="font-body text-xs text-muted-foreground">Tap to open &amp; zoom</p>
        </div>
        <div
          className="gold-border p-2 cursor-pointer group relative overflow-hidden"
          onClick={() => openLightbox("plotList")}
        >
          <div className="absolute inset-2 z-10 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 flex items-center justify-center pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 text-primary border border-primary/50 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full backdrop-blur-sm">
              View Full Size
            </span>
          </div>
          <img
            src={plotListImage}
            alt={`${project.name} Available Plots`}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#enquiry"
            className="px-8 py-3 font-body text-xs uppercase tracking-ultra bg-primary text-black font-bold rounded-full hover:bg-white transition-all duration-500 shadow-[0_0_16px_rgba(212,175,55,0.35)] gold-shimmer"
          >
            Book Your Plot
          </a>
          <a
            href="tel:9443355212"
            className="inline-flex items-center gap-2 px-8 py-3 font-body text-xs uppercase tracking-ultra border border-border/60 text-muted-foreground hover:border-primary hover:text-primary rounded-full transition-all duration-500"
          >
            <Phone className="w-3.5 h-3.5" /> Call: 9443355212
          </a>
        </div>
      </motion.div>
    )}

    {/* ── Prev / Next (Moved here below plot list) ── */}
    <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-border/40 pt-12">
      {prevProject ? (
        <Link
          to={`/projects/${prevProject.id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          className="group flex items-center gap-6 p-8 bg-secondary/20 border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-500"
        >
          <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
            <ChevronLeft className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold mb-1">
              Previous Project
            </span>
            <span className="text-xl font-heading text-foreground group-hover:translate-x-1 transition-transform">
              {prevProject.name}
            </span>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {nextProject ? (
        <Link
          to={`/projects/${nextProject.id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          className="group flex items-center justify-end text-right gap-6 p-8 bg-secondary/20 border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-500"
        >
          <div className="flex flex-col order-2 sm:order-1">
            <span className="text-[11px] uppercase tracking-[0.2em] text-primary font-bold mb-1">
              Next Project
            </span>
            <span className="text-xl font-heading text-foreground group-hover:-translate-x-1 transition-transform">
              {nextProject.name}
            </span>
          </div>
          <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all order-1 sm:order-2">
            <ChevronRight className="w-6 h-6" />
          </div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  </div>
</section>

          
      

      {/* ── Project Video ── */}
      {project.video && (
        <section className="py-24 px-6 border-b border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-xs uppercase text-primary mb-2">Walkthrough</p>
              <h2 className="text-2xl font-bold text-foreground">Project Video</h2>
            </div>
            <div className="flex justify-center">
              <div className="max-h-[80vh] aspect-[9/16] gold-border p-2">
                <video
                  src={project.video}
                  controls
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── About ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={anim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">
              About the Project
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">
              Project Overview
            </h2>
            <div className="gold-divider max-w-[80px] mx-auto mb-8" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {project.aboutText}
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Total Land Area", value: project.totalArea, icon: LayoutGrid },
              { label: "Number of Plots", value: `${project.plots} Plots`, icon: CheckCircle2 },
              { label: "Plot Sizes", value: project.plotSizes, icon: LayoutGrid },
              { label: "Project Status", value: project.status, icon: CheckCircle2 },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={anim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 text-center"
              >
                <item.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-body text-[10px] uppercase tracking-royal text-muted-foreground mb-2">
                  {item.label}
                </p>
                <p className="font-heading text-lg sm:text-xl text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>
          {project.reraNumber && (
            <motion.p
              variants={anim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mt-8 font-body text-xs text-muted-foreground"
            >
              RERA No: <span className="text-primary">{project.reraNumber}</span>
            </motion.p>
          )}
        </div>
      </section>

      {/* ── Amenities ── */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={anim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">Features</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">
              Project Amenities
            </h2>
            <div className="gold-divider max-w-[80px] mx-auto" />
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {project.amenities.map((amenity, i) => {
              const Icon = iconMap[amenity.icon] || CheckCircle2;
              return (
                <motion.div
                  key={amenity.name}
                  variants={anim}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="gold-border-hover p-6 text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 gold-border flex items-center justify-center group-hover:border-primary transition-colors duration-500">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-body text-xs uppercase tracking-royal text-foreground">
                    {amenity.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            variants={anim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">
              Where We Are
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">
              Project Location
            </h2>
            <div className="gold-divider max-w-[80px] mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div
                className="gold-border p-2 touch-auto"
                onTouchStart={(e) => {
                  setTouchingMap(true);
                  e.stopPropagation();
                }}
                onTouchEnd={() => setTouchingMap(false)}
              >
                <iframe
                  src={project.mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{
                    border: 0,
                    filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.8)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${project.name} Location`}
                />
              </div>
              <p className="font-body text-sm text-primary mt-4 flex items-start gap-2 font-medium">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {project.address}
              </p>
            </motion.div>
            <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="font-heading text-xl text-foreground mb-6">Nearby Landmarks</h3>
              <div className="gold-divider max-w-[40px] mb-8" />
              <ul className="space-y-4">
                {project.landmarks.map((lm) => (
                  <li key={lm} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-muted-foreground">{lm}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Enquiry ── */}
      <section id="enquiry" className="py-24 px-6 section-navy">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            variants={anim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">
              Interested?
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">
              Book a Site Visit
            </h2>
            <div className="gold-divider max-w-[80px] mx-auto" />
          </motion.div>
          <motion.form
            variants={anim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-panel p-8 sm:p-12 space-y-6"
          >
            {[
              { name: "name" as const, placeholder: "Your Name", type: "text" },
              { name: "phone" as const, placeholder: "Phone Number", type: "tel" },
              { name: "email" as const, placeholder: "Email Address", type: "email" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                value={form[field.name]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="w-full bg-transparent border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
              />
            ))}
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
            />
            <button
              type="submit"
              className="w-full gold-border py-4 font-body text-xs uppercase tracking-ultra text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground gold-shimmer"
            >
              Submit Enquiry
            </button>
          </motion.form>
          <div className="text-center mt-8">
            <a
              href="tel:9443355212"
              className="inline-flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" /> Or call us: 9443355212
            </a>
          </div>
        </div>
      </section>

      {/* ── Gallery Lightbox ── */}
      {lightboxIdx !== null && lightboxType === "gallery" && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 sm:left-8 text-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 sm:right-8 text-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx + 1) % galleryImages.length);
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[lightboxIdx]}
            alt={project.name}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── Fullscreen Zoom Viewer (layout & plotList) ── */}
      {isZoomViewer && (
        <ZoomViewer src={getLightboxSrc()} onClose={closeLightbox} />
      )}
    </motion.div>
  );
};

export default ProjectDetail;