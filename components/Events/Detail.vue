<template>
    <div flex="~" text="light " items="start">
        <div flex="~ col gap-8" justify="between" h="72" items="start">
            <div flex="~ col-2 gap-10">
                <div class="opacity-40">
                    عن الحدث
                </div>
                <div flex="~ col gap-2">
                    <h2>نادي النخبة المطورين </h2>
                    <div flex="~ gap-3" text="xl">
                        <h1>حفل افتتاح الطلبة الجدد </h1>
                        <Icon name="material-symbols:edit" />
                    </div>
                    <div flex="~">
                        <div> زين يكول هذا الحدث كذا وكذا ونتشكر منهم وجيبو شغلاتكم </div>
                        <!-- <Icon name="material-symbols:edit" /> -->
                    </div>
                </div>
            </div>
            <div flex="~ col-2 gap-10">
                <div class="opacity-40">
                    مدة الحدث
                </div>
                <div flex="~ col gap-4">
                    <div flex="~ col gap-2">
                        <h2 class="opacity-40 text-sm">تاريخ بدء الحدث </h2>
                        <div flex="~ gap-6" bg="light opacity-20" border="0 rounded-xl" px="4" py="3">
                            <div>05</div>
                            <div>05</div>
                            <div>2022</div>
                        </div>
                        <!-- <va-date-input v-model="range" /> -->
                    </div>
                    <div flex="~ col gap-2">
                        <h2 class="opacity-40 text-sm">تاريخ انتهاء الحدث </h2>
                        <div flex="~ gap-6" bg="light opacity-20" border="0 rounded-xl" px="4" py="3">
                            <div>05</div>
                            <div>05</div>
                            <div>2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <div flex="~ col-2">
                <div class="opacity-40">
                    رابط الحدث
                </div>
                <div flex="~ col gap-4">
                    <div>
                        <h1 class="opacity-40 text-sm"> الرابط</h1>
                        <div flex="~  gap-3" mt="2">evento.me/fs34GT765
                            <Icon name="material-symbols:refresh" text="xl" />
                            <Icon name="material-symbols:edit" text="xl" />
                        </div>
                    </div>
                    <div>
                        <h1 class="opacity-40 text-sm">نوع الرابط</h1>
                        <div mt="2">
                            <select bg="blue" border="rounded 1 opacity-20 success" class="mr-2 mb-2 text-white" px="4" py="1" >
                                <option selected value="خاص" hover="white">خاص</option>
                                <option value="عام" hover="white">عام</option>
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
</style>