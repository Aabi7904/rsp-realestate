import { useState, useRef, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Download,
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
  ZoomIn,
  ZoomOut,
  Maximize2,
  Move,
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

// ── Zoomable Layout Map Component ──────────────────────────────────────────
const ZoomableLayoutMap = ({ src, alt }: { src: string; alt: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastTranslate, setLastTranslate] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const MIN_SCALE = 0.5;
  const MAX_SCALE = 5;

  const clampTranslate = useCallback(
    (tx: number, ty: number, currentScale: number) => {
      const container = containerRef.current;
      if (!container) return { x: tx, y: ty };
      const { width, height } = container.getBoundingClientRect();
      const maxX = (width * (currentScale - 1)) / 2;
      const maxY = (height * (currentScale - 1)) / 2;
      return {
        x: Math.max(-maxX, Math.min(maxX, tx)),
        y: Math.max(-maxY, Math.min(maxY, ty)),
      };
    },
    []
  );

  const handleZoomIn = () => {
    const newScale = Math.min(scale + 0.5, MAX_SCALE);
    const clamped = clampTranslate(translate.x, translate.y, newScale);
    setScale(newScale);
    setTranslate(clamped);
  };

  const handleZoomOut = () => {
    const newScale = Math.max(scale - 0.5, MIN_SCALE);
    const clamped = clampTranslate(translate.x, translate.y, newScale);
    setScale(newScale);
    setTranslate(clamped);
    if (newScale <= 1) setTranslate({ x: 0, y: 0 });
  };

  const handleReset = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setLastTranslate(translate);
    e.preventDefault();
  };

  const DRAG_DAMPING = 0.2;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = (e.clientX - dragStart.x) * DRAG_DAMPING;
    const dy = (e.clientY - dragStart.y) * DRAG_DAMPING;
    const clamped = clampTranslate(lastTranslate.x + dx, lastTranslate.y + dy, scale);
    setTranslate(clamped);
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch drag
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const lastTouchDistRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setLastTranslate(translate);
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastTouchDistRef.current = Math.sqrt(dx * dx + dy * dy);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 1 && touchStartRef.current && scale > 1) {
      const dx = (e.touches[0].clientX - touchStartRef.current.x) * DRAG_DAMPING;
      const dy = (e.touches[0].clientY - touchStartRef.current.y) * DRAG_DAMPING;
      const clamped = clampTranslate(lastTranslate.x + dx, lastTranslate.y + dy, scale);
      setTranslate(clamped);
    } else if (e.touches.length === 2 && lastTouchDistRef.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const delta = dist - lastTouchDistRef.current;
      lastTouchDistRef.current = dist;
      const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale + delta * 0.005));
      const clamped = clampTranslate(translate.x, translate.y, newScale);
      setScale(newScale);
      setTranslate(clamped);
    }
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale + delta));
    const clamped = clampTranslate(translate.x, translate.y, newScale);
    setScale(newScale);
    setTranslate(clamped);
    if (newScale <= 1) setTranslate({ x: 0, y: 0 });
  };

  const mapContent = (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${
        isFullscreen
          ? "fixed inset-0 z-50 bg-background flex items-center justify-center"
          : "w-full"
      }`}
      style={{ touchAction: "none" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => { touchStartRef.current = null; lastTouchDistRef.current = null; }}
      onWheel={handleWheel}
    >
      {/* Controls Bar */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
          className="w-9 h-9 bg-black/80 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300 backdrop-blur-sm"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
          className="w-9 h-9 bg-black/80 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300 backdrop-blur-sm"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); handleReset(); }}
          className="w-9 h-9 bg-black/80 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300 backdrop-blur-sm text-[10px] font-bold"
          title="Reset"
        >
          1:1
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setIsFullscreen((v) => !v); handleReset(); }}
          className="w-9 h-9 bg-black/80 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300 backdrop-blur-sm"
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          {isFullscreen ? <X className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Scale Indicator */}
      <div className="absolute bottom-3 left-3 z-10 px-3 py-1 bg-black/80 border border-primary/30 text-primary text-[10px] font-body uppercase tracking-wider backdrop-blur-sm">
        {Math.round(scale * 100)}%
      </div>

      {/* Drag hint */}
      {scale > 1 && (
        <div className="absolute bottom-3 right-3 z-10 px-3 py-1 bg-black/80 border border-primary/30 text-muted-foreground text-[10px] font-body flex items-center gap-1 backdrop-blur-sm">
          <Move className="w-3 h-3 text-primary" /> Drag to pan
        </div>
      )}

      {/* Image */}
      <div
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
          transformOrigin: "center center",
          transition: isDragging ? "none" : "transform 0.15s ease-out",
          cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
        }}
      >
        <img
          src={src}
          alt={alt}
          className={`block w-full object-contain pointer-events-none ${
            isFullscreen ? "max-h-screen max-w-screen" : ""
          }`}
          draggable={false}
        />
      </div>

      {/* Fullscreen close hint */}
      {isFullscreen && (
        <div className="absolute top-3 left-3 z-10 px-3 py-2 bg-black/80 border border-primary/30 text-primary text-[10px] font-body uppercase tracking-wider backdrop-blur-sm flex items-center gap-2">
          <Maximize2 className="w-3 h-3" /> Fullscreen — scroll to zoom · drag to pan
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Main container */}
      <div className="gold-border p-2 overflow-hidden relative">
        {/* Instruction banner */}
        <div className="flex items-center gap-3 px-5 py-3 mb-2 bg-primary/10 border-b border-primary/30">
          <ZoomIn className="w-4 h-4 text-primary shrink-0" />
          <p className="font-body text-xs sm:text-sm text-primary font-semibold tracking-wide">
            Scroll or pinch to zoom · Click & drag to pan · Use controls →
          </p>
        </div>
        {mapContent}
      </div>

      {/* Fullscreen portal rendered via state — already fixed/inset above */}
    </>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────
const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.id === slug);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  if (!project) {
    return (
      
      <section className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 pt-32">
        <h1 className="font-heading text-4xl text-foreground">Project Not Found</h1>
        <Link to="/" className="gold-border px-6 py-3 font-body text-xs uppercase tracking-royal text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500">
          Back to Home
        </Link>
      </section>
    );
  }

  const galleryImages = project.galleryImages.map((k) => imageMap[k]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <>
    <Helmet>
  <title>{project.name} | Premium Plots by RSP Developers</title>
  <meta name="description" content={`Explore ${project.name}, a premium DTCP approved residential layout by RSP Developers. Located at ${project.address}. Secure your legacy today.`} />
</Helmet>
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
            <span className="mb-6 px-5 py-2 bg-black/80 text-primary border border-primary/40 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full shadow-xl backdrop-blur-md inline-block">
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

      {/* ── Layout Map (Zoomable & Pannable) ── */}
      <section className="py-24 px-6 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">Master Plan</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">Project Layout</h2>
            <div className="gold-divider max-w-[80px] mx-auto" />
          </motion.div>

          <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <ZoomableLayoutMap
              src={imageMap[project.layoutImage]}
              alt={`${project.name} Layout`}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Project Video ── */}
      {project.video && (
        <section className="py-24 px-6 border-b border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-xs uppercase text-primary mb-2">Walkthrough</p>
              <h2 className="text-2xl font-bold">Project Video</h2>
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
          <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">About the Project</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">Project Overview</h2>
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
                <p className="font-body text-[10px] uppercase tracking-royal text-muted-foreground mb-2">{item.label}</p>
                <p className="font-heading text-lg sm:text-xl text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {project.reraNumber && (
            <motion.p variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mt-8 font-body text-xs text-muted-foreground">
              RERA No: <span className="text-primary">{project.reraNumber}</span>
            </motion.p>
          )}
        </div>
      </section>

      {/* ── Amenities ── */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">Features</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">Project Amenities</h2>
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
                  <p className="font-body text-xs uppercase tracking-royal text-foreground">{amenity.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">Where We Are</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">Project Location</h2>
            <div className="gold-divider max-w-[80px] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="gold-border p-2">
                <iframe
                  src={project.mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.8)" }}
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

      {/* ── Gallery ── */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">Visual Tour</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">Project Gallery</h2>
            <div className="gold-divider max-w-[80px] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                variants={anim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden cursor-pointer group gold-border-hover"
                onClick={() => setLightboxIdx(i)}
              >
                <img
                  src={src}
                  alt={`${project.name} gallery ${i + 1}`}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-body text-xs uppercase tracking-royal text-primary">View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry ── */}
      <section id="enquiry" className="py-24 px-6 section-navy">
        <div className="container mx-auto max-w-3xl">
          <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">Interested?</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">Book a Site Visit</h2>
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

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setLightboxIdx(null)}>
            <X className="w-6 h-6" />
          </button>

          {lightboxIdx >= 0 && (
            <>
              <button
                className="absolute left-4 sm:left-8 text-foreground hover:text-primary transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + galleryImages.length) % galleryImages.length); }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                className="absolute right-4 sm:right-8 text-foreground hover:text-primary transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % galleryImages.length); }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <img
            src={lightboxIdx === -1 ? imageMap[project.image] : galleryImages[lightboxIdx]}
            alt={project.name}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProjectDetail;