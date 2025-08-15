import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom text-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Dhruv</span>{" "}
            <span className="text-foreground">Viras</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
            <span className="gradient-text-secondary">AI/ML Developer</span> & 
            <span className="text-foreground"> Business Analyst</span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Business Development and Finance enthusiast with expertise in AI applications, 
            consulting, and data analytics. Transforming ideas into intelligent solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToProjects}
              className="text-lg px-8 py-6"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-4">
              <Button variant="glass" size="icon" className="hover-lift">
                <a href="mailto:dkviras.b22@ee.vjti.ac.in" className="flex items-center justify-center w-full h-full">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="glass" size="icon" className="hover-lift">
                <a href="https://linkedin.com/in/dhruv-viras" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="glass" size="icon" className="hover-lift">
                <a href="https://github.com/dhruv-viras" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;