<template>
    <table w="full md:10/12" grid="~ 3-cols">
        <thead w="full">
            <tr text="right 13px sm:sm md:md lg:lg xl:xl" color="#676767">
                <th w="full">الاسم</th>
                <th w="full">الصفة</th>
                <th w="full">الوقت</th>
            </tr>
        </thead>
        <tbody w="full">
            <tr text="right" v-for="row in 3" :key="row" relative border-b="1 #676767 solid">
                <td w="full" text="13px sm:sm md:md lg:lg xl:xl">فلان فلان الفلان</td>
                <td w="full" ml="5" class="vip" text="13px sm:sm md:md lg:lg xl:xl">vip</td>
                <td w="full" text="13px sm:sm md:md lg:lg xl:xl">12:12</td>
            </tr>
        </tbody>
    </table>
</template>
p
<style scoped>
td,
tr,
th {
    padding: 1.5em;
}

.vip {
    padding-left: 2.5em;
}

</style>