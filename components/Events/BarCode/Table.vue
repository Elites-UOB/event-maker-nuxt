<template>
    <table w="full md:10/12" grid="~ 3-cols">
        <thead w="full">
            <tr text="right" color="#676767">
                <th w="full">الاسم</th>
                <th w="full">الصفة</th>
                <th w="full">الوقت</th>
            </tr>
        </thead>
        <tbody w="full">
            <tr text="right" v-for="row in 3" :key="row">
                <td w="full" text="xs md:sm lg:md">فلان فلان الفلان</td>
                <td w="full" ml="5" class="vip">vip</td>
                <td w="full">12:12</td>
            </tr>
        </tbody>
    </table>
</template>

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