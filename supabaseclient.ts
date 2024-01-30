import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://auyxzfrvnuycpwlbebxj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1eXh6ZnJ2bnV5Y3B3bGJlYnhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwNTM2MjEsImV4cCI6MjAxOTYyOTYyMX0.cJlobIST7Xx5fjIgBHoxAWFYguZgrljNgJ0XLBgTqCw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
/////TODOOOO
//add credentials to this so that the connection can be established
