import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "IPL Runs Predictor",
      description: "Deep learning model achieving 85% accuracy in predicting IPL scores using TensorFlow/Keras with real-time prediction interface.",
      tech: ["Python", "TensorFlow", "Keras", "Streamlit", "Machine Learning"],
      github: "#",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "Traffic Control System",
      description: "Automated traffic management system with real-time monitoring and control capabilities using Arduino and LabVIEW integration.",
      tech: ["Arduino", "LabVIEW", "C++", "Hardware Integration"],
      github: "#",
      demo: "#",
      category: "IoT"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with interactive GUI using Python Tkinter and REST APIs for live weather data.",
      tech: ["Python", "Tkinter", "REST APIs", "GUI Development"],
      github: "#",
      demo: "#",
      category: "Web App"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Comprehensive dashboard for financial analysis with advanced modeling capabilities and data visualization.",
      tech: ["Excel", "Financial Modeling", "Pivot Tables", "Data Analysis"],
      github: "#",
      demo: "#",
      category: "Finance"
    },
    {
      title: "AI Team Creation Assistant",
      description: "AI-powered tool for optimal team formation using machine learning algorithms and collaborative filtering.",
      tech: ["Python", "APIs", "Web Scraping", "Machine Learning"],
      github: "#",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "Database Optimization Engine",
      description: "Advanced SQL and NoSQL query optimization tool with 50+ LeetCode challenges solved and performance metrics.",
      tech: ["MySQL", "MongoDB", "NoSQL", "Query Optimization"],
      github: "#",
      demo: "#",
      category: "Database"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-surface/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise across AI/ML, web development, 
            and financial analytics projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gradient" size="lg">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;