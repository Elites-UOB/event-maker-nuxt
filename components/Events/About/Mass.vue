<template>
    <CostumeBox text="white" w="full" my="10">
        <table w="inherit">
            <thead w="full">
                <tr >
                    <th text="#676767" class="hidden sm:block">المدعوين</th>
                    <th>الاسم</th>
                    <th>الصفة</th>
                    <th></th>
                </tr>
            </thead>
            <tbody w="full">
                <tr v-for="staff in 3" :key="staff" my="2" relative border-b="1 solid #676767">
                    <td class="hidden sm:block"></td>
                    <td text="10px sm:sm md:md lg:lg xl:xl">فلان فلان الفلان</td>
                    <td text="10px sm:sm md:md lg:lg xl:xl">إعلامي</td>
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
</template>

<style>
th {
    width: 20%;
    padding: 0.5rem;
    text-align: right;
}

td {
    width: 20%;
    padding: 0.5rem;
    text-align: right;
    font-size: 10px;
}
</style>