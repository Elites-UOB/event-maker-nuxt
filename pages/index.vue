<template>
    <div>
        <!-- header -->
        <header bg="#0B84FF">
            <div flex="~" justify="between" h="525px" py="12" w="80%" m="auto" items="center">
                <div grid="~ col-1 gap-11" justify="between">
                    <h1 text="5xl  light" font="bold"> Event Maker</h1>
                    <span text="2xl  gray-300">ادارة حضور الاحداث لم تكن بهذه السهولة من قبل!</span>
                    <button py="5" w="4/5" border="0 rounded-md" text="black bold" font="bold"> ابدا الان</button>
                </div>
                <Swiper :modules="[SwiperAutoplay]"  :loop="true" :speed="1000"
                    :autoplay="{ delay: 3000, }"
                    grid="~ gap-2" justify="center" items="center" w="1/2" dir="ltr" text="white">
                    <SwiperSlide v-for="slide in 5" :key="slide">
                        <div bg="#D9D9D9" alt="calendar" w="180px" h="180px"></div>
                        <h1 text="2xl">حفل استقبال طلبة المرحلة الاولى</h1>
                        <span text="md">2202-12-01</span>
                        <p text="md" mb="3">كلية علوم الحاسوب - جامعة البصرة</p>
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </header>
        <!-- event Benefits -->
        <section w="60%" m="auto" py="30">
            <div flex="~ " justify="between" items="center" text="gray-300  xl center">
                <div >
                    <img src="~/public/Vector.svg" alt="Vector" w="60px" h="60px" mb="7"/>
                    <h1>تسهيل تنظيم الاحداث والتسجيل والدعوات.</h1>
                </div>
                <div >
                    <img src="~/public/Vector1.svg" alt="Vector" w="60px" h="60px" mb="7"/>
                    <h1> توليد وطباعة بطاقات الدخول للحضور وفريق العمل .</h1>
                </div>
                <div >
                    <img src="~/public/Vector2.svg" alt="Vector" w="60px" h="60px" mb="7"/>
                    <h1>
                        مسح بطاقات الحضور والتاكيد منحضور المدعوين.
                    </h1>
                </div>
            </div>

        </section>
        <!-- events -->
        <section flex="~" justify="center" items="center" h="full">
            <NuxtLink to="/events/detail" flex="~ col gap-12" mt="16" justify="around" items="center" m="auto" w="3/4">
                <EventsEventContainer v-for="event in 6" :key="event" event="event" class=" relative "
                    content="حفل افتتاح الطلبة الجدد " enterprise="نادي النخبة المطورين" image="this is an image" />
            </NuxtLink>
        </section>
        <!-- Supporters -->
        <!-- footer -->
    </div> 
</template>
<script setup>
// const events = ref()
// events.value = await fetch('http://localhost:3000/events').then(res => res.json())
</script>