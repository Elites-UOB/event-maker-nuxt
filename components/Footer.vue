<template>
    <section flex="~ col" mx="auto" items="center" gap-y="3" :my="detailPath ? '45' : '30'" text="white">
        <h3 text="lg md:xl">Event Maker - 2022</h3>
        <img src="~/public/logo.svg" w="20 md:30" alt="CSIT LOGO" />
    </section>
</template>

<script setup>
const route = useRoute()
const detailPath = route.fullPath.includes('events/detail')
</script>