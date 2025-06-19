
import { 
  Settings, 
  File, 
  Database, 
  Lock,
  LineChart,
  MonitorSmartphone,
  MessageSquare,
  Brain,
  Search,
  Calendar,
  FileText
} from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-muted to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Vision AI offers two comprehensive services that work together to deliver 
            intelligent AI solutions for Indian SMBs and individuals.
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

          {/* AI Personal Assistant */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:border-primary/40 transition-colors">
            <h3 className="text-2xl font-bold mb-4 gradient-text">AI Personal Assistant for Everyone</h3>
            <p className="text-muted-foreground mb-8">
              Your intelligent companion that gathers information, manages tasks, and provides professional 
              assistance tailored to your needs. From research to scheduling, our AI assistant enhances 
              productivity for individuals and businesses alike.
            </p>
            
            <h4 className="font-semibold mb-4">Core Capabilities:</h4>
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Intelligent Information Gathering</h5>
                  <p className="text-sm text-muted-foreground">
                    Automatically research topics, compile market data, and gather relevant information 
                    from multiple sources with accurate citations and summaries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Smart Analysis & Insights</h5>
                  <p className="text-sm text-muted-foreground">
                    Process complex data, identify trends, and provide actionable insights 
                    to support better decision-making for your business or personal projects.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Professional Documentation</h5>
                  <p className="text-sm text-muted-foreground">
                    Create professional reports, presentations, and documents with proper 
                    formatting, citations, and industry-standard templates.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Task Management & Scheduling</h5>
                  <p className="text-sm text-muted-foreground">
                    Organize your schedule, set reminders, manage projects, and coordinate 
                    meetings with intelligent calendar integration and priority management.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium">Multi-language Communication</h5>
                  <p className="text-sm text-muted-foreground">
                    Communicate effectively in Hindi, English, and other Indian languages 
                    with context-aware responses and cultural sensitivity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-5 w-5 flex items-center justify-center text-primary">
                    🎯
                  </div>
                </div>
                <div>
                  <h5 className="font-medium">Personalized Assistance</h5>
                  <p className="text-sm text-muted-foreground">
                    Learn your preferences, working style, and requirements to provide 
                    increasingly personalized and efficient assistance over time.
                  </p>
                </div>
              </div>
            </div>
            
            <h4 className="font-semibold mb-4">Perfect For:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span>Entrepreneurs and business owners</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span>Students and researchers</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span>Professionals and consultants</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                <span>Anyone seeking intelligent productivity enhancement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
