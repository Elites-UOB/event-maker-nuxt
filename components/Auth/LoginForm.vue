<template>
    <div w="full">
        <div v-if="!showConfirmEmail" class="center" flex="~ col  gap-4">
            <h1 text="light 4xl center " mb="12" font="bold"> Event Maker</h1>
            <div v-if="authState == 'Singup'" flex="~ col gap-1"><label text="light sm opacity-60" for="name">الاسم</label>
                <input type="name" @click="clearAuthError()"  v-model="input.name" bg="#27292B" border="rounded-md light opacity-20" focus="border-success" text="light" p="2 lg:3" required />
            </div>
            <div flex="~ col gap-1"><label text="light sm opacity-60 " for="email">البريد الالكتروني</label>
                <input type="email" @click="clearAuthError()" v-model="input.email" bg="#27292B" border="rounded-md light opacity-20" focus="border-success" text="light" p="2 lg:3" required />
            </div>
            <div flex="~ col gap-1"><label text="light sm opacity-60 " for="password">كلمة المرور </label>
                <input type="password" @click="clearAuthError()" v-model="input.password" bg="#27292B" border="rounded-md light opacity-20" focus="border-success" text="light" p="2 lg:3"  required />
            </div>
            <va-button v-if="authState == 'Login'" @click="handleSubmit" color="info">تسجيل الدخول</va-button>
            <va-button v-if="authState == 'Singup'" @click="handleSubmit" color="info"> انشاء حساب</va-button>
            <p v-if="authError" text="error">{{ authError }}</p>
            <p cursor="pointer" text="blue-700 opacity-70 center" mt="3" @click="toggleAuthState">{{ authState === 'Login' ? ' ليس لديك حساب ؟ ' : ' تسجيل دخول '}}</p>
        </div>
        <div v-else>
            <h3 text="xl light ">تحقق من بريدك الإلكتروني للتحقق من حسابك</h3>
        </div>
    </div>
</template>
<script setup lang="ts">
const { signUp, signIn } = useAuth();
const input = reactive({
    name: '',
    email: '',
    password: '',
});

function clearAuthError() {
    authError.value = ''
}

const authState = ref<'Login' | 'Singup'>('Login');
const toggleAuthState = () => {
    authState.value = authState.value === 'Login' ? 'Singup' : 'Login'
    clearAuthError()
}
const router = useRouter()
const handleSubmit = async () => {
    try {
        if (authState.value === 'Login') {
            await signIn({ email: input.email, password: input.password })
            router.push('/auth/profile')
        } else {
            await signUp({ email: input.email, password: input.password, name: input.name })
            showConfirmEmail.value = true
        }
        input.email = ''
        input.password = ''
        input.name = ''
    } catch (error) {
        authError.value = error.message
    }
}
const authError = ref("")
const showConfirmEmail = ref(false)
</script>