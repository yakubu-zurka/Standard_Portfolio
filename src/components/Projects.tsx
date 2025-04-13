
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment processing, user authentication, and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=E-commerce+Platform"
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, file sharing, and team communication features.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    demoUrl: "#",
    repoUrl: "#",
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=Task+Management"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application showing forecasts, radar maps, and historical weather data.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "HTML/CSS"],
    demoUrl: "#",
    repoUrl: "#",
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=Weather+Dashboard"
  },
  {
    title: "Social Media Analytics",
    description: "A platform for tracking and analyzing social media performance across multiple platforms.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
    demoUrl: "#",
    repoUrl: "#",
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=Social+Media+Analytics"
  },
  {
    title: "Real Estate Listing App",
    description: "A property listing application with advanced search filters and map integration.",
    technologies: ["React", "Express", "MongoDB", "Google Maps API"],
    demoUrl: "#",
    repoUrl: "#",
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=Real+Estate+App"
  },
  {
    title: "Fitness Tracker",
    description: "A mobile-first web app for tracking workouts, nutrition, and fitness goals.",
    technologies: ["React Native", "GraphQL", "MongoDB", "D3.js"],
    demoUrl: "#",
    repoUrl: "#",
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=Fitness+Tracker"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A selection of my recent work and personal projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
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
                      className="px-2 py-1 bg-primary/10 text-primary-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
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
