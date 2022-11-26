<template>
    <table w="full">
        <tr text="center" color="#333333" class="before:hidden">
            <th>الحضور</th>
            <th>الاسم</th>
            <th>الصفة</th>
            <th>الوقت</th>
        </tr>
        <tr text="center" class="second-row">
            <td>فلان فلان الفلان</td>
            <td>vip</td>
            <td>12:12</td>
        </tr>
        <tr text="center">
            <td>فلان فلان الفلان</td>
            <td>حضور</td>
            <td>12:12</td>
        </tr>
    </table>
</template>

<style scoped>
td,
tr,
th {
    padding: 1.5em;
}

/* nest absolute pseudo divider for all the children except the first one  */

table tr:not(:first-child) {
    position: relative;
}

table:first-child::before {
    display: none;
    opacity: 0;
}

table tr:not(table:first-child)::before {
    content: "";
    position: absolute;
    top: 4em;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #333;
}
</style>