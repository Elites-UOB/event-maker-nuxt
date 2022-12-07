<template>
    <CostumeContainer w="full" flex="~ col" justify="evenly" items="center" p="2">
        <CostumeBox w="full" flex="~ col" items="around" gap="8">
            <section flex="~ col" gap="3">
                <h3 w="full" class="leading-4" color="background: #676767">الاسم</h3>
                <p w="full">نادي النخبة المطورين</p>
            </section>
            <section flex="~ col" gap="3">
                <h3 w="full" class="leading-4" color="background: #676767">الوصف</h3>
                <p w="full">هذا الحدث كذا وكذا وكذا، راجين منكم التفهم وتعالوا للحدث وشغلاتكم وياكم.ن</p>
            </section>
            <section flex="~ col" gap="3">
                <h3 w="full" class="leading-4" color="background: #676767">الايميل</h3>
                <p w="full">{{ user.email }}</p>
            </section>
        </CostumeBox>
        <CostumeBox w="full" py="20">
            <h1 text="3xl">أحداثي</h1>
            <div flex="~" justify="center" p="12">
                <div flex="~  wrap gap-4" h="fit-content" justify="center">
                    <EventsAdd />
                    <ServiceIncomingEvents v-for="event in 20" :key="event" />
                </div>
            </div>
        </CostumeBox>
    </CostumeContainer>
</template>

<script setup>
const { user } = useAuth();
</script>