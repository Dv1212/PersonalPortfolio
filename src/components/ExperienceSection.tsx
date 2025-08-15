const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI Intelligence Intern",
      company: "Dream11",
      location: "Mumbai, Maharashtra",
      period: "July 2025 – Present",
      description: [
        "Built 2 AI-powered MVPs collaborating with Product Management team, including Team Creation Assistant Bot",
        "Automated 70% of manual workflows using APIs, web scraping, and n8n, accelerating product iteration by 40%",
        "Led end-to-end development from requirement gathering to deployment using full-stack technologies"
      ],
      type: "work"
    },
    {
      title: "Trainee Intern",
      company: "Larsen & Toubro",
      location: "Mumbai, Maharashtra",
      period: "May 2025 – July 2025",
      description: [
        "Designed electrical circuits and schematics using E3 Zuken, created Digital Twins for system simulation",
        "Performed 6+ hardware validation tests using GATE equipment, optimized component sourcing processes"
      ],
      type: "work"
    },
    {
      title: "Database Engineering Research Intern",
      company: "E=MC2 LAB@VJTI",
      location: "Mumbai, Maharashtra",
      period: "May 2024 – July 2024",
      description: [
        "Developed advanced SQL and NoSQL queries in MySQL and MongoDB, solved 50+ LeetCode SQL challenges",
        "Applied data-driven analysis techniques for complex dataset interpretation and decision support"
      ],
      type: "work"
    },
    {
      title: "Subject Mentor",
      company: "UnchaAi",
      location: "Mumbai, Maharashtra",
      period: "November 2022 – June 2023",
      description: [
        "Mentored 10+ JEE Mains students in mathematics and physics, improving average performance by 25%"
      ],
      type: "work"
    },
    {
      title: "Bachelor of Technology in Electrical Engineering",
      company: "Veermata Jijabai Technological Institute (VJTI)",
      location: "Mumbai, Maharashtra",
      period: "2022 – 2026",
      description: [
        "CGPA: 7.70",
        "CFA Institute Program Level I Candidate",
        "Focus: Portfolio Management, Derivatives, Fixed Income, Quantitative Methods"
      ],
      type: "education"
    }
  ];

  const leadership = [
    {
      title: "President",
      organization: "Finance and Consulting Club of VJTI",
      period: "2024 – Present",
      description: "Lead strategic initiatives promoting financial literacy among 500+ students, organized industry workshops"
    },
    {
      title: "Marketing Head",
      organization: "Pratibimb Cultural Committee, VJTI",
      period: "2024 – Present",
      description: "Increased event participation by 30% through strategic marketing campaigns and social media management"
    },
    {
      title: "Department Head",
      organization: "Entrepreneurship Cell, VJTI",
      period: "2023 – 2024",
      description: "Led team formation and inter-college networking, participated in Pitch Wars with 'Gear Up' startup concept"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey through AI/ML development, business analysis, 
            and leadership roles.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start space-x-6 animate-fade-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-4 h-4 rounded-full ${
                    exp.type === 'work' ? 'bg-primary' : 'bg-secondary'
                  } flex-shrink-0 mt-2`}>
                    <div className="absolute inset-0 rounded-full animate-glow"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 glass-card p-6 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <span className="text-sm font-medium px-3 py-1 bg-primary/20 text-primary rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Leadership & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-primary font-semibold mb-2">{item.organization}</p>
                <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;