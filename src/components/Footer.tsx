import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
                John Doe
              </h3>
              <p className="text-muted-foreground mb-4">
                Full-stack developer passionate about creating beautiful, 
                functional digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Services</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">Web Development</p>
                <p className="text-muted-foreground">UI/UX Design</p>
                <p className="text-muted-foreground">Technical Consulting</p>
                <p className="text-muted-foreground">Code Reviews</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by John Doe • © 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;