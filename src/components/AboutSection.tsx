import { useState, useEffect } from "react";

const AboutSection = () => {
  const [visibleSkills, setVisibleSkills] = useState(0);
  
  const skills = [
    "AI/ML", "Python", "TensorFlow", "React", "TypeScript", "SQL", 
    "MongoDB", "Financial Modeling", "Data Analytics", "Business Development",
    "Product Management", "Consulting", "Team Leadership"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSkills(prev => prev < skills.length ? prev + 1 : prev);
    }, 150);

    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full glass-card p-2 hover-lift">
                <img 
                  src="/lovable-uploads/5f956ae4-ba19-4c02-a4b1-f56066e1fabd.png"
                  alt="Dhruv Viras - Professional Photo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                I'm a passionate <span className="text-foreground font-semibold">Business Development and Finance enthusiast</span> with 
                expertise in AI applications, consulting, and data analytics. Currently pursuing 
                Electrical Engineering at VJTI with a CGPA of 7.70.
              </p>
              
              <p>
                As an <span className="gradient-text-secondary font-semibold">AI Intelligence Intern at Dream11</span>, 
                I've built AI-powered MVPs and automated workflows, achieving 40% faster product iteration. 
                My experience spans from financial modeling to full-stack development.
              </p>
              
              <p>
                I lead strategic initiatives in the Finance and Consulting Club at VJTI, 
                promoting financial literacy among 500+ students and organizing industry workshops.
              </p>
            </div>

            {/* Animated Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.slice(0, visibleSkills).map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass-card text-sm font-medium hover-lift animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Students Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;