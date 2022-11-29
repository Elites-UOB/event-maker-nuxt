<template>
    <div text="light">
        <Swiper :modules="[SwiperAutoplay]" :slides-per-view="1" :loop="true" :autoplay="{ delay: 4000 }" :speed="1000">
            <SwiperSlide v-for="slide in 3" :key="slide" class="swiper-slide">
                <img src="/eve.png" w="full" h="68" class="" alt="event image">
                <div class="absolute" z="1" w="full" h="full" left="0" top="24" flex="~ col" justify="center"
                    items="center"
                    style="background: linear-gradient(180deg, rgba(40, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);">
                </div>
                <div class="absolute z-3" text="black" flex="~ gap-9" justify="center" items="end" right="20" top="9">
                    <div bg="#D9D9D9" alt="calendar" w="180px" h="180px"></div>
                    <div>
                        <h1 text="2xl">حفل استقبال طلبة المرحلة الاولى</h1>
                        <span text="md">2202-12-01</span>
                        <p text="md" mb="3">كلية علوم الحاسوب - جامعة البصرة</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div p="20" grid="~ cols-4 ">
            <ServiceIncomingEvents v-for="event in 10" :key="event" flex="~" class="flex-wrap" />
        </div>
    </div>
</template>
<script setup>
</script>