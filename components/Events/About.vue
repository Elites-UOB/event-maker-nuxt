<template>
    <CostumeContainer flex="~ col" gap="10" w="full lg:90%" xl:mr="5em">

        <!-- الإضافة -->
        <EventsAboutAddition />
        <!-- الأدوات -->
        <EventsAboutTools />
        <!-- فريق العمل  FIRST TABLE -->
        <EventsAboutStaff />
        <!-- الحضور  SECOND TABLE -->
        <EventsAboutMass />

    </CostumeContainer>
</template>
<script setup>
const props = defineProps(['event'])
</script>