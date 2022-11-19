<template>
    <div flex="~" text="light md" items="start">
        <div flex="~ col gap-12" justify="between" h="72" items="center">
            <!--  -->
            <div flex="~ col-2 gap-16">
                <div class="opacity-40">
                    عن الحدث
                </div>
                <div flex="~ col gap-4">
                    <h2>نادي النخبة المطورين </h2>
                    <div flex="~" text="xl">
                        <h1>حفل افتتاح الطلبة الجدد </h1>
                        <Icon name="material-symbols:edit" />
                    </div>
                    <div flex="~">
                        <div w="72"> زين يكول هذا الحدث كذا وكذا ونتشكر منهم وجيبو شغلاتكم </div>
                        <Icon name="material-symbols:edit" />
                    </div>
                </div>
            </div>
            <!--  -->
            <div flex="~ col-2 gap-16">
                <div class="opacity-40">
                    مدة الحدث
                </div>
                <div flex="~ col gap-4">
                    <div flex="~ col gap-2">
                        <h2 class="opacity-40">تاريخ بدء الحدث </h2>
                        <div flex="~ gap-6" bg="light opacity-20" border="0 rounded-xl" px="4" py="3">
                            <div>05</div>
                            <div>05</div>
                            <div>2022</div>
                        </div>
                    </div>
                    <div flex="~ col gap-2">
                        <h2 class="opacity-40">تاريخ انتهاء الحدث </h2>
                        <div flex="~ gap-6" bg="light opacity-20" border="0 rounded-xl" px="4" py="3">
                            <div>05</div>
                            <div>05</div>
                            <div>2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <div flex="~ col-2 gap-16">
                <div class="opacity-40">
                    رابط الحدث
                </div>
                <div flex="~ col gap-4">
                    <div>
                        الرابط
                        <div mt="2">evento.me/fs34GT765
                            <Icon name="material-symbols:edit" />
                            <Icon name="material-symbols:refresh" />
                        </div>
                    </div>
                    <div>
                        نوع الرابط
                        <div mt="2">
                            <!-- dropdown -->
                            <va-button-dropdown bg="#27292B"   onclick="border-success" label="خاص " class="mr-2 mb-2">
                                <div>عام</div>
                            </va-button-dropdown>
            </div>
                    </div>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
</template>
<script setup>
const options = [
    { value: '1', label: 'Public' },
    { value: '2', label: 'Private' },
    { value: '3', label: 'Invite Only' },
]
</script>