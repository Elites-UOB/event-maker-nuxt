import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://mqbrcfwajoadiuwviiud.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xYnJjZndham9hZGl1d3ZpaXVkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2ODA3MjYyOSwiZXhwIjoxOTgzNjQ4NjI5fQ.9a9PaPf4LNeX-XNgMtazq5ET_DUsccJe_EkXpDZlV4o"

const useSupabase = () => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
    return {
        supabase,
    }
}
export default useSupabase