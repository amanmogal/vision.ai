
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import QuickContactForm from './QuickContactForm';
import MultiStepContactForm from '@/components/forms/MultiStepContactForm';

interface ContactTabsProps {
  onQuickSubmit: (formData: { name: string; email: string; company: string; message: string }) => Promise<void>;
  loading: boolean;
  interactionLoading: boolean;
}

const ContactTabs = ({ onQuickSubmit, loading, interactionLoading }: ContactTabsProps) => {
  const [activeTab, setActiveTab] = useState<'quick' | 'detailed'>('quick');

  return (
    <div className="lg:col-span-3">
      <div className="bg-muted/30 rounded-2xl p-1">
        <div className="bg-white rounded-xl">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'quick' | 'detailed')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="quick">Quick Contact</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Request</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quick" className="p-6">
              <QuickContactForm 
                onSubmit={onQuickSubmit}
                loading={loading}
                interactionLoading={interactionLoading}
              />
            </TabsContent>
            
            <TabsContent value="detailed" className="p-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Detailed Project Request</h3>
                <p className="text-muted-foreground mb-6">
                  Get a comprehensive consultation by providing detailed information about your project.
                </p>
                <MultiStepContactForm />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ContactTabs;
