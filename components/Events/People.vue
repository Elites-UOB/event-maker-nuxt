<template>
    <table w="full">
        <thead w="full" text="xs sm:sm md:md" relative> 
            <tr text="#676767" w="full">
                <th text="right" display="none md:block">المتقدمين</th>
                <th text="right">الاسم</th>
                <th text="right">الايميل</th>
            </tr>
        </thead>
        <tbody class="relative" w="full" text="10px sm:sm md:md xl:lg">
            <tr v-for="person in 5" :key="person" class="table-row relative first:before:hidden" w="full" h="60px"
                my="3em" text="white right">
                <td display="none md:block"></td>
                <td text="right" mx="5">فلان ابن فلان</td>
                <td text="right" mx="5">helloworld@gmail.com</td>
                <td flex justify="center" items="center">
                    <button cursor="pointer" text="light md" bg="dark" class="bg-opacity-20" py="2 md:3" px="3 sm:4 md:6"
                        border="1 light opacity-10 rounded-r-xl" hover="bg-success">قبول</button>
                    <button cursor="pointer" text="light md" bg="dark" class="bg-opacity-20" py="2 md:3" px="3 sm:4 md:6"
                        border="1 light opacity-10 rounded-l-xl " hover="bg-error">رفض</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>