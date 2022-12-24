<template>
    <div text="light">
        <Swiper :modules="[SwiperAutoplay]" :slides-per-view="1" :loop="true" :autoplay="{ delay: 4000 }" :speed="1000">
            <SwiperSlide v-for="slide in 3" :key="slide" class="swiper-slide">
                <img src="/eve.png" w="full" h="52 md:68" class="" alt="event image">
                <div class="absolute" z="1" w="full" h="full" left="0" top="24" flex="~ col" justify="center"
                    items="center"
                    style="background: linear-gradient(180deg, rgba(40, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);">
                </div>
                <div class="absolute z-3" text="light" flex="~ gap-6" justify="center" items="end" right="4 md:20" top="18 sm:10 md:9">
                    <div bg="#D9D9D9" alt="calendar" w="180px sm:140px lg:180px" h="100px sm:140px lg:180px"></div>
                    <div>
                        <h1 text="lg sm:xl lg:2xl">حفل استقبال طلبة المرحلة الاولى</h1>
                        <span text="sm sm:md lg:lg">2202-12-01</span>
                        <p text="sm sm:md lg:lg" mb="3" hidden sm="block">كلية علوم الحاسوب - جامعة البصرة</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div grid="~ col-1 gap-4 sm:cols-2  md:cols-3 md:gap-8 lg:cols-4 lg:gap-10" w="fit" border="1px solid white" py="10" justify="between" items="center" m="auto" px="10">
            <ServiceIncomingEvents v-for="event in 20" :key="event" px="2" />
        </div>
    </div>
</template>
<script setup>
</script>