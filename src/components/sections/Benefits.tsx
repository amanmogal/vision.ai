
import { CheckCircle, TrendingUp, DollarSign, Users, Target, ShieldCheck, Heart } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits for Your Business</h2>
          <p className="text-lg text-muted-foreground">
            Our AI solutions deliver tangible advantages that help Indian SMBs thrive in an increasingly competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Efficiency */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Increased Efficiency</h3>
            <p className="text-muted-foreground">
              Automate repetitive tasks and streamline workflows to save valuable time and resources. 
              Our agentic workflows work 24/7, ensuring consistent productivity.
            </p>
          </div>

          {/* Accuracy */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Improved Accuracy</h3>
            <p className="text-muted-foreground">
              Minimize human errors with AI-powered processes built on high-quality, 
              culturally-accurate data. Enhance precision in every business operation.
            </p>
          </div>

          {/* Decision-Making */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enhanced Decision-Making</h3>
            <p className="text-muted-foreground">
              Leverage data-driven insights to make smarter business decisions. 
              Our solutions provide actionable analytics tailored for the Indian market.
            </p>
          </div>

          {/* Scalability */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scalability</h3>
            <p className="text-muted-foreground">
              Easily scale operations up or down based on your business needs without proportional 
              increases in cost. Our solutions grow with your business.
            </p>
          </div>

          {/* Cost Savings */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
            <p className="text-muted-foreground">
              Reduce operational costs by automating routine tasks and improving resource allocation. 
              Our solutions provide excellent ROI for Indian SMBs.
            </p>
          </div>

          {/* Customer Experience */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Better Customer Experience</h3>
            <p className="text-muted-foreground">
              Deliver faster, more personalized service to your customers. Our AI solutions help you 
              understand and meet the unique needs of the Indian consumer.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-semibold mb-4">Focus on What Matters Most</h3>
              <p className="text-lg">
                By automating routine tasks and leveraging high-quality data, Vision AI frees 
                your team to focus on strategic initiatives and core business activities that 
                drive growth and innovation.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                <ShieldCheck className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
