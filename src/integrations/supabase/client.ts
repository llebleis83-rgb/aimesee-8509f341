import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://abdwitbhlfetjxkulssp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZHdpdGJobGZldGp4a3Vsc3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2NDQ3NzEsImV4cCI6MjEwMDIyMDc3MX0.tJONRkya_9f99DkLKpO3SIKxVU6SsysIBgAcEGs8vcc'
);
