<template>
    <table w="full">
        <thead w="full" text="xs sm:sm md:md" relative>
            <tr text="#676767 12px sm:sm md:md lg:lg xl:xl" w="full">
                <th text="right" display="none md:block">المتقدمين</th>
                <th text="right">الاسم</th>
                <th text="right">الايميل</th>
            </tr>
        </thead>
        <tbody class="relative" w="full">
            <tr v-for="person in People" :key="person" class="table-row relative first:before:hidden" w="full" h="60px"
                flex="~ gap-4" border-b="1 solid #676767" my="3em" text="white right">
                <td display="none md:block"></td>
                <td text="right 12px sm:sm md:md lg:lg xl:xl">{{ person.name }}</td>
                <td text="right 12px sm:sm md:md lg:lg xl:xl">{{ person.email }}</td>
                <td w="100%" flex="~" justify="center" items="center"  text="white 10px sm:sm md:md xl:lg">
                    <button cursor="pointer" bg="dark" class="bg-opacity-20" py="2 md:3" text="light"
                        px="2 sm:4 md:6" border="1 light opacity-10 rounded-r-xl" hover="bg-success">قبول</button>
                    <button cursor="pointer" bg="dark" class="bg-opacity-20" py="2 md:3" text="light"
                        px="2 sm:4 md:6" border="1 light opacity-10 rounded-l-xl " hover="bg-error">رفض</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const People = ref([
    {
        name: 'hassan',
        email: 'helloWorld@gmail.com'
    },
    {
        name: 'hassan',
        email: 'helloWorld@gmail.com'
    },
    {
        name: 'hassan',
        email: 'helloWorld@gmail.com'
    },
    {
        name: 'hassan',
        email: 'helloWorld@gmail.com'
    },
])
</script>