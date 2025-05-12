
import { Globe, ShieldCheck, Trophy, Brain, Scroll, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Vision AI</h2>
          <p className="text-lg text-muted-foreground">
            Our unique approach combines advanced technology with deep local expertise to deliver unparalleled value to Indian SMBs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* India-First Approach */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Strong "India-First" Approach</h3>
            <p className="text-muted-foreground">
              Our solutions are built from the ground up for Indian businesses, with full support for 
              Indian languages, understanding of local business practices, and compliance with Indian regulations.
            </p>
          </div>

          {/* Quality Guarantee */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
            <p className="text-muted-foreground">
              We maintain rigorous quality control processes for both our agentic workflows and data annotation services,
              ensuring that your AI solutions perform with the highest levels of accuracy and reliability.
            </p>
          </div>

          {/* Domain Expertise */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Trophy className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Domain Expertise</h3>
            <p className="text-muted-foreground">
              Our team brings specialized knowledge in key Indian industries including Healthcare, 
              Agriculture, Finance, and Education, enabling us to create solutions that address 
              industry-specific challenges.
            </p>
          </div>

          {/* Hallucination Prevention */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Brain className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hallucination Prevention</h3>
            <p className="text-muted-foreground">
              Our specialized processes ensure that AI models are grounded in factual, high-quality data,
              minimizing the risk of AI hallucinations that could impact your business operations.
            </p>
          </div>

          {/* Regulatory Compliance */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Scroll className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
            <p className="text-muted-foreground">
              All our solutions are designed with built-in compliance for Indian data protection regulations,
              including the Digital Personal Data Protection Act (DPDPA), ensuring your business stays compliant.
            </p>
          </div>

          {/* Combined Offering */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Unique Combined Offering</h3>
            <p className="text-muted-foreground">
              Our dual expertise in agentic workflows and Indian data annotation provides a comprehensive 
              solution that ensures your AI systems work effectively in the Indian context from day one.
            </p>
          </div>
        </div>

        {/* Case Studies Reference */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Success Stories</h3>
          <p className="text-lg mb-6">
            See how we've helped businesses across India transform their operations with our AI solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold mb-2">AgriTech Revolution</h4>
              <p className="text-muted-foreground text-sm">
                How an agricultural supply chain company automated quality control and logistics with Vision AI's 
                workflows and crop image annotation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold mb-2">Healthcare Innovation</h4>
              <p className="text-muted-foreground text-sm">
                How a healthcare provider streamlined patient communications and appointment scheduling 
                across multiple Indian languages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
