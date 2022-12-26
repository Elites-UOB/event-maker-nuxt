<template>
    <CostumeContainer flex="~ gap-12" items="start" w="full" h="full" justify="between">
        <h3 mt="2" text="17px sm:sm md:md lg:lg xl:xl #676767" class="hidden md:block">الحضور</h3>
        <table w="full " grid="~ 3-cols">
            <thead w="full">
                <tr text="right 17px md:md lg:lg xl:xl" color="#676767">
                    <th w="full">الاسم</th>
                    <th w="full" text="right" px="5">الصفة</th>
                    <th w="full" text="right">الوقت</th>
                    <th w="full" class="hidden"></th>
                </tr>
            </thead>
            <tbody w="full" flex="~ col gap-5">
                <tr text="right" v-for="row in 3" :key="row">
                    <td w="full" text="17px md:md lg:lg xl:xl">فلان فلان الفلان</td>
                    <td w="full" ml="5" class="vip" text="17px md:md lg:lg xl:xl">vip</td>
                    <td w="full" text="17px md:md lg:lg xl:xl" class="time">12:12</td>
                    <CostumeDivider w="full" />
                </tr>
            </tbody>
        </table>
    </CostumeContainer>
</template>

<style scoped>


.vip {
    padding-left: 2.5em;
}

.time {
    padding-left: 1.1em;
}

</style>