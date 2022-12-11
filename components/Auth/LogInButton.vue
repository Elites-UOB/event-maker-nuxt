<template>
    <div v-if="isLoggedIn()" @click="signOut" text="white center sm" >
        <Icon class="" text="2xl" name="ri:logout-circle-line" hover="text-gray-600" transition="all ease-in-out 1s" />
    </div>
</template>
<script setup>
const { isLoggedIn, signOut } = useAuth()
</script>