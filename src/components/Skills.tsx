
import { Code, Database, Laptop, Smartphone, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Laptop className="h-6 w-6" />,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"]
  },
  {
    title: "Backend Development",
    icon: <Database className="h-6 w-6" />,
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"]
  },
  {
    title: "DevOps & Tools",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Cypress"]
  },
  {
    title: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: ["REST API", "GraphQL", "WebSockets", "OAuth", "PWA", "Web Accessibility"]
  },
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C#"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary"></div>
            <span className="text-primary font-medium">MY SKILLS</span>
            <div className="h-px w-6 bg-primary"></div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">What I Do</h2>
          <div className="h-1 w-16 bg-primary/30 rounded-full"></div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-6">
            A collection of technologies and tools I've worked with throughout my journey as a developer.
            My expertise spans across frontend, backend, and various development tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-card rounded-lg p-6 shadow-sm border",
                "hover:shadow-md transition-all duration-300 hover:-translate-y-1",
                "group"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
