
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface QuickContactFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  loading: boolean;
  interactionLoading: boolean;
}

const QuickContactForm = ({ onSubmit, loading, interactionLoading }: QuickContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Send Us a Quick Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
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
  );
};

export default QuickContactForm;
