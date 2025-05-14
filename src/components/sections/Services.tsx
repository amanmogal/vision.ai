import { 
  Settings, 
  File, 
  Database, 
  Lock,
  LineChart,
  MonitorSmartphone,
  MessageSquare
} from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-muted to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Vision AI offers two complementary services that work together to deliver 
            comprehensive AI solutions for Indian SMBs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Agentic Workflows */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:border-primary/40 transition-colors">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Scalable Agentic Workflows</h3>
            <p className="text-muted-foreground mb-8">
              AI-driven automation systems that can learn, adapt, and execute complex business tasks 
              with minimal human intervention. Our agents work tirelessly to streamline your operations.
            </p>
            
            <h4 className="font-semibold mb-4">Key Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <MonitorSmartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Intuitive Interface</h5>
                  <p className="text-sm text-muted-foreground">User-friendly dashboard designed for SMBs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <File className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Pre-built Templates</h5>
                  <p className="text-sm text-muted-foreground">Ready-to-use workflow templates for common tasks</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Customizable Builder</h5>
                  <p className="text-sm text-muted-foreground">Create workflows tailored to your specific needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Seamless Integration</h5>
                  <p className="text-sm text-muted-foreground">Connects with your existing business tools</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <LineChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Real-time Analytics</h5>
                  <p className="text-sm text-muted-foreground">Monitor performance and optimize workflows</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Secure Data Handling</h5>
                  <p className="text-sm text-muted-foreground">Compliant with data protection regulations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Annotation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:border-primary/40 transition-colors">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Upcoming: Indian Data Annotation</h3>
            <p className="text-muted-foreground mb-8">
              We are developing specialized data annotation services tailored for Indian languages and contexts. 
              These services will provide the high-quality data needed to build and fine-tune AI models relevant to India.
            </p>
            
            <div className="flex items-center justify-center p-4 bg-muted rounded-lg mb-8">
              <p className="text-sm font-medium text-muted-foreground italic">
                More details will be available as the launch approaches.
              </p>
            </div>
            
            <h4 className="font-semibold mb-4">Purpose:</h4>
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Indian Language Support</h5>
                  <p className="text-sm text-muted-foreground">
                    Enable AI models to understand and process data in various Indian languages 
                    including Hindi, Tamil, Bengali, Marathi, Telugu, and more.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-5 w-5 flex items-center justify-center text-primary">
                    🖼️
                  </div>
                </div>
                <div>
                  <h5 className="font-medium">Cultural Context Understanding</h5>
                  <p className="text-sm text-muted-foreground">
                    Enhance AI models' ability to recognize and appropriately interpret Indian cultural 
                    contexts, symbols, and environments in visual and textual data.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-5 w-5 flex items-center justify-center text-primary">
                    🎬
                  </div>
                </div>
                <div>
                  <h5 className="font-medium">AI Model Enhancement</h5>
                  <p className="text-sm text-muted-foreground">
                    Provide the foundation for building more accurate and relevant AI models 
                    specifically designed for Indian businesses and consumers.
                  </p>
                </div>
              </div>
            </div>
            
            <h4 className="font-semibold mb-4">Our Commitment:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span>Deep understanding of Indian cultural context</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span>Industry-leading quality and accuracy</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span>Cost-effective solutions scaled to your needs</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span>Complementary to our Agentic Workflow solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
