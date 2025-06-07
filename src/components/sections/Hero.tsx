
import { ArrowRight } from 'lucide-react';
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
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-white to-muted"
    >
      {/* Abstract shapes - decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Empowering Indian SMBs with{' '}
            <span className="gradient-text">AI Automation</span> and{' '}
            <span className="gradient-text">Data Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Scalable Agentic Workflows and High-Quality Indian Data Annotation
          </p>
          
          <p className="text-lg mb-10 max-w-2xl">
            At Vision AI, we're on a mission to democratize AI for SMB growth, making advanced 
            technology accessible, affordable, and tailored to the unique needs of Indian businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              disabled={loading}
              className="btn-gradient px-8 py-3 rounded-lg text-lg font-medium flex items-center justify-center disabled:opacity-50"
            >
              {loading ? "Processing..." : "Request a Free Consultation"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button
              onClick={scrollToServices}
              disabled={loading}
              className="bg-white hover:bg-muted border border-border px-8 py-3 rounded-lg text-lg font-medium transition-colors disabled:opacity-50"
            >
              {loading ? "Processing..." : "Explore Our Services"}
            </button>
          </div>
        </div>
        
        {/* Hero image/illustration area */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="bg-gradient-to-r from-primary/80 to-secondary/80 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-3 gradient-text">Agentic Workflows</h3>
                  <p className="text-muted-foreground">
                    AI-powered automation systems that learn, adapt, and execute complex business tasks with minimal human intervention.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-3 gradient-text">Indian Data Annotation</h3>
                  <p className="text-muted-foreground">
                    High-quality, culturally-accurate data labeling services specialized for the Indian context and linguistic diversity.
                  </p>
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
