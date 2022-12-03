<template>
    <div flex="~" text="light " items="start" pb="3">
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
                        <select class="select-selected" w="25" bg="#212121" text="white" py="1.5" border="1px solid #212121 rounded-md">
                            <option value="حضور" text="حضور">حضور</option>
                            <option value="vip" text="vip" flex="~" justify="center" items="center" w="full">vip</option>
                        </select>
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
                                    <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3" title="طباعة"
                                        border="1 light opacity-10 rounded-xl" hover="bg-success">
                                        <Icon name="material-symbols:print" text="2xl" />
                                    </button>
                                    <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3" title="حذف"
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
                                    <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3" title="طباعة"
                                        border="1 light opacity-10 rounded-xl" hover="bg-success">
                                        <Icon name="material-symbols:print" text="2xl" />
                                    </button>
                                    <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3" title="حذف"
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
const props = defineProps(['event'])
</script>