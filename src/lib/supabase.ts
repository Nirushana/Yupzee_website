import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Server-only client — never import this in client components
export const supabase = createClient(supabaseUrl, supabaseServiceKey);
