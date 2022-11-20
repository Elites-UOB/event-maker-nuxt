<template>
    <NuxtLink to="/events/detail" flex="~ col gap-12" mt="16" justify="around"  items="center" m="auto"  w="3/4">
        <EventContainer v-for="event in 6" :key="event" 
        class=" relative " content="حفل افتتاح الطلبة الجدد "
            enterprise="نادي النخبة المطورين" image="this is an image" />
    </NuxtLink>
</template>

<script setup>

// import EventContainerVue from '~/components/EventContainer.vue';
</script>