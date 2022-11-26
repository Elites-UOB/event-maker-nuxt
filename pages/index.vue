<template>
    <div>
        <swiper :modules="[SwiperPagination]" :pagination="{ clickable: true }" :slides-per-view="1" :loop="true"
            :autoplay="{ delay: 8000, disableOnInteraction: true, }">
            <SwiperSlide v-for="slide in 3" :key="slide">
                <img src="/eve.png" w="full" h="68" class="" alt="event image">
                <div class="absolute" w="full" h="full" left="0" top="24" flex="~ col" justify="center" items="center"
                    style="background: linear-gradient(180deg, rgba(40, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);">
                </div>
            </SwiperSlide>
        </swiper>

        <!-- <section flex="~" justify="center" items="center" h="full">
            <NuxtLink to="/events/detail" flex="~ col gap-12" mt="16" justify="around" items="center" m="auto" w="3/4">
                <EventsEventContainer v-for="(event, Idx) in 6" :key="Idx" class=" relative "
                    content="حفل افتتاح الطلبة الجدد " enterprise="نادي النخبة المطورين" image="this is an image" />
            </NuxtLink>
        </section> -->
    </div>
</template>

<script setup>
</script>