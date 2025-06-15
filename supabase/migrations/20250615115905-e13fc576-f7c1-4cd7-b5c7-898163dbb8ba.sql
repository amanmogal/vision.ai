
-- First, let's check and fix any existing data that would violate our constraints
-- Update any consultation_request rows that are missing required fields
UPDATE public.user_interactions 
SET interaction_type = 'service_exploration'
WHERE interaction_type = 'consultation_request' 
  AND (user_email IS NULL OR user_name IS NULL);

-- Now enable Row Level Security on user_interactions table
ALTER TABLE public.user_interactions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert interactions (for contact forms)
-- This is acceptable for public contact forms
CREATE POLICY "Allow public to create interactions" 
  ON public.user_interactions 
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Create policy to restrict reading interactions to authenticated users only
-- Only allow users to read their own interactions if they have an email match
CREATE POLICY "Users can view their own interactions" 
  ON public.user_interactions 
  FOR SELECT 
  TO authenticated 
  USING (user_email = auth.email());

-- Create policy for admins to view all interactions
-- Fixed function to use user_id instead of id for UUID comparison
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND display_name = 'admin'
  );
$$;

-- Admin policy for viewing all interactions
CREATE POLICY "Admins can view all interactions" 
  ON public.user_interactions 
  FOR SELECT 
  TO authenticated 
  USING (public.is_admin());

-- Add data validation constraints
ALTER TABLE public.user_interactions 
ADD CONSTRAINT valid_interaction_type 
CHECK (interaction_type IN ('consultation_request', 'service_exploration'));

-- Add constraint to ensure email format is valid when provided
ALTER TABLE public.user_interactions 
ADD CONSTRAINT valid_email_format 
CHECK (user_email IS NULL OR user_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Add constraint to ensure required fields for consultation requests
ALTER TABLE public.user_interactions 
ADD CONSTRAINT consultation_requires_contact 
CHECK (
  interaction_type != 'consultation_request' OR 
  (user_email IS NOT NULL AND user_name IS NOT NULL)
);

-- Create index for better performance on common queries
CREATE INDEX IF NOT EXISTS idx_user_interactions_email ON public.user_interactions(user_email);
CREATE INDEX IF NOT EXISTS idx_user_interactions_type ON public.user_interactions(interaction_type);
CREATE INDEX IF NOT EXISTS idx_user_interactions_created ON public.user_interactions(created_at);
