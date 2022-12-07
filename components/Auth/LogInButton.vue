<template>
    <button cursor="pointer" v-if="isLoggedIn()" @click="signOut" bg="#1E1E1E" text="white center"
        border="1 rounded-md light" py="3" px="3" w="45" mr="3">تسجيل خروج</button>
</template>
<script setup>
const { isLoggedIn, signOut } = useAuth()
</script>