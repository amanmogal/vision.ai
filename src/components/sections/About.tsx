
import { Lightbulb, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Vision AI</h2>
          <p className="text-lg text-muted-foreground">
            We're pioneering AI solutions tailored specifically for Indian SMBs, combining advanced automation with deep local expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="bg-muted rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To be the foremost provider of scalable agentic workflows and high-quality Indian data annotation, 
              empowering SMBs for efficiency, productivity, and growth.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-muted rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To democratize access to advanced AI automation, enabling every Indian SMB to harness 
              the power of intelligent agents for their business needs.
            </p>
          </div>

          {/* Team */}
          <div className="bg-muted rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Team</h3>
            <p className="text-muted-foreground">
              A dedicated team of AI specialists, data scientists, and business strategists with deep 
              expertise in the unique challenges and opportunities of the Indian market.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our India-First Approach</h3>
          <p className="text-lg max-w-3xl mx-auto">
            We build AI solutions that understand the linguistic diversity, cultural context, 
            and unique business challenges of the Indian market. Our technologies are developed 
            specifically to address the needs of Indian SMBs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
