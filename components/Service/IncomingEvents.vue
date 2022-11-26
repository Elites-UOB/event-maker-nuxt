<template>
    <CostumeContainer flex="~" justify="center md:evenly" gap="8" class="flex-wrap md:flex-wrap " my="10" mx="16">
        <section v-for="event in 4" :key="event" flex="~ col" justify="between" pb="3" border="1px solid #33333 rounded-xl" w="233px" h="281px"
            class="text-right ">
            <img src="/eve.png" max-w="full" border="rounded-xl">
            <div  mt="3" px="2">
                <h3 text="white lg" font="bold" p="2" w="3/4">حفل استقبال طلبة المرحلة الأولى</h3>
                <span p="1" text="#FFFFFF sm">2022 - 12 - 01</span>
                <p p="2" text="#FFFFFF sm">كلية علوم الحاسوب - جامعة البصرة</p>
            </div>
            <button bg="white" text="black center " font="bold"   mx="3" py="4" px="20" border="0 rounded-lg">المزيد</button>
        </section>
    </CostumeContainer>
</template>