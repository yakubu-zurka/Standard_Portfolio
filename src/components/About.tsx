
import { User, MapPin, Calendar, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <p className="text-lg mb-4">
              I'm a passionate software developer with expertise in building modern web applications.
              With several years of experience in the industry, I specialize in creating
              responsive, performant, and accessible websites.
            </p>
            <p className="text-lg mb-4">
              My journey in software development began when I built my first website at the age of 16.
              Since then, I've worked with various technologies and frameworks to deliver high-quality
              solutions for clients across different industries.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking in the mountains, reading tech blogs,
              or contributing to open-source projects.
            </p>
          </div>
          
          <div className="lg:w-1/2 bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Full Name</p>
                  <p className="font-medium">John Doe</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Experience</p>
                  <p className="font-medium">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="text-primary" size={20} />
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
