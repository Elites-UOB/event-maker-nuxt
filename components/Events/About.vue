<template>
    <CostumeContainer flex="~ col" gap="10" w="full lg:90%">

        <!-- الإضافة -->
        <EventsAboutAdd />
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