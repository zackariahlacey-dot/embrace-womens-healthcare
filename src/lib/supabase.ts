import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // We don't throw here to avoid crashing the whole app if envs are missing during build,
  // but we should log an error when the client is actually needed.
}

export const supabase = createClient(
  supabaseUrl || "",
  supabaseAnonKey || ""
);
