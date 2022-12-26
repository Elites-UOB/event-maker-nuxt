<template>
    <div flex="~" text="light 1.5em" items="start">
        <div flex="~ col gap-8" justify="between" h="72" items="start">
            <div flex="~ col-2 gap-10">
                <div class="opacity-40 hidden md:block">
                    عن الحدث
                </div>
                <div flex="~ col gap-2">
                    <h2>نادي النخبة المطورين</h2>
                    <div flex="~ gap-3">
                        <h1>حفل افتتاح الطلبة الجدد</h1>
                        <Icon name="material-symbols:edit" class="icon" />
                    </div>
                    <div flex="~" justify="around" w="full">
                        <div>زين يكول هذا الحدث كذا وكذا ونتشكر منهم وجيبو شغلاتكم</div>
                        <Icon name="material-symbols:edit" class="icon" />
                    </div>
                </div>
            </div>
            <div flex="~ col-2 gap-10" text="20px">
                <div class="opacity-40 hidden md:block">
                    مدة الحدث
                </div>
                <div flex="~ col gap-4">
                    <div flex="~ col gap-2">
                        <h2 class="opacity-40 text-sm">تاريخ بدء الحدث </h2>
                        <div flex="~ gap-6" bg="#676767 opacity-20" border="0 rounded-xl" px="4" py="3">
                            <div>05</div>
                            <div>05</div>
                            <div>2022</div>
                        </div>
                        <!-- <va-date-input v-model="range" /> -->
                    </div>
                    <div flex="~ col gap-2">
                        <h2 class="opacity-40 text-sm">تاريخ انتهاء الحدث </h2>
                        <div flex="~ gap-6" bg="#676767 opacity-20" border="0 rounded-xl" px="4" py="3">
                            <div>05</div>
                            <div>05</div>
                            <div>2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <div flex="~ col-2 gap-4">
                <div class="opacity-40 hidden md:block">
                    رابط الحدث
                </div>
                <div flex="~ col gap-4">
                    <div>
                        <h1 class="opacity-40 text-20px">الرابط</h1>
                        <div flex="~  gap-3" mt="2">evento.me/fs34GT765
                            <Icon name="ic:twotone-refresh"  text="3xl" class="flip icon" />
                            <Icon name="material-symbols:edit" text="3xl" class="icon" />
                        </div>
                    </div>
                    <div>
                        <h1 class="opacity-40" text="20px">نوع الرابط</h1>
                        <div mt="2" bg="transparent" w="full" class="opacity-40">
                           <select border="1px solid rounded-15px  #212121" py="2" w="4/6" bg="transparent" text="light" name="event-type">
                                <option selected value="خاص" class="opacity-40" bg=" #212121">خاص</option>
                                <option value="عام" class="opacity-40" bg=" #212121">عام</option>
                           </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
option:hover {
    background-color: #1E1E1E;
}

.flip {
    transform: rotateY(160deg);
}

select {
    caret-color: white;
}

.icon {
    cursor: pointer;
}

.icon:hover {
    color: rgba(255, 255, 255, 0.556);
}

</style>