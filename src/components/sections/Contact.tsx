
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useUserInteractions } from '@/hooks/useUserInteractions';
import { Mail, Phone, Linkedin, Twitter, Tabs, TabsList, TabsTrigger, TabsContent } from 'lucide-react';
import MultiStepContactForm from '@/components/forms/MultiStepContactForm';

const Contact = () => {
  const { toast } = useToast();
  const { logInteraction, loading: interactionLoading } = useUserInteractions();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const success = await logInteraction({
      interaction_type: 'consultation_request',
      user_email: formData.email,
      user_name: formData.name,
      user_company: formData.company,
      user_message: formData.message,
    });

    if (success) {
      setTimeout(() => {
        setLoading(false);
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
          duration: 5000,
        });
        
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      }, 1500);
    } else {
      setLoading(false);
    }
  };

  const handleScheduleDemo = async () => {
    await logInteraction({
      interaction_type: 'consultation_request',
    });
    
    toast({
      title: "Demo Request Logged",
      description: "We'll contact you soon to schedule your demo.",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your business with AI? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:aman@visionai.software" className="text-primary hover:underline">
                    aman@visionai.software
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We aim to respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+18669427514" className="text-primary hover:underline">
                    +1 866 942 7514
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Monday to Friday, 9AM to 6PM IST</p>
                </div>
              </div>
              
              <div className="flex items-start hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/company/vison-ai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    linkedin.com/company/vison-ai
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Follow us for updates and insights</p>
                </div>
              </div>
              
              <div className="flex items-start hover-lift">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Twitter className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Twitter</h4>
                  <a href="#" className="text-primary hover:underline">
                    @vision_ai_india
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Get the latest news and updates</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-muted rounded-lg hover-lift">
              <h4 className="font-semibold mb-3">Request a Free Demo</h4>
              <p className="text-muted-foreground mb-4">
                See how Vision AI can transform your business with a personalized demonstration of our platform.
              </p>
              <Button 
                onClick={handleScheduleDemo}
                disabled={interactionLoading}
                className="btn-gradient hover-scale"
              >
                {interactionLoading ? "Logging..." : "Schedule a Demo"}
              </Button>
            </div>
          </div>

          {/* Contact Forms - Right Column */}
          <div className="lg:col-span-3">
            <div className="bg-muted/30 rounded-2xl p-1">
              <div className="bg-white rounded-xl">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('quick')}
                    className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                      activeTab === 'quick'
                        ? 'text-pulse-600 border-b-2 border-pulse-500 bg-white'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Quick Contact
                  </button>
                  <button
                    onClick={() => setActiveTab('detailed')}
                    className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                      activeTab === 'detailed'
                        ? 'text-pulse-600 border-b-2 border-pulse-500 bg-white'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Detailed Request
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === 'quick' ? (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Send Us a Quick Message</h3>
                      <form onSubmit={handleQuickSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                              Your Name
                            </label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              placeholder="Full Name"
                              className="hover:border-pulse-300 focus:border-pulse-500 transition-colors"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                              Email Address
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="you@company.com"
                              className="hover:border-pulse-300 focus:border-pulse-500 transition-colors"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-1">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            placeholder="Your Company"
                            className="hover:border-pulse-300 focus:border-pulse-500 transition-colors"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="How can we help you?"
                            rows={4}
                            className="hover:border-pulse-300 focus:border-pulse-500 transition-colors"
                          />
                        </div>
                        
                        <Button
                          type="submit"
                          className="w-full btn-gradient hover-scale"
                          disabled={loading || interactionLoading}
                        >
                          {loading ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Detailed Project Request</h3>
                      <p className="text-muted-foreground mb-6">
                        Get a comprehensive consultation by providing detailed information about your project.
                      </p>
                      <MultiStepContactForm />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            By contacting us, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};

// Add state for tab switching
const [activeTab, setActiveTab] = useState<'quick' | 'detailed'>('quick');

export default Contact;
