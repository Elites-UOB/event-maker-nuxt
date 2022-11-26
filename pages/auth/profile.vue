<template>
    <CostumeContainer text="light" w="full" flex="~ col" items="center" gap="2em" class="profile-container">
        <h1 text="light">this is your profile</h1>
        <ProfileInfo/>
    </CostumeContainer>
</template>
<script setup >
definePageMeta({
    middleware: 'auth',
})
const { user } = useAuth();
</script>