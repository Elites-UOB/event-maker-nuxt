<template>
    <aside class="h-full w-full p-5 text-white bg-#111111 font-black" transition="all ease-in-out .3s">
        <div h="10" w="full" flex="~" justify="end">
            <Icon id="icon" name="ic-baseline-menu" text="2xl" @click="toggleSidebar()" cursor="pointer" mt="1.8" ml="2.5" class="text-white cursor-pointer hover:text-black hover:bg-white rounded-xl p" hover="bg-white rounded-xl" />
        </div>
        <div flex="~ col" gap="10" items="center" justify="center" h="80%">
            <NuxtLink v-for="nav in navs" :to="nav.link" :key="nav.name" @click="toggleSidebar()">
                <section text="white">{{ nav.name }}</section>
            </NuxtLink>
            <NuxtLink to="/auth/sign" :class="isLoggedIn() ? 'hidden' : 'visible'" @click="toggleSidebar()" >
                <section text="white">انضمام</section>
            </NuxtLink>
            <div v-if="isLoggedIn()" @click="signOut">
                <section text="white">تسجيل الخروج</section>
            </div>
            <NuxtLink to="/auth/profile" v-if="isLoggedIn()" @click="toggleSidebar()">
                <section text="white">Manage Event </section>
            </NuxtLink>
        </div>
    </aside>
</template>

<script setup>
const props = defineProps({
    toggleSidebar: {
        type: Function,
        required: true
    }
})
const { isLoggedIn, signOut, user } = useAuth()

const navs = [
    {
        name: 'الصفحة الرئيسية',
        link: '/'
    },
    {
        name: 'الاحداث',
        link: '/events'
    },

]


</script>