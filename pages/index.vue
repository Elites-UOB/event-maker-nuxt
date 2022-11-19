<template>
    <section flex="~" justify="around" items="start" w="fit-content">
        <EventsEventContainer @mouseover="open = !open" class=" relative " content="حفل افتتاح الطلبة الجدد "
            enterprise="نادي النخبة المطورين" image="this is an image" />
    </section>
</template>

<script setup>
const open = ref(false)

// import EventContainerVue from '~/components/EventContainer.vue';
</script>