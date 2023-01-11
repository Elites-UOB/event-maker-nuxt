<template>
    <CostumeContainer w="full" flex="~ col" justify="evenly">

        <!-- CONTAINER BIO -->

        <CostumeBox w="full" flex="~ col" items="around" gap="8" px=" md:25">
            <div flex="~" text="light " items="start">
                <div flex="~ col gap-5" justify="between" h="72" items="start">
                    <div flex="~ col-2 gap-10">
                        <div class="opacity-40">المعلومات</div>
                        <div flex="~ col gap-2">
                            <h2 text="gray-100 md:md"> الاسم </h2>
                            <div flex="~ gap-4" text="sm  md:lg" mb="6" justify="start">
                                <h4 :class="openin ? 'hidden' : 'visible'"> {{ user.email.slice(0, 8) }}</h4>
                                <input :class="openin ? 'visible' : 'hidden'" w="30 md:40" text="light" bg="dark" border="0 rounded" mx="1" p="1" />
                                <!-- <Icon v-if="openin" name="icon-park-solid:correct" text="1.2em" /> -->
                                <Icon v-if="!openin ? 'name=material-symbols:edit' : 'name=icon-park-solid:correct'" size="20" @click="openin = !openin" name="material-symbols:edit" />
                            </div>
                            <h2 text="gray-100 sm md:md">الوصف </h2>
                            <div flex="~" text="sm md:md">
                                <h6 w="full sm:full" :class="opentx ? 'hidden' : 'visible'"> زين يكول هذا الحدث كذا وكذا ونتشكر منهم وجيبو شغلاتكم </h6>
                                <textarea :class="opentx ? 'visible' : 'hidden'" w="35 md:full" h="16 md:full" text="light" bg="dark" border="0 rounded" mx="1" />
                                <Icon v-if="!opentx ? 'name=material-symbols:edit' : 'name=icon-park-solid:correct'" size="20" @click="opentx = !opentx" name="material-symbols:edit" />
                            </div>
                        </div>
                    </div>
                    <div flex="~ col-2 gap-10" p="y-2 x-5" w="full">
                        <div class="opacity-40">الحساب</div>
                        <div flex="~ col gap-2" w="full">
                            <h2 text="gray-100 sm ">البريد الالكتروني</h2>
                            <input type="email" v-model="input.email" bg="transparent" border="rounded-md 2px gray-600" focus="border-success" text="light sm" p="1" />
                            <h2 text="gray-100 sm ">كلمة المرور</h2>
                            <input type="password" v-model="input.password" bg="transparent" border="rounded-md 2px gray-600" focus="border-success" text="light sm" p="1" />
                            <h2 text="gray-100 sm ">أعادة كلمة المرور</h2>
                            <input type="password" v-model="input.password" bg="transparent" border="rounded-md 2px gray-600" focus="border-success" text="light sm" p="1" />
                        </div>
                    </div>
                </div>
            </div>
        </CostumeBox>

        <!-- CONTAINER MY EVENTS -->

        <CostumeBox w="full" py="30" mx="auto">
            <h1 text="3xl" px="20">أحداثي</h1>
            <div w="full" mx="auto">
                <div grid="~ col-1 gap-4 sm:cols-2  md:cols-3 md:gap-5 lg:cols-4 lg:gap-2 gap-y-4" max-w-7xl py="10" items="center" justify="evenly" px="2" mx="auto" >
                    <EventsAddEvent  />
                    <ServiceEventCard v-for="event in 11" :key="event" class="event-card"/>
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