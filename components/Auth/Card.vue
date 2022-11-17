<template>
    <div grid="~ cols-1 gap-4" w="1/2" P="4">
        <h1>{{authState}} </h1>
            <va-input placeholder="email" bordered type="email" />
            <va-input placeholder="password" bordered type="password" />
         <va-button preset="primary" class="mr-4 mb-2" @click="handleSubmit">Submit</va-button>
        <p text="blue-800" @click="toggleAuthState">{{ authState === 'Login' ? 'Create new account' : 'Already have an account' }}</p>
    </div>
</template>
<script setup lang="ts">
const { signUp , user } = useAuth();
const authState = ref<'Login' | 'Singup'>('Login')
const toggleAuthState = () => {
    authState.value = authState.value === 'Login' ? 'Singup' : 'Login'
}
const handleSubmit = () => {
    signUp({ email: 'zainab@gmail.com', password: 'password' })
}
</script>