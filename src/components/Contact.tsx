 import { Mail, MapPin, Phone, Linkedin, Github, Twitter, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceID = "service_ni4u78o"; // Replace with your EmailJS Service ID
    const templateID = "template_iyfuf0d"; // Replace with your EmailJS Template ID
    const userID = "6WIszj1QQ8aw0IrTA"; // Replace with your EmailJS User ID

    try {
      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, formData, userID);

      // Show success toast
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary"></div>
            <span className="text-primary font-medium">CONTACT</span>
            <div className="h-px w-6 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-4">Get In Touch</h2>
          <div className="h-1 w-16 bg-primary/30 rounded-full"></div>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-6">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a 
                      href="mailto:musahyakubu59@gmail.com" 
                      className="font-medium hover:text-primary transition-colors relative group"
                    >
                      musahyakub50@gmail.com
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <a 
                      href="tel:+233597988282" 
                      className="font-medium hover:text-primary transition-colors relative group"
                    >
                      +233 597 988 282
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="font-medium">Accra-Ghana, Koforidua-Ghana</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Connect</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/yakubu-zurka" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "w-12 h-12 rounded-full border flex items-center justify-center",
                    "hover:bg-primary hover:text-primary-foreground hover:border-primary",
                    "transition-colors duration-300"
                  )}
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/zulqarnaini-yakubu-a62b02284/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "w-12 h-12 rounded-full border flex items-center justify-center",
                    "hover:bg-primary hover:text-primary-foreground hover:border-primary",
                    "transition-colors duration-300"
                  )}
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "w-12 h-12 rounded-full border flex items-center justify-center",
                    "hover:bg-primary hover:text-primary-foreground hover:border-primary",
                    "transition-colors duration-300"
                  )}
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full rounded-md border border-input bg-background px-4 py-3 text-sm",
                    "shadow-sm transition-colors focus:border-primary",
                    "placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  )}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full rounded-md border border-input bg-background px-4 py-3 text-sm",
                    "shadow-sm transition-colors focus:border-primary",
                    "placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  )}
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cn(
                    "w-full rounded-md border border-input bg-background px-4 py-3 text-sm",
                    "shadow-sm transition-colors focus:border-primary",
                    "placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  )}
                  placeholder="Your message"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <SendIcon size={16} className={isSubmitting ? "animate-pulse" : ""} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;