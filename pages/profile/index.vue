<template>
    <div text="light">
        <h1 text="light">this is your profile</h1>{{user}}
    </div>
</template>
<script setup >
definePageMeta({
    middleware:'auth',
})
const { user } = useAuth();
</script>