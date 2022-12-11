<template>
    <div v-if="isLoggedIn()" @click="signOut" bg="#1E1E1E" text="white center sm" >
        <Icon class="" text="2xl" name="ri:logout-circle-line" hover="text-error" transition="all ease-in-out 1s" />
    </div>
</template>
<script setup>
const { isLoggedIn, signOut } = useAuth()
</script>