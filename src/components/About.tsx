
import { User, MapPin, Calendar, Briefcase, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary"></div>
            <span className="text-primary font-medium">ABOUT ME</span>
            <div className="h-px w-6 bg-primary"></div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Know Me More</h2>
          <div className="h-1 w-16 bg-primary/30 rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-7/12">
            <h3 className="text-2xl font-semibold mb-4">
              I'm <span className="text-primary">John Doe</span>, a Software Developer
            </h3>
            <p className="text-lg mb-6 text-muted-foreground">
              I'm a passionate software developer with expertise in building modern web applications.
              With several years of experience in the industry, I specialize in creating
              responsive, performant, and accessible websites that provide exceptional user experiences.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              My journey in software development began when I built my first website at the age of 16.
              Since then, I've worked with various technologies and frameworks to deliver high-quality
              solutions for clients across different industries.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me hiking in the mountains, reading tech blogs,
              or contributing to open-source projects. I believe in continuous learning and staying
              updated with the latest industry trends.
            </p>
          </div>
          
          <div className="lg:w-5/12 bg-card rounded-lg p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-primary" />
              Personal Details
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Full Name</p>
                  <p className="font-medium">John Doe</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Experience</p>
                  <p className="font-medium">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Available</p>
                  <p className="font-medium">For Freelance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
