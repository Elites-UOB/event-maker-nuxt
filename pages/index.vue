<template>
    <div>
        <header bg="#0B84FF">
            <div flex="~" justify="between" h="525px" py="12" w="80%" m="auto" items="center">
                <div grid="~ col-1 gap-11" justify="between">
                    <h1 text="5xl light" font="bold">Event Maker</h1>
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
        </header>
        <div py="12" px="22">
            <ServiceCards />
            <div flex="~" justify="between" w="4/6  md:1.7/2" class="mx-auto" my="2">
                <h1 text="white 2xl bold">أحداث قادمة</h1>
                <h1 text="#background: #676767 2xl">استكشف المزيد</h1>
            </div>
            <ServiceIncomingEvents :eventNumber="4"  />
            <ServiceSupports /> 
        </div>
        <Footer />
    </div>
</template>
<script setup>
</script>
