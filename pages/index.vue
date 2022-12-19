<template>
    <div w="full">
        <div bg="#0B84FF">
            <div h="400px" flex="~col " justify="cenetr" items="center" md="flex justify-between w-4/5"
                lg="by-12 m-auto w-4/5 ">
                <div p="15" md=" items-start " flex="~ col gap-6 basis-2/3" justify="cenetr" items="center"
                    lg="justify-between gap-8  ">
                    <h1 text="2xl light" font="bold" md="text-4xl" lg="5xl">Event Maker</h1>
                    <span text="md center  gray-300 lg:xl" >ادارة حضور الاحداث لم تكن بهذه السهولة من قبل!</span>
                    <NuxtLink to="/auth/sign" py="3" transition="all ease-in-out 1s"  w="3/5" border="0 rounded-md  " hover=" shadow-lg  shadow-gray-700 "   bg="light"  un-text="black center bold" font="bold" md="py-3" lg="py-4 ">
                        ابدا الان</NuxtLink>
                </div>
                <Swiper :modules="[SwiperAutoplay]" :loop="true" :speed="1000" :autoplay="{ delay: 3000, }"
                    flex="~ gap-2 basis-2/3" lg=" items-center " dir="ltr" text="white" cursor="grabbing">
                    <SwiperSlide v-for="slide in 5" :key="slide">
                        <div flex="~ gap-4" px="6" items="end" justify="center"
                            md="grid gird-cols-1 p-3 justify-between ">
                            <div bg="#D9D9D9" alt="calendar" w="30 md:40 lg:180px" h="100px md:40 lg:180px"></div>
                            <div>
                                <h1 text="lg lg:2xl" md="text-xl">حفل استقبال طلبة المرحلة الاولى</h1>
                                <span text="sm lg:md" md="text-lg">2202-12-01</span>
                                <p hidden md="block text-lg" text="sm lg:md" mb="3">كلية علوم الحاسوب - جامعة البصرة</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div>
            <ServiceCards />
            <div flex="~" justify="between" w="5/6  md:1.5/2" class="mx-auto" my="2">
                <h1 text="white lg bold md:xl lg:2xl">أحداث قادمة</h1>
                <NuxtLink to="/events" un-text="#background: #676767 lg md:xl lg:2xl">استكشف المزيد</NuxtLink>
            </div>
            <div grid="~ col-1 gap-4 sm:cols-2  md:cols-3 md:gap-4 lg:cols-4" w="fit" py="10" justify="center"
                items="center" m="auto">
                <ServiceIncomingEvents v-for="event in 4" :key="event" />
            </div>
            <ServiceSupports />
        </div>
        <Footer/>
    </div>
</template>

<script setup>
</script> 

<style>
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-track {
    background: #110e0e;
}

::-webkit-scrollbar-thumb {
    background: #676767;
}

html {
    scroll-behavior: smooth;
}
</style>