import { Lightbulb, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-pulse-50">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="pulse-chip mb-6 mx-auto">
            <span className="ml-2">About Vision AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">About Vision AI</h2>
          <p className="text-lg text-muted-foreground animate-fade-in-right">
            We're pioneering AI solutions tailored specifically for Indian SMBs, combining advanced automation with deep local expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="glass-card feature-card hover-lift group">
            <div className="h-16 w-16 rounded-full bg-pulse-100 flex items-center justify-center mb-6 group-hover:bg-pulse-200 transition-colors duration-300">
              <Lightbulb className="h-8 w-8 text-pulse-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the foremost provider of scalable agentic workflows and high-quality Indian data annotation, 
              empowering SMBs for efficiency, productivity, and growth.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card feature-card hover-lift group">
            <div className="h-16 w-16 rounded-full bg-pulse-100 flex items-center justify-center mb-6 group-hover:bg-pulse-200 transition-colors duration-300">
              <Globe className="h-8 w-8 text-pulse-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To democratize access to advanced AI automation, enabling every Indian SMB to harness 
              the power of intelligent agents for their business needs.
            </p>
          </div>

          {/* Team */}
          <div className="glass-card feature-card hover-lift group">
            <div className="h-16 w-16 rounded-full bg-pulse-100 flex items-center justify-center mb-6 group-hover:bg-pulse-200 transition-colors duration-300">
              <Users className="h-8 w-8 text-pulse-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Our Team</h3>
            <p className="text-muted-foreground leading-relaxed">
              A dedicated team of AI specialists, data scientists, and business strategists with deep 
              expertise in the unique challenges and opportunities of the Indian market.
            </p>
          </div>
        </div>
        
        <div className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-pulse-50 to-pulse-100">
          <div className="pulse-chip mb-6 mx-auto">
            <span className="ml-2">India-First Approach</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text font-playfair">Our India-First Approach</h3>
          <p className="text-lg max-w-4xl mx-auto text-gray-600 leading-relaxed">
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
