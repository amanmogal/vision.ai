import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useUserInteractions } from '@/hooks/useUserInteractions';

const Hero = () => {
  const { logInteraction, loading } = useUserInteractions();

  const scrollToContact = async () => {
    // Log the consultation request interaction
    await logInteraction({
      interaction_type: 'consultation_request',
    });

    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = async () => {
    // Log the service exploration interaction
    await logInteraction({
      interaction_type: 'service_exploration',
    });

    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-pulse-50 via-white to-pulse-100"
    >
      {/* Enhanced animated background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pulse-gradient rounded-full blur-3xl animate-pulse-slow opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-pulse-300/30 to-pulse-400/20 rounded-full blur-3xl animate-float opacity-80"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pulse-200/20 rounded-full blur-2xl animate-pulse-slow"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Enhanced pulse chip with hover effect */}
          <div className="pulse-chip mb-6 animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default">
            <span className="ml-2">AI Innovation for SMBs</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-right">
            Empowering Indian SMBs with{' '}
            <span className="gradient-text font-playfair italic hover:scale-105 transition-transform duration-300 inline-block">AI Automation</span> and{' '}
            <span className="gradient-text font-playfair italic hover:scale-105 transition-transform duration-300 inline-block">Intelligent Assistance</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in-left">
            Scalable Agentic Workflows and Intelligent AI Personal Assistant
          </p>
          
          <p className="text-lg mb-10 max-w-3xl text-gray-600 animate-fade-in">
            At Vision AI, we're on a mission to democratize AI for SMB growth, making advanced 
            technology accessible, affordable, and tailored to the unique needs of Indian businesses.
          </p>
          
          {/* Enhanced buttons with improved animations */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <button 
              onClick={scrollToContact}
              disabled={loading}
              className="btn-gradient hover:scale-105 disabled:opacity-50 flex items-center justify-center group"
            >
              {loading ? "Processing..." : "Request a Free Consultation"}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={scrollToServices}
              disabled={loading}
              className="button-secondary disabled:opacity-50 group flex items-center justify-center"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              {loading ? "Processing..." : "Explore Our Services"}
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-pulse-500" />
              <span>Trusted by 100+ SMBs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-pulse-500" />
              <span>India-First Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-pulse-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced hero feature cards with improved animations */}
        <div className="mt-16 flex justify-center animate-fade-in">
          <div className="relative w-full max-w-5xl">
            <div className="glass-card p-1 hover:shadow-elegant-hover transition-shadow duration-500">
              <div className="bg-white rounded-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="feature-card bg-gradient-to-br from-pulse-50 to-pulse-100 hover-lift group">
                  <div className="flex items-start space-x-4">
                    <div className="pulse-chip group-hover:scale-110 transition-transform duration-300">Agentic Workflows</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 gradient-text group-hover:scale-105 transition-transform duration-300">Agentic Workflows</h3>
                      <p className="text-muted-foreground">
                        AI-powered automation systems that learn, adapt, and execute complex business tasks with minimal human intervention.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-card bg-gradient-to-br from-pulse-50 to-pulse-100 hover-lift group">
                  <div className="flex items-start space-x-4">
                    <div className="pulse-chip group-hover:scale-110 transition-transform duration-300">AI Personal Assistant</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 gradient-text group-hover:scale-105 transition-transform duration-300">AI Personal Assistant</h3>
                      <p className="text-muted-foreground">
                        Intelligent companion for information gathering, task management, and professional assistance tailored to Indian businesses and individuals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
