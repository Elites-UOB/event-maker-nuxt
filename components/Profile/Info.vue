<template>
    <CostumeContainer w="full" flex="~ col" justify="center" items="center">
        <CostumeBox>
            hello world from the first box
        </CostumeBox>
        <CostumeBox>
            <button v-if="isLoggedIn()" @click="signOut" un-text="white center" bg="success" border="0 rounded-md"
                py="3" px="3" w="40" mr="3">تسجيل خروج
            </button>
        </CostumeBox>
    </CostumeContainer>
</template>

<script setup>
const { isLoggedIn, signOut } = useAuth()
</script>