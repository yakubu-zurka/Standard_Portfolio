
import { Code, Database, Laptop, Smartphone, Globe, Cpu } from "lucide-react";

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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A collection of technologies and tools I've worked with throughout my journey as a developer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow transition-shadow border">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">{category.icon}</div>
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
