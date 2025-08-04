import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/70"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-muted-foreground mb-8 animate-fade-in-delay">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Crafting beautiful, functional, and user-centered digital experiences 
            with modern technologies and creative problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-3">
            <Button variant="hero" size="lg" onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
            <Button variant="glow" size="lg" onClick={() => scrollToSection('contact')}>
              Let's Connect
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-delay-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;