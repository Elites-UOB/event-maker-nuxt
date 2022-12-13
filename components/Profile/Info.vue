<template>
    <CostumeContainer w="full" flex="~ col" justify="evenly" items="center" p="y-2 x-5">
        <CostumeBox w="full" flex="~ col" items="around" gap="8">
            <div flex="~" text="light " items="start">
                <div flex="~ col gap-5" justify="between" h="72" items="start">
                    <div flex="~ col-2 gap-10">
                        <div class="opacity-40">
                            المعلومات
                        </div>
                        <div flex="~ col gap-2">
                            <h2 text="gray-100 md:md"> الاسم </h2>
                            <div flex="~ " text="sm  md:lg" mb="6">
                                <h8 :class="openin ? 'hidden' : 'visible'"> نادي النخبة المطورين </h8>
                                <input :class="openin ? 'visible' : 'hidden'" w="30 md:40" text="light" bg="dark"
                                    border="0 rounded" mx="1" p="1" />
                                <!-- <Icon v-if="openin" name="icon-park-solid:correct" text="1.2em" /> -->
                                <Icon v-if="!openin ? 'name=material-symbols:edit' : 'name=icon-park-solid:correct'"
                                    @click="openin = !openin" name="material-symbols:edit" />
                            </div>
                            <h2 text="gray-100 sm md:md">الوصف </h2>
                            <div flex="~" text="sm md:md">
                                <h8 w="35 sm:full" :class="opentx ? 'hidden' : 'visible'"> زين يكول هذا الحدث كذا وكذا
                                    ونتشكر منهم
                                    وجيبو شغلاتكم </h8>
                                <textarea :class="opentx ? 'visible' : 'hidden'" w="35 md:full" h="16 md:full"
                                    text="light" bg="dark" border="0 rounded" mx="1" />
                                <Icon v-if="!opentx ? 'name=material-symbols:edit' : 'name=icon-park-solid:correct'"
                                    @click="opentx = !opentx" name="material-symbols:edit" />
                            </div>
                        </div>
                    </div>
                    <div flex="~ col-2 gap-10" p="y-2 x-5">
                        <div class="opacity-40">
                            الحساب </div>
                        <div flex="~ col gap-2">
                            <h2 text="gray-100 sm "> البريد الالكتروني </h2>
                            <input type="email" v-model="input.email" bg="#27292B" border="rounded-md light opacity-20"
                                focus="border-success" text="light sm" p="1" />
                            <h2 text="gray-100 sm "> كلمة المرور </h2>
                            <input type="password" v-model="input.password" bg="#27292B"
                                border="rounded-md light opacity-20" focus="border-success" text="light sm" p="1" />
                            <h2 text="gray-100 sm "> أعادة كلمة المرور </h2>
                            <input type="password" v-model="input.password" bg="#27292B"
                                border="rounded-md light opacity-20" focus="border-success" text="light sm" p="1" />
                        </div>
                    </div>
                </div>
            </div>
        </CostumeBox>
        <CostumeBox w="full" py="30">
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
const openin = ref(false);
const opentx = ref(false);
const props = defineProps(['input']);

</script>