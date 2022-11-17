<template>
    <div grid="~ cols-1 gap-4" w="1/2" P="4">
        <h1>{{ authState }}</h1>
        <va-input placeholder="email" bordered type="email" v-model="input.email" />
        <va-input placeholder="password" bordered type="password" v-model="input.password" />
        <va-button preset="primary" class="mr-4 mb-2" @click="handleSubmit">Submit</va-button>
        <va-button preset="primary" class="mr-4 mb-2" @click="signOut">Logout</va-button>
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