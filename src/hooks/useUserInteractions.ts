
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface UserInteraction {
  interaction_type: 'consultation_request' | 'service_exploration';
  user_email?: string;
  user_name?: string;
  user_company?: string;
  user_message?: string;
  page_url?: string;
  user_agent?: string;
}

export const useUserInteractions = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const logInteraction = async (data: UserInteraction) => {
    setLoading(true);
    
    try {
      const interactionData = {
        ...data,
        page_url: window.location.href,
        user_agent: navigator.userAgent,
      };

      const { error } = await supabase
        .from('user_interactions')
        .insert([interactionData]);

      if (error) {
        console.error('Error logging interaction:', error);
        toast({
          title: "Error",
          description: "Failed to log interaction. Please try again.",
          variant: "destructive",
        });
        return false;
      }

      console.log('Interaction logged successfully:', interactionData);
      return true;
    } catch (error) {
      console.error('Error logging interaction:', error);
      toast({
        title: "Error",
        description: "Failed to log interaction. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { logInteraction, loading };
};
