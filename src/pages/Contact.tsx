import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "9443355212",
      href: "tel:9443355212",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sakthiprasannarsp@gmail.com",
      href: "mailto:sakthiprasannarsp@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chetpet, near Tiruvannamalai",
      href: "https://maps.app.goo.gl/xUdb718oSYZmjo6DA", // still fine for click
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon – Sat, 9AM – 6PM",
      href: undefined,
    },
  ];

  return (
    <>
    <Helmet>
  <title>Contact RSP Developers | Real Estate Office in Chetpet</title>
  <meta name="description" content="Get in touch with RSP Developers Ltd. Visit our office in Chetpet, near Tiruvannamalai, or call us at 9443355212 to book your premium plot today." />
</Helmet>
      {/* Hero */}
      <section className="section-navy min-h-[50vh] flex items-center justify-center text-center px-6 pt-32 pb-20">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-xs uppercase tracking-ultra text-primary mb-6"
          >
            Get in Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-5xl sm:text-7xl text-foreground mb-6"
          >
            Contact Us
          </motion.h1>

          <div className="gold-divider max-w-[100px] mx-auto" />
        </div>
      </section>

      {/* Main Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass-panel p-8 sm:p-12 space-y-6"
              >
                <h3 className="font-heading text-2xl text-foreground mb-2">
                  Send a Message
                </h3>

                <div className="gold-divider max-w-[40px] mb-8" />

                {[
                  { name: "name", placeholder: "Your Name", type: "text" },
                  { name: "phone", placeholder: "Phone Number", type: "tel" },
                  { name: "email", placeholder: "Email Address", type: "email" },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.name]}
                    onChange={(e) =>
                      setForm({ ...form, [field.name]: e.target.value })
                    }
                    className="w-full bg-transparent border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                  />
                ))}

                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-transparent border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                />

                <button
                  type="submit"
                  className="w-full gold-border py-4 font-body text-xs uppercase tracking-ultra text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground gold-shimmer"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 gold-border flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>

                    <div>
                      <p className="font-body text-xs uppercase tracking-royal text-muted-foreground mb-1">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="font-body text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-sm text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            {/* Map */}
<div className="gold-border p-2">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.736667293487!2d79.35359559999999!3d12.4672497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacd319de28427d%3A0xe82dd5704baedcc3!2sR%20S%20P%20Real%20estate!5e0!3m2!1sen!2sin!4v1774028454859!5m2!1sen!2sin"
    width="100%"
    height="350"
    style={{
      border: 0,
      filter:
        "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.8)",
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="RSP Developers Location"
  />
</div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;