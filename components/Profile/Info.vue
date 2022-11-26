<template>
    <CostumeContainer w="full" flex="~ col" justify="evenly" items="center" p="2" >
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
            <ServiceIncomingEvents :eventNumber="3"  flex="~" class="flex-wrap"   />
        </CostumeBox>
    </CostumeContainer>
</template>

<script setup>
const { user } = useAuth();
</script>