const useAuth = () => {
    const user = useState('user', () => null)
    const { supabase } = useSupabase()

    supabase.auth.onAuthStateChange((e, session) => {
        user.value = session?.user || null
    })

        
    const signUp = async ({ email, password,name ,...metadata }) => {
        const { user: u, error } = await supabase.auth.signUp(
            {
                email,
                password,
                name,
            }, {
            data: metadata,
            redirectTo: `${window.location.origin}/`,
        }

        )
        if (error) throw error
        return u
    }
    
    const signIn = async ({ name, password }) => {
        const { user: u, error } = await supabase.auth.signIn({
                name,
                password,
            })
        if (error) throw error
        return u
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error  
    }

    return {
        user,
        signUp,
        signIn,
        signOut,
    }
}
export default useAuth 