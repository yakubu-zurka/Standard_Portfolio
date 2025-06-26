import { User, MapPin, Calendar, Briefcase, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary"></div>
            <span className="text-primary font-medium tracking-wider">ABOUT ME</span>
            <div className="h-px w-6 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
             Know Me More
          </h2>
          <div className="h-1 w-16 bg-primary/30 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-7/12">
            <h3 className="text-3xl font-semibold mb-4 text-white">
              I'm <span className="text-white">Zurkanaini Musah Yakubu</span>, a Software Developer
            </h3>
            <p className="text-lg mb-6 text-gray-400 leading-relaxed">
              I'm a passionate software developer with expertise in building modern web applications.
              With several years of experience in the industry, I specialize in creating
              responsive, performant, and accessible web applications that provide exceptional user experiences.
            </p>
            <p className="text-lg mb-6 text-gray-400 leading-relaxed">
              My journey in software development began when I built my first website just a few months after being introduced to tech.
              Since then, I've worked with various technologies and frameworks to deliver high-quality
              solutions for clients.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              When I'm not coding, you can find me reading tech blogs, studying Islamic books,
              or contributing to open-source projects. I believe in continuous learning and staying
              updated with the latest industry trends.
            </p>
          </div>

          {/* Right Content - Personal Details Card */}
          <div className="lg:w-5/12 bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-lg border border-white/20">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
              <Sparkles size={20} className="text-primary" />
              Personal Details
            </h3>

            <div className="space-y-6">
              {/* Detail Item */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Full Name</p>
                  <p className="font-medium text-white">Zurkanaini Musah Yakubu</p>
                </div>
              </div>

              {/* Detail Item */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-medium text-white">Accra, Ghana</p>
                </div>
              </div>

              {/* Detail Item */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Experience</p>
                  <p className="font-medium text-white">3+ Years</p>
                </div>
              </div>

              {/* Detail Item */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Available</p>
                  <p className="font-medium text-white">For Freelance || Open To Work</p>
                </div>
              </div>
              {/* Detail Item */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Education</p>
                  <p className="font-medium text-white">Degree in Computer Science</p>
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