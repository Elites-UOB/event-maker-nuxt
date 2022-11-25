<template>
    <CostumeContainer flex="~" justify="center md:evenly" gap="8" class="flex-wrap md:flex-nowrap " my="15" mx="5">
        <section v-for="event in 4" :key="event" border="1px solid white rounded-xl" w="50" class="text-right">
            <img src="/eve.png" max-w="full" border="rounded-xl">
            <h3 text="white" p="2" w="full">حفل استقبال طلبة المرحلة الأولى</h3>
            <span p="1" text="#FFFFFF sm">2022 - 12 - 01</span>
            <p p="2" text="#FFFFFF sm">كلية علوم الحاسوب - جامع البصرة</p>
            <button></button>
        </section>
    </CostumeContainer>
</template>