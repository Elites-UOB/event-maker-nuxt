const useAuth = () => {
    const user = useState('user', () => null)
    const supabase = useSupabaseClient();
    const router = useRouter()

    supabase.auth.onAuthStateChange((e, session) => {
        user.value = session?.user || null
    })

        
    const signUp = async ({ email, password,...metadata }) => {
        const { user: u, error } = await supabase.auth.signUp(
            {
                email,
                password,
                
            }, {
            data: metadata,
            redirectTo: `${window.location.origin}/auth/profile`,
        }

        )
        if (error) throw error
        return u
    }
    
    const signIn = async ({ email, password }) => {
        const { user: u, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
        if (error) throw error
        return u
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error  
        router.push('/')
    }
    

    const isLoggedIn = () => {
        return !!user.value
    }

    return {
        user,
        signUp,
        signIn,
        signOut,
        isLoggedIn,
    }
}
export default useAuth 