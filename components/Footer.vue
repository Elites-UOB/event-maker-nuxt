<template>
    <footer w="full" pt="25" my="25">
        <a href="https://csitelites.tech" target="_blank">
        <section flex="~ col" mx="auto" items="center" gap-y="3" mb="6" mt="20"  text="white">
            <!-- :my="detailPath ? '45' : '30'" -->
            <h3 text="lg md:xl" hover="shadow-lg">Event Maker - 2022</h3>
            <img src="~/public/logo.svg" w="20 md:30" alt="CSIT LOGO" hover="shadow-lg" />
        </section>
        </a>
    </footer>
</template>

<script setup>
const route = useRoute()
const detailPath = route.fullPath.includes('events/detail')
</script>