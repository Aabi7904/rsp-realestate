import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { projects } from "@/data/projects";
import { toast } from "sonner";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import laxmigarden3 from "@/assets/laxmi garden 3.png";
import happyhome from "@/assets/happy home.png";
import sivasakthinagar from "@/assets/sivasakthi nagar.png";
import sairamnagar from "@/assets/sairam nagar.png";

import balajinagar from "@/assets/balaji nagar.png";
import pournaminagar from "@/assets/pournami nagar.png";
import anandamnagar from "@/assets/anandam nagar.png";
import udhayamnagar from "@/assets/udhayam nagar.png";
import srinivasanagar from "@/assets/srinivasa nagar.png";
import maruthinagar from "@/assets/maruthi nagar.png";
import renukanagar from "@/assets/renuka nagar.png";
import laxmigarden from "@/assets/laxmi garden.png";
import laxminagar from "@/assets/laxmi nagar.png";
import maruthinagar2 from "@/assets/maruthi nagar extended.png";
import dhanasrinagar from "@/assets/dhana-sri-nagar.png";

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

      {/* ── Layout Map (Moved to First Position) ── */}
      <section className="py-24 px-6 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-ultra text-primary mb-4">Master Plan</p>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">Project Layout</h2>
            <div className="gold-divider max-w-[80px] mx-auto" />
          </motion.div>

          <motion.div variants={anim} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div
              className="gold-border p-2 cursor-pointer group"
              onClick={() => setLightboxIdx(-1)}
            >
              <img
                src={imageMap[project.layoutImage]}
                alt={`${project.name} Layout`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="text-center mt-6">
              <button className="gold-border px-8 py-4 font-body text-xs uppercase tracking-ultra text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 gold-shimmer inline-flex items-center gap-3">
                <Download className="w-4 h-4" /> Download Layout
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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