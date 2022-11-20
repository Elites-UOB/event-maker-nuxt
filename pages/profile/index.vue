<template>
    <div>
        <h1 text="light">this is your profile</h1>
    </div>
</template>
<script setup >
definePageMeta({
    middleware:'auth',
})
</script>