<template>
    <div flex="~" text="light " items="start" py="5em">
        <div flex="~ col gap-12" items="start">
            <!--  -->
            <div flex="~ col-2 gap-22">
                <div class="opacity-40">
                    الاضافة
                </div>
                <div flex="~ col-3 gap-8" justify="between" items="end">
                    <div flex="~ col gap-1">
                        <label>الايميل</label>
                        <input type="name" bg="#27292B" border="rounded-md light  opacity-20" hover=" border-success"
                            text="light" py="2" px="8" w="96" />
                    </div>
                    <div flex="~ col gap-1">
                        <label>الصفة </label>
                        <button @click="open = !open" bg="#27292B" border="rounded-md light opacity-20" text="light"
                            hover=" border-success" py="2" px="12"> vip</button>
                        <!-- <div v-if="open">not vip</div> -->
                    </div>
                    <div>
                        <ButtonsBt contant="اضافة" />
                    </div>
                </div>
            </div>
            <!--  -->
            <div flex="~ col-2 gap-22">
                <div class="opacity-40">
                    الادوات
                </div>
                <div flex="~ col-3 gap-8" justify="between" items="end">
                    <div>
                        <ButtonsBt contant="ارسال بريد" />
                    </div>
                    <div>
                        <ButtonsBt contant="طباعة البطاقات" />
                    </div>
                    <div>
                        <ButtonsBt contant="طباعة القائمة" />
                    </div>
                </div>
            </div>
            <!--  -->
            <div flex="~ col-2 gap-22">
                <div class="opacity-40">
                    فريق العمل
                </div>
                <div class="text-light">
                    <div class="" flex="~ col" justify="center" items="stert">
                        <div class="opacity-40">
                            <div flex="~ " justify="between" w="115">
                                <div>الاسم</div>
                                <div>الصفة</div>
                                <div></div>
                            </div>
                        </div>
                        <div flex="~ col gap-3" mt="2">
                            <div v-for="user in 2" :key="user" flex="~ col-3 gap-35" items="center"
                                border="b  light opacity-20" pb="2">
                                <div>فلان ابن فلان </div>
                                <div>اعلامي</div>
                                <div flex="~ gap-2">
                                    <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3"
                                        border="1 light opacity-10 rounded-xl" hover="bg-success">
                                        <Icon name="material-symbols:print" text="2xl" />
                                    </button>
                                    <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3"
                                        border="1 light opacity-10 rounded-xl " hover="bg-error">
                                        <Icon name="ant-design:user-delete-outlined" text="2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <div flex="~ col-2 gap-22">
                <div class="opacity-40">
                    المدعوين
                </div>
                <div class="text-light">
                    <div class="" flex="~ col" justify="center" items="stert">
                        <div class="opacity-40">
                            <div flex="~ " justify="between" w="115">
                                <div>الاسم</div>
                                <div>الصفة</div>
                                <div></div>
                            </div>
                        </div>
                        <div flex="~ col gap-3" mt="2">
                            <div v-for="user in 2" :key="user" flex="~ col-3 gap-35" items="center"
                                border="b  light opacity-20" pb="2">
                                <div>فلان ابن فلان </div>
                                <div>حضور
                                    <Icon name="material-symbols:edit" text="xl" />
                                </div>
                                <div flex="~ gap-2">
                                    <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3"
                                        border="1 light opacity-10 rounded-xl" hover="bg-success">
                                        <Icon name="material-symbols:print" text="2xl" />
                                    </button>
                                    <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3"
                                        border="1 light opacity-10 rounded-xl " hover="bg-error">
                                        <Icon name="ant-design:user-delete-outlined" text="2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const open = ref(false)
const props = defineProps(['event'])
</script>
