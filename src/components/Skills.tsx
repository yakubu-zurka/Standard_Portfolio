 import { Code, Database, Laptop, Smartphone, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Laptop className="h-6 w-6" />,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript","Bootstrap", "JQuery"]
  },
 {
  title: "Backend Development",
  icon: <Database className="h-6 w-6" />,
  skills: [
    "Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL",
    "RESTful APIs",   "JWT Authentication", "Redis",
    "Docker",   "Mongoose",  
    "CI/CD", "Testing (Jest, Mocha)"
  ]
},
   
  {
    title: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: ["REST API", "GraphQL", "WebSockets", "OAuth", " JWT", "Web Accessibility"]
  },
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["JavaScript", "Python", "Java", "SQL", "C++"]
  },

  {
    title: "Other Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: ["GitHub", "Git", "Canva", "Postman", "Hosting"  ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white  bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
       
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary"></div>
            <span className="text-primary font-medium tracking-wider">MY SKILLS</span>
            <div className="h-px w-6 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
            What I Do
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mt-6">
            A collection of technologies and tools I've worked with throughout my journey as a developer.
            My expertise spans across frontend, backend, and various development tools.
          </p>
        </div>
        
        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200",
                "hover:shadow-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2",
                "group"
              )}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full border border-gray-300 shadow-sm"
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