import { createClient } from '@supabase/supabase-js'

console.log("ENV check:", import.meta.env)


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase env vars", { supabaseUrl, supabaseKey })
}

export const supabase = createClient(supabaseUrl!, supabaseKey!)
