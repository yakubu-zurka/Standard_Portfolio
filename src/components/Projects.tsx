import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [


  {
    title: "Standard_Portfolio ",
    description: "My personal developer portfolio website, showcasing my skills, projects, and contact information in a modern, responsive design.",
    technologies: ["React.js", "TypeScript", "shadcn-ui", "RTailwind CSViteS"],
    demoUrl: "yakubtech.netlify.app",
    repoUrl: "https://github.com/yakubu-zurka/Standard_Portfolio",
    featured: true,
    imageUrl: "https://i.pinimg.com/736x/b9/fa/ee/b9faee9f19715d3f2562f8f264bbbe34.jpg"
  },

  {
    title: "TeleCareSystem",
    description: "A telemedicine platform for remote consultations, appointment scheduling, and patient management.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    repoUrl: "https://github.com/yakubu-zurka/TeleCareSystem",
    featured: true,
    imageUrl:  "https://i.pinimg.com/736x/50/33/41/50334152af4fad681f9c44e09e3c4db4.jpg",
    
  },

  {
    title: "Student-Nest",
    description: "A platform for students to find and book accommodations, with user reviews and ratings.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery"],
    demoUrl: "#",
    repoUrl: "https://github.com/Jojofelani/StudentNest-Frontend",
    featured: true,
    imageUrl:  "https://i.pinimg.com/736x/15/81/49/158149aca0cf2e2eaa75c5cf3b623c55.jpg",
    
  },

   {
    title: "CRUD-Application",
    description: "A simple CRUD application for managing user data with authentication and validation.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    repoUrl: "https://github.com/yakubu-zurka/Backend",
    featured: true,
    imageUrl:  "https://i.pinimg.com/736x/20/5b/74/205b7457de5bb32d4c38f2c3ff78438d.jpg",
    
  },
  
  {
    title: " Tourism_Project",
    description: "A modern tourism platform enabling users to explore destinations, book tours, and make secure payments online.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    repoUrl: "https://github.com/yakubu-zurka/TOURISM_PROJECT",
    featured: true,
    imageUrl: "https://i.pinimg.com/736x/e2/a7/8c/e2a78c1f0243e7f5c1c985b87a3066b1.jpg"
  },
  {
    title: " Real-Assets",
    description: "A real estate management app for tracking properties, managing listings, and facilitating seamless communication between buyers and sellers.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
    imageUrl: "https://i.pinimg.com/736x/d8/8e/6a/d88e6a3d79acc6c62760ce765ed50f6a.jpg"
  },
   
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden ">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary"></div>
            <span className="text-primary font-medium">PORTFOLIO</span>
            <div className="h-px w-6 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-4">Recent Projects</h2>
          <div className="h-1 w-16 bg-primary/30 rounded-full"></div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-6">
            A selection of my recent work and personal projects that showcase my skills and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={cn(
                "overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border",
                project.featured && "md:col-span-2 lg:col-span-1"
              )}
            >
              <div className="h-48 overflow-hidden relative">
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs">
                      <Star size={12} className="fill-primary-foreground" />
                      Featured
                    </div>
                  </div>
                )}
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
