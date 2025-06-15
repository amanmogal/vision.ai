
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useUserInteractions } from '@/hooks/useUserInteractions';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import ProgressBar from '@/components/ui/progress-bar';

interface FormData {
  // Step 1: Basic Info
  name: string;
  email: string;
  company: string;
  
  // Step 2: Project Details
  projectType: string;
  budget: string;
  timeline: string;
  
  // Step 3: Requirements
  message: string;
  requirements: string[];
  preferredContact: string;
}

const MultiStepContactForm = () => {
  const { toast } = useToast();
  const { logInteraction, loading: interactionLoading } = useUserInteractions();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    requirements: [],
    preferredContact: 'email'
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Invalid email format';
        }
        if (!formData.company.trim()) newErrors.company = 'Company is required';
        break;
      case 2:
        if (!formData.projectType) newErrors.projectType = 'Project type is required';
        if (!formData.budget) newErrors.budget = 'Budget range is required';
        if (!formData.timeline) newErrors.timeline = 'Timeline is required';
        break;
      case 3:
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setLoading(true);
    
    const success = await logInteraction({
      interaction_type: 'consultation_request',
      user_email: formData.email,
      user_name: formData.name,
      user_company: formData.company,
      user_message: `${formData.message}\n\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nRequirements: ${formData.requirements.join(', ')}\nPreferred Contact: ${formData.preferredContact}`,
    });

    if (success) {
      setTimeout(() => {
        setLoading(false);
        toast({
          title: "Request Submitted!",
          description: "We'll get back to you within 24 hours.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: '', email: '', company: '', projectType: '', budget: '', 
          timeline: '', message: '', requirements: [], preferredContact: 'email'
        });
        setCurrentStep(1);
      }, 1500);
    } else {
      setLoading(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleRequirement = (req: string) => {
    const current = formData.requirements;
    const updated = current.includes(req) 
      ? current.filter(r => r !== req)
      : [...current, req];
    updateFormData('requirements', updated);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Your full name"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="you@company.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company Name *</label>
              <Input
                value={formData.company}
                onChange={(e) => updateFormData('company', e.target.value)}
                placeholder="Your company"
                className={errors.company ? 'border-red-500' : ''}
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Project Type *</label>
              <select
                value={formData.projectType}
                onChange={(e) => updateFormData('projectType', e.target.value)}
                className={`w-full p-2 border rounded-md ${errors.projectType ? 'border-red-500' : 'border-input'}`}
              >
                <option value="">Select project type</option>
                <option value="computer-vision">Computer Vision</option>
                <option value="document-processing">Document Processing</option>
                <option value="quality-control">Quality Control</option>
                <option value="automation">Process Automation</option>
                <option value="custom-ai">Custom AI Solution</option>
              </select>
              {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Budget Range *</label>
              <select
                value={formData.budget}
                onChange={(e) => updateFormData('budget', e.target.value)}
                className={`w-full p-2 border rounded-md ${errors.budget ? 'border-red-500' : 'border-input'}`}
              >
                <option value="">Select budget range</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
              {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Timeline *</label>
              <select
                value={formData.timeline}
                onChange={(e) => updateFormData('timeline', e.target.value)}
                className={`w-full p-2 border rounded-md ${errors.timeline ? 'border-red-500' : 'border-input'}`}
              >
                <option value="">Select timeline</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="12-months+">12+ months</option>
              </select>
              {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Requirements & Contact</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Specific Requirements</label>
              <div className="grid grid-cols-2 gap-2">
                {['Data Security', 'Real-time Processing', 'Cloud Deployment', 'On-premise', 'Integration Support', 'Training'].map((req) => (
                  <label key={req} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requirements.includes(req)}
                      onChange={() => toggleRequirement(req)}
                      className="rounded"
                    />
                    <span className="text-sm">{req}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Project Description *</label>
              <Textarea
                value={formData.message}
                onChange={(e) => updateFormData('message', e.target.value)}
                placeholder="Tell us about your project, challenges, and goals..."
                rows={4}
                className={errors.message ? 'border-red-500' : ''}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Contact Method</label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={(e) => updateFormData('preferredContact', e.target.value)}
                  />
                  <span>Email</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={(e) => updateFormData('preferredContact', e.target.value)}
                  />
                  <span>Phone</span>
                </label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-elegant">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
        </div>
        <ProgressBar progress={progress} showPercentage={false} />
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="flex items-center"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>

        {currentStep < totalSteps ? (
          <Button
            onClick={handleNext}
            className="btn-gradient flex items-center"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={loading || interactionLoading}
            className="btn-gradient flex items-center"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Check className="w-4 h-4 mr-1" />
                Submit Request
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default MultiStepContactForm;
