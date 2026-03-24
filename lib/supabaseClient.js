import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sphuyeuohmfzoayarkvr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwaHV5ZXVvaG1mem9heWFya3ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNzk4NTAsImV4cCI6MjA4NDg1NTg1MH0.lSeweYiYAHPMPmIpeOgNkmg9tr6O8XTfVd2Lpmism0o';

export const supabase = createClient(supabaseUrl, supabaseKey);
