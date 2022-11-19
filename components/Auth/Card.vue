<template>
    
    <div  w="1/4" >
        <div v-if="!showConfirmemail" class="center"  P="4" flex="~ col  gap-4">
            <h1 text="light 2xl">{{ authState }}</h1>
            <div flex="~ col gap-1"><label text="light sm opacity-60 " for="email">الايميل</label>
                <input type="email" v-model="input.email" bg="#27292B" border="rounded-md light opacity-20" focus="border-success"
                    text="light" p="3" required />
            </div>
            <div flex="~ col gap-1"><label text="light sm opacity-60 " for="password">كلمة السر </label>
                <input type="password" v-model="input.password" bg="#27292B" border="rounded-md light opacity-20"
                    focus="border-success" text="light" p="3" required/>
            </div>
            <va-button @click="handleSubmit" color="info">تسجيل الدخول</va-button>
            
            <!-- <va-button preset="primary" class=" mb-2" @click="signOut" >Logout</va-button> -->
            <p v-if="authError" text="error">{{ authError }}</p>
            <p text="blue-700" @click="toggleAuthState">{{ authState === 'Login' ? 'Create new account' : 'Already have anaccount'
                }}</p>
        </div>
        <div v-else>
            
                <h3 text="xl light ">تحقق من بريدك الإلكتروني للتحقق من حسابك</h3>
        </div>
    </div>
</template>
<script setup lang="ts">
const { signUp, signIn, signOut, user } = useAuth();
const input = reactive({
    email: '',
    password: '',
});
const authState = ref<'Login' | 'Singup'>('Login')
const toggleAuthState = () => {
    authState.value = authState.value === 'Login' ? 'Singup' : 'Login'
    authError.value = ''
}
const router = useRouter()
const handleSubmit = async () => {
    try {
        if (authState.value === 'Login') {
            await signIn({ email: input.email, password: input.password })
            router.push('/')
        } else {
            await signUp({ email: input.email, password: input.password })
            showConfirmemail.value = true
        }
        input.email = ''
        input.password = ''
    } catch (error) {
        authError.value = error.message
    }
}
const authError = ref("")
const showConfirmemail = ref(false)
</script>