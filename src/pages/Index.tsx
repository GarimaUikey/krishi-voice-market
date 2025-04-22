
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TutorialSection from "@/components/TutorialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <TutorialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
