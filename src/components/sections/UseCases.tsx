
import { MessageSquare, TrendingUp, Users, Calculator, FileText } from 'lucide-react';

const UseCases = () => {
  return (
    <section id="use-cases" className="section-padding bg-gradient-to-b from-white to-muted">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Use Cases</h2>
          <p className="text-lg text-muted-foreground">
            Discover how Vision AI's solutions can transform different aspects of your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Customer Support */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <MessageSquare className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer Support Automation</h3>
            <p className="text-muted-foreground mb-4">
              Deploy intelligent agents that understand multiple Indian languages to handle customer queries, 
              provide instant responses, and escalate complex issues to human agents when necessary.
            </p>
            <h4 className="font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>24/7 customer support availability</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Support in multiple Indian languages</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Reduced response times and support costs</span>
              </li>
            </ul>
          </div>

          {/* Marketing Automation */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Marketing Automation</h3>
            <p className="text-muted-foreground mb-4">
              Create personalized marketing campaigns that resonate with Indian consumers. 
              Our AI can analyze customer behavior, optimize content, and deliver targeted messages across channels.
            </p>
            <h4 className="font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Personalized messaging at scale</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Culturally relevant content creation</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Improved campaign ROI</span>
              </li>
            </ul>
          </div>

          {/* Sales Lead Management */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Sales Lead Management</h3>
            <p className="text-muted-foreground mb-4">
              Automate lead qualification, follow-ups, and nurturing with AI agents that understand the 
              Indian business landscape and can communicate effectively with potential customers.
            </p>
            <h4 className="font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Consistent lead follow-up process</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Higher conversion rates</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Personalized sales interactions</span>
              </li>
            </ul>
          </div>

          {/* Finance Automation */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Calculator className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Finance Automation</h3>
            <p className="text-muted-foreground mb-4">
              Streamline financial processes such as invoice processing, expense management, and financial reporting 
              with AI agents trained on Indian accounting practices and tax regulations.
            </p>
            <h4 className="font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Reduced accounting errors</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Faster financial processing</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>GST compliance assistance</span>
              </li>
            </ul>
          </div>

          {/* Human Resources Automation */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <FileText className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">HR Automation</h3>
            <p className="text-muted-foreground mb-4">
              Simplify recruitment, onboarding, and employee management with AI agents that understand 
              Indian workplace norms and can process documents in multiple Indian languages.
            </p>
            <h4 className="font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Efficient candidate screening</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Automated compliance management</span>
              </li>
              <li className="flex items-start">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Improved employee experience</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Customized Solutions</h3>
          <p className="text-lg max-w-3xl mx-auto">
            These are just a few examples of how Vision AI can transform your business. 
            Our team works closely with you to understand your unique challenges and create 
            tailored solutions that address your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
