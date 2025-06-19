
import { Lightbulb, Users, Globe, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-pulse-50 relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl animate-float"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="pulse-chip mb-6 mx-auto hover:scale-105 transition-transform duration-300 cursor-default">
            <Sparkles className="h-4 w-4" />
            <span className="ml-2">About Vision AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default">About Vision AI</h2>
          <p className="text-lg text-muted-foreground animate-fade-in-right">
            We're pioneering AI solutions tailored specifically for Indian SMBs, combining advanced automation with intelligent personal assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission with enhanced interactivity */}
          <div className="glass-card feature-card hover-lift group cursor-pointer transform transition-all duration-500 hover:shadow-elegant-hover">
            <div className="h-16 w-16 rounded-full bg-pulse-100 flex items-center justify-center mb-6 group-hover:bg-pulse-200 group-hover:scale-110 transition-all duration-300">
              <Lightbulb className="h-8 w-8 text-pulse-600 group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-4 gradient-text group-hover:scale-105 transition-transform duration-300">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
              To be the foremost provider of scalable agentic workflows and intelligent AI personal assistants, 
              empowering SMBs for efficiency, productivity, and growth.
            </p>
          </div>

          {/* Vision with enhanced interactivity */}
          <div className="glass-card feature-card hover-lift group cursor-pointer transform transition-all duration-500 hover:shadow-elegant-hover">
            <div className="h-16 w-16 rounded-full bg-pulse-100 flex items-center justify-center mb-6 group-hover:bg-pulse-200 group-hover:scale-110 transition-all duration-300">
              <Globe className="h-8 w-8 text-pulse-600 group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-4 gradient-text group-hover:scale-105 transition-transform duration-300">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
              To democratize access to advanced AI automation, enabling every Indian SMB to harness 
              the power of intelligent agents for their business needs.
            </p>
          </div>

          {/* Team with enhanced interactivity */}
          <div className="glass-card feature-card hover-lift group cursor-pointer transform transition-all duration-500 hover:shadow-elegant-hover">
            <div className="h-16 w-16 rounded-full bg-pulse-100 flex items-center justify-center mb-6 group-hover:bg-pulse-200 group-hover:scale-110 transition-all duration-300">
              <Users className="h-8 w-8 text-pulse-600 group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-4 gradient-text group-hover:scale-105 transition-transform duration-300">Our Team</h3>
            <p className="text-muted-foreground leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
              A dedicated team of AI specialists, data scientists, and business strategists with deep 
              expertise in the unique challenges and opportunities of the Indian market.
            </p>
          </div>
        </div>
        
        {/* Enhanced India-First section */}
        <div className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-pulse-50 to-pulse-100 hover:shadow-elegant-hover transition-all duration-500 transform hover:scale-[1.02] cursor-default">
          <div className="pulse-chip mb-6 mx-auto hover:scale-110 transition-transform duration-300">
            <span className="ml-2">India-First Approach</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text font-playfair hover:scale-105 transition-transform duration-300">Our India-First Approach</h3>
          <p className="text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
            We build AI solutions that understand the linguistic diversity, cultural context, 
            and unique business challenges of the Indian market. Our technologies are developed 
            specifically to address the needs of Indian SMBs with precision and cultural sensitivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
