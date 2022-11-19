<template>
    <div grid="~ cols-1 gap-4" w="1/4" P="4" class="center">
        <h1 text="light 2xl">{{ authState }}</h1>
        <input placeholder="email"  type="email" v-model="input.email" bg="#27292B" border="rounded-md light opacity-20" focus="border-success" text="light" p="3"  />
        <input placeholder="password"  type="password" v-model="input.password" bg="#27292B" border="rounded-md light opacity-20" focus="border-success" text="light" p="3"  />
        <va-button preset="primary" class=" mb-2" @click="handleSubmit"  >Submit</va-button>
        <va-button preset="primary" class=" mb-2" @click="signOut" >Logout</va-button>
        <p text="blue-800" @click="toggleAuthState">{{ authState === 'Login' ? 'Create new account' : 'Already have anaccount' }}</p>
        {{user}}
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
}
const handleSubmit = () => {
    if (authState.value === 'Login') {
        signIn({ email: input.email, password: input.password })
    } else {
        signUp({ email: input.email, password: input.password })
    }
    input.email = ''
    input.password = ''
}
</script>