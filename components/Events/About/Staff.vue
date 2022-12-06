<template>
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

</template>