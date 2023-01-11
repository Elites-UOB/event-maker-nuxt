<template>
    <div text="light">


        <div class="relative">
            <div class="relative" flex="~ col" justify="end" items="start">
                <img src="/eve.png" w="full" h="52 md:68" alt="event image">
            </div>
            <div class="absolute" w="full" h="52 md:68 " left="0" top="0" flex="~ col" justify="center" items="center" style="background: linear-gradient(180deg, rgba(40, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);"></div>
        </div>


        <!-- ALL EVENTS -->
        <div v-if="eventsStore.events" grid="~ col-1 gap-4 sm:cols-2  md:cols-3 md:gap-5 lg:cols-4 lg:gap-2 gap-y-4" max-w-7xl py="10" items="start" justify="evenly" px="2" mx="auto">
            <ServiceEventCard  v-for="event in events" :key="event?.id" :event="event" />
        </div>
        <div v-if="showSkeleton"  max-w-7xl py="10" items="center" justify="evenly" px="2" mx="auto">
            <EventsSkeleton />
        </div>



    </div>
</template>

<script setup>
import { useEvents } from '../../stores/events.ts'
const showSkeleton = ref(true)
const eventsStore = useEvents()
const events = ref(eventsStore.events)
onMounted( async () => {
    await eventsStore.getEvents()
    showSkeleton.value = false
})
onUnmounted( async () => { 
    await eventsStore.resetEvents()
    showSkeleton.value = true
})

</script>