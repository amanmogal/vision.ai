
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

interface ContactInfoProps {
  onScheduleDemo: () => void;
  interactionLoading: boolean;
}

const ContactInfo = ({ onScheduleDemo, interactionLoading }: ContactInfoProps) => {
  return (
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
          onClick={onScheduleDemo}
          disabled={interactionLoading}
          className="btn-gradient hover-scale"
        >
          {interactionLoading ? "Logging..." : "Schedule a Demo"}
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
