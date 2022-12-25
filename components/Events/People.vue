<template>
    <CostumeContainer flex="~" justify-between items-start  gap="20">
        <h3 text="#676767 12px sm:sm md:md lg:lg xl:xl" mt="2" class="hidden md:block">المتقدمين</h3>
        <table  w="full">
            <thead w="full" text="xs sm:sm md:md">
                <tr text="#676767 12px sm:sm md:md lg:lg xl:xl" w="full">
                    <th text="right">الاسم</th>
                    <th text="right">الايميل</th>
                    <th text="right"></th>
                </tr>
            </thead>
            <tbody w="full">
                <tr v-for="person in People" :key="person" class="table-row" h="60px" flex="~" text="white right" border-b="1px solid #333">
                    <td text="right 15px md:lg lg:xl xl:2xl">{{ person.name  }}</td>
                    <td text="right 15px md:lg lg:xl xl:2xl">{{ person.email }}</td>
                    <td w="100%" flex="~" justify="center" items="center"  text="white sm md:md xl:lg">
                        <button cursor="pointer" bg="dark" class="bg-opacity-20 accept" py="2 md:3" text="light" px="2 sm:4 md:6" border="transparent opacity-10 rounded-r-xl" hover="bg-success">قبول</button>
                        <button cursor="pointer" bg="dark" class="bg-opacity-20 reject" py="2 md:3" text="light" px="2 sm:4 md:6" border="opacity-10 rounded-l-xl r-0" hover="bg-error">رفض</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </CostumeContainer>
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

<style>
.reject {
    border-color: transparent  !important;
}

.accept {
    border-color: transparent transparent transparent #333333 !important;
}
</style>