<template>
    <div text="light">
        <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
            :autoplay="{
                        delay: 4000,disableOnInteraction: true,}" :creative-effect="{
                    prev: { shadow: false, ranslate: ['-20%', 0, -1], },
                    next: { translate: ['100%', 0, 0], },}" class="swiper">
            <SwiperSlide v-for="slide in 3" :key="slide" class="swiper-slide">
                <img src="~/public/eve.png" w="full" h="68" class="" alt="event image">
                <div class="absolute" w="full" h="full" left="0" top="24" flex="~ col" justify="center" items="center"
                    style="background: linear-gradient(180deg, rgba(40, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);">
                </div>
            </SwiperSlide>
        </Swiper>
        <NuxtLink to="/events/detail" flex="~ col gap-12" mt="16" justify="around" items="center" m="auto" w="3/4">
            <EventsEventContainer v-for="event in events" :key="event.id" :event="event" 
            class=" relative " 
                 />
        </NuxtLink>
    </div>
</template>