<template>
    <CostumeContainer flex="~"  gap="14 md:8" justify="evenly" items="center" w="full" p="15"
        class="flex-wrap text-center leading-7">
        <section flex="~ col" justify="center" items="center" gap="4" w="70" text="white" p="4">
            <Icon name="mdi-calendar-edit" text="6xl" />
            <p>تسهيل تنظيم الأحداث والتسجيل والدعوات.</p>
        </section>
        <section flex="~ col" justify="center" items="center" gap="4" w="70" text="white" p="4">
            <Icon name="ri:file-user-fill" text="white 6xl" />
            <p>توليد وطباعة بطاقات الدخول للحضور وفريق العمل.</p>
        </section>
        <section flex="~ col" justify="center" items="center" gap="4" w="70" text="white" p="4">
            <Icon name="fa-solid:user-friends" text="white 6xl" />
            <p>مسح بطاقات الحضور والتأكد من حضور المدعوين.</p>
        </section>
    </CostumeContainer>

    <CostumeContainer flex="~" justify="between" w="4/6  md:1/2" class="mx-auto font-arabic" my="5">
        <h1 text="white">أحداث قادمة</h1>
        <h1 text="#background: #676767">استكشف المزيد</h1>
    </CostumeContainer>
</template>

<script setup>
</script>