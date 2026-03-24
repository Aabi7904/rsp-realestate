import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <>
  <Helmet>
      <title>RSP Developers Ltd | Premium DTCP Plots in Chetpet & Tiruvannamalai</title>
      <meta name="description" content="Invest in your future with RSP Developers Ltd. Offering premium, DTCP & RERA approved residential plots in Chetpet and Tiruvannamalai. 25+ years of trusted legacy." />
      <meta name="keywords" content="RSP Developers, plots in Chetpet, land in Tiruvannamalai, DTCP approved plots, residential layouts Chetpet, real estate investment" />
    </Helmet>
    <HeroSection />
    <ProjectShowcase />
    <StatsSection />
    <CTASection />
  </>
);

export default Index;
