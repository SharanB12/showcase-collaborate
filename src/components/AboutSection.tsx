import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="bg-gradient-accent bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating 
                digital solutions that bridge the gap between design and functionality. 
                I specialize in React, Node.js, and modern web technologies.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community through blog posts and mentoring.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Frontend Development</h3>
                  <p className="text-muted-foreground">
                    Creating responsive, interactive user interfaces with React, TypeScript, 
                    and modern CSS frameworks like Tailwind CSS.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Backend Development</h3>
                  <p className="text-muted-foreground">
                    Building scalable APIs and server-side applications using Node.js, 
                    Express, and various database technologies.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    Designing intuitive, user-centered interfaces with attention to 
                    accessibility, usability, and visual appeal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;