
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment processing, user authentication, and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=E-commerce+Platform"
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates, file sharing, and team communication features.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=Task+Management"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application showing forecasts, radar maps, and historical weather data.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "HTML/CSS"],
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=Weather+Dashboard"
  },
  {
    title: "Social Media Analytics",
    description: "A platform for tracking and analyzing social media performance across multiple platforms.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=Social+Media+Analytics"
  },
  {
    title: "Real Estate Listing App",
    description: "A property listing application with advanced search filters and map integration.",
    technologies: ["React", "Express", "MongoDB", "Google Maps API"],
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=Real+Estate+App"
  },
  {
    title: "Fitness Tracker",
    description: "A mobile-first web app for tracking workouts, nutrition, and fitness goals.",
    technologies: ["React Native", "GraphQL", "MongoDB", "D3.js"],
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
    imageUrl: "https://placehold.co/600x400/3730a3/ffffff?text=Fitness+Tracker"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold text-center mb-4">Recent Projects</h2>
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
