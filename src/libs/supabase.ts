
import { createClient } from "@supabase/supabase-js";

const environment = import.meta.env.MODE;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = environment === 'development' ? import.meta.env.VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
        