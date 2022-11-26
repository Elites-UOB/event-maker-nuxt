<template>
    <CostumeContainer text="light" w="full sm:5/6  md:5/6" flex="~" justify="center" items="center" gap="2em" mx="auto" py="12" px="2" class="profile-container">
        <ProfileInfo />
    </CostumeContainer>
</template>

<script setup >
definePageMeta({
    middleware: 'auth',
})
const { user } = useAuth();
</script>