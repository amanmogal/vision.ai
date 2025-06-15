
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useUserInteractions } from '@/hooks/useUserInteractions';
import ContactInfo from './contact/ContactInfo';
import ContactTabs from './contact/ContactTabs';

const Contact = () => {
  const { toast } = useToast();
  const { logInteraction, loading: interactionLoading } = useUserInteractions();
  const [loading, setLoading] = useState(false);

  const handleQuickSubmit = async (formData: { name: string; email: string; company: string; message: string }) => {
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
          <ContactInfo 
            onScheduleDemo={handleScheduleDemo}
            interactionLoading={interactionLoading}
          />
          
          <ContactTabs 
            onQuickSubmit={handleQuickSubmit}
            loading={loading}
            interactionLoading={interactionLoading}
          />
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

export default Contact;
