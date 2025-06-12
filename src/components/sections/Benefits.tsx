
import { CheckCircle, TrendingUp, DollarSign, Users, Target, ShieldCheck, Heart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline workflows to save valuable time and resources. Our agentic workflows work 24/7, ensuring consistent productivity."
    },
    {
      icon: CheckCircle,
      title: "Improved Accuracy",
      description: "Minimize human errors with AI-powered processes built on high-quality, culturally-accurate data. Enhance precision in every business operation."
    },
    {
      icon: Target,
      title: "Enhanced Decision-Making",
      description: "Leverage data-driven insights to make smarter business decisions. Our solutions provide actionable analytics tailored for the Indian market."
    },
    {
      icon: Users,
      title: "Scalability",
      description: "Easily scale operations up or down based on your business needs without proportional increases in cost. Our solutions grow with your business."
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce operational costs by automating routine tasks and improving resource allocation. Our solutions provide excellent ROI for Indian SMBs."
    },
    {
      icon: Heart,
      title: "Better Customer Experience",
      description: "Deliver faster, more personalized service to your customers. Our AI solutions help you understand and meet the unique needs of the Indian consumer."
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-pulse-50 to-white">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="pulse-chip mb-6 mx-auto">
            <span className="font-semibold">06</span>
            <span className="ml-2">Business Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits for Your Business</h2>
          <p className="text-lg text-muted-foreground">
            Our AI solutions deliver tangible advantages that help Indian SMBs thrive in an increasingly competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="glass-card feature-card hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-full bg-pulse-100 flex items-center justify-center mb-6 group-hover:bg-pulse-200 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="h-7 w-7 text-pulse-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 bg-hero-gradient-2 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:mr-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 mb-6">
                <span className="font-semibold">07</span>
                <span className="ml-2">Core Focus</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 font-playfair">Focus on What Matters Most</h3>
              <p className="text-lg leading-relaxed text-white/90">
                By automating routine tasks and leveraging high-quality data, Vision AI frees 
                your team to focus on strategic initiatives and core business activities that 
                drive growth and innovation.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="h-28 w-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-elegant hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="h-14 w-14 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
