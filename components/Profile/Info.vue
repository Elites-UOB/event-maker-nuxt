<template>
    <CostumeContainer w="full" flex="~ col" justify="evenly" items="center" p="2">
        
        <CostumeBox w="full" flex="~ col" items="around" gap="8">
            
            <div flex="~" text="light " items="start">
                <div flex="~ col gap-5" justify="between" h="72" items="start">
                    <div flex="~ col-2 gap-10">
                        <div class="opacity-40">
                            المعلومات
                        </div>
                        <div flex="~ col gap-2">
                            <h2 text="gray-100"> الاسم </h2>
                            <div flex="~ gap-3" text="xl" mb="6">
                                <h1> نادي النخبة المطورين </h1>
                                <Icon name="material-symbols:edit" />
                            </div>
                            <h2 text="gray-100">الوصف </h2>
                            <div flex="~">
                                <div> زين يكول هذا الحدث كذا وكذا ونتشكر منهم وجيبو شغلاتكم </div>
                                <Icon name="material-symbols:edit" text="xl" />
                            </div>
                        </div>
                    </div>
                    <div flex="~ col-2 gap-10">
                        <div class="opacity-40">
                            الحساب </div>
                        <div flex="~ col gap-2">
                            <h2 text="gray-100"> البريد الالكتروني </h2>
                            <!-- <input type="email" v-model="input.email" bg="#27292B" border="rounded-md light opacity-20"
                                focus="border-success" text="light" p="3" required /> -->
                            <h2 text="gray-100"> كلمة المرور </h2>
                            <!-- <input type="password" v-model="input.password" bg="#27292B"
                                border="rounded-md light opacity-20" focus="border-success" text="light" p="3"
                                required /> -->
                            <h2 text="gray-100"> أعادة كلمة المرور </h2>
                            <!-- <input type="password" v-model="input.password" bg="#27292B"
                                border="rounded-md light opacity-20" focus="border-success" text="light" p="3"
                                required /> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- <section flex="~ col" gap="3">
                <h3 w="full" class="leading-4" color="background: #676767">الاسم</h3>
                <p w="full">نادي النخبة المطورين</p>
            </section>
            <section flex="~ col" gap="3">
                <h3 w="full" class="leading-4" color="background: #676767">الوصف</h3>
                <p w="full">هذا الحدث كذا وكذا وكذا، راجين منكم التفهم وتعالوا للحدث وشغلاتكم وياكم </p>
            </section>
            <section flex="~ col" gap="3">
                <h3 w="full" class="leading-4" color="background: #676767">الايميل</h3>
                <p w="full">{{ user.email }}</p>
            </section> -->
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