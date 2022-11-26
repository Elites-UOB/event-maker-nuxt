<template>
    <div>
        <div bg="#0B84FF">
            <div flex="~" justify="between" h="525px" py="12" w="80%" m="auto" items="center">
                <div grid="~ col-1 gap-11" justify="between">
                    <!-- <Transition enter-from-class="translate-y-4 opacity-0"
                        enter-active-class=" transition transform  duration-700 ease-out"
                        enter-to-class="translate-x-0 opacity-100" leave-from-class="opacity-100"
                        leave-active-class="transition transform  duration-300 ease-in" leave-to-class="opacity-0"> -->
                        <h1 v-if="md" text="5xl light" font="bold"> Event Maker</h1>
                    <!-- </Transition> -->
                    <span text="2xl  gray-300">ادارة حضور الاحداث لم تكن بهذه السهولة من قبل!</span>
                    <button py="5" w="4/5" border="0 rounded-md" text="black bold" font="bold"> ابدا الان</button>
                </div>
                <Swiper :modules="[SwiperAutoplay]" :loop="true" :speed="1000" :autoplay="{ delay: 3000, }"
                    grid="~ gap-2" justify="center" items="center" w="1/2" dir="ltr" text="white" cursor="grabbing">
                    <SwiperSlide v-for="slide in 5" :key="slide">
                        <div bg="#D9D9D9" alt="calendar" w="180px" h="180px"></div>
                        <h1 text="2xl">حفل استقبال طلبة المرحلة الاولى</h1>
                        <span text="md">2202-12-01</span>
                        <p text="md" mb="3">كلية علوم الحاسوب - جامعة البصرة</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div py="12" px="22">
            <ServiceCards />
            <ServiceIncomingEvents />
            <ServiceSupports />
        </div>
    </div>
</template>
<script setup>
</script>
