import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Bayan Bayrakdar - Biomedical Engineer Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional portfolio of Bayan Bayrakdar, a dedicated biomedical engineer specializing in AI, signal processing, and medical device innovation.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional portfolio of Bayan Bayrakdar, a dedicated biomedical engineer specializing in AI, signal processing, and medical device innovation.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container-max px-4">
          <div className="text-center">
            <p>&copy; 2024 Bayan Bayrakdar. All rights reserved.</p>
            <p className="text-sm mt-2">Biomedical Engineer | AI Specialist | Innovation in Healthcare Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
