<template>
    <CostumeContainer flex="~ col" gap="10">

        <!-- الإضافة -->

        <CostumeBox flex="~ col sm:row md:gap-5 wrap" text="white" justify="between sm:between" items="end md:end"
            my="5">
            <h3 self-start text="#676767">الإضافة</h3>
            <div flex="~ row sm:col gap-4" justify="between" mx="auto sm:0" my="4 sm:0" w="60 sm:auto" items="center">
                <label text="#676767 center">الايميل</label>
                <input type="email" text="white" border="4px solid #212121 rounded-lg" bg="transparent" indent="5" p="2"
                    w="40 lg:60" justify-self-end dir="ltr" />
            </div>
            <div flex="~ row sm:col gap-4" justify="between" mx="auto sm:0" my="4 sm:0" w="60 sm:auto" items="center">
                <label text="#676767" w="90%">الصفة</label>
                <select bg="transparent" border="rounded 2 #212121" class="mr-2 text-white" py="2" px="2 md:5 lg:10">
                    <option selected value="حضور" hover="white" bg="#212121" border="rounded-lg">حضور</option>
                    <option value="vip" hover="white" bg="#212121" border="rounded-lg">vip</option>
                </select>
            </div>
            <div flex="~ col" sm:self-end="self-center" mx="auto sm:0">
                <ButtonsBt content="أضافة" />
            </div>
        </CostumeBox>

        <!-- الأدوات -->

        <CostumeBox flex="~ col sm:row md:gap-5 wrap" text="white" justify="between sm:between" items="end md:end"
            w="full" my="5">
            <h3 self-start text="#676767" my="4">الأدوات</h3>
            <div flex="~ col-3 gap-8" justify="between" items="end">
                <div>
                    <ButtonsBt content="ارسال بريد" />
                </div>
                <div>
                    <ButtonsBt content="طباعة البطاقات" />
                </div>
                <div>
                    <ButtonsBt content="طباعة القائمة" />
                </div>
            </div>
        </CostumeBox>

        <!-- فريق العمل  FIRST TABLE -->

        <CostumeBox text="white" w="full" my="10">
            <table w="inherit">
                <thead w="full">
                    <tr flex="~" justify="between">
                        <th text="#676767">فريق العمل</th>
                        <th>الاسم</th>
                        <th>الصفة</th>
                        <th></th>
                        <th class="md:hidden"></th>
                    </tr>
                </thead>
                <tbody w="full">
                    <tr flex="~" justify="between">
                        <td></td>
                        <td text="center" w="1/4">فلان فلان الفلان</td>
                        <td>إعلامي</td>
                        <td flex="~ gap-3">
                            <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3" title="طباعة"
                                border="1 light opacity-10 rounded-xl" hover="bg-success">
                                <Icon name="material-symbols:print" text="2xl" />
                            </button>
                            <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3" title="حذف"
                                border="1 light opacity-10 rounded-xl " hover="bg-error">
                                <Icon name="ant-design:user-delete-outlined" text="2xl" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CostumeBox>

        <!-- الحضور  SECOND TABLE -->

        <CostumeBox text="white" w="full" my="10">
            <table w="inherit">
                <thead w="full">
                    <tr flex="~" justify="between">
                        <th text="#676767">المدعوين</th>
                        <th>الاسم</th>
                        <th>الصفة</th>
                        <th></th>
                        <th class="md:hidden"></th>
                    </tr>
                </thead>
                <tbody w="full">
                    <tr flex="~" justify="between">
                        <td></td>
                        <td text="center" w="1/4">فلان فلان الفلان</td>
                        <td>إعلامي</td>
                        <td flex="~ gap-3">
                            <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3" title="طباعة"
                                border="1 light opacity-10 rounded-xl" hover="bg-success">
                                <Icon name="material-symbols:print" text="2xl" />
                            </button>
                            <button text="light md" bg="light" class="bg-opacity-20" py="2" px="3" title="حذف"
                                border="1 light opacity-10 rounded-xl " hover="bg-error">
                                <Icon name="ant-design:user-delete-outlined" text="2xl" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CostumeBox>

    </CostumeContainer>
</template>
<script setup>
const props = defineProps(['event'])
</script>

<style scoped>
td {
    border: 1px solid #212121;
}
</style>