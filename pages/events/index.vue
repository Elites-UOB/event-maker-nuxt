<template>
    <div text="light">



        <Swiper :modules="[SwiperAutoplay]" :slides-per-view="1" :loop="true" :autoplay="{ delay: 4000 }" :speed="1000">
            <SwiperSlide v-for="item in data" :key="item.id" class="swiper-slide">
                <img src="/eve.png" w="full" h="52 md:68" class="" alt="event image">
                <div class="absolute" z="1" w="full" h="full" left="0" top="24" flex="~ col" justify="center"
                    items="center"
                    style="background: linear-gradient(180deg, rgba(40, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);">
                </div>
                <div class="absolute z-3" text="light" flex="~ gap-6" justify="center" items="end" right="4 md:20" top="18 sm:10 md:9">
                    <div bg="#D9D9D9" alt="calendar" w="180px sm:140px lg:180px" h="100px sm:140px lg:180px"></div>
                    <div>
                        <h1 text="lg sm:xl lg:2xl">  {{item.title}}  </h1>
                        <span text="sm sm:md lg:lg">{{item.start_time}}</span>
                        <p text="sm sm:md lg:lg" mb="3" hidden sm="block">كلية علوم الحاسوب - جامعة البصرة</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>


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