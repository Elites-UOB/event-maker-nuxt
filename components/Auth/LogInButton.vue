<template>
    <button cursor="pointer" v-if="isLoggedIn()" @click="signOut" un-text="white center" bg="success" border="0 rounded-md" py="3" px="3"
        w="40" mr="3">تسجيل خروج
    </button>
</template>
<script setup>
const { isLoggedIn, signOut } = useAuth()
</script>