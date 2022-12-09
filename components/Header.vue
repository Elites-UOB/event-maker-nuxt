<template>
    <nav flex="~ " justify="end md:between" px="5 lg:10 xl:15" h="15" items="center" bg="#1E1E1E" font="sans" w="100%">
        <NuxtLink to="/" un-text="3xl  white" font="black" :class="DetailRoute ? 'hidden md:block' : 'block'" w="full md:1/12">EVENTO</NuxtLink>
        <!-- container holds the content in the middle and the end -->
        <div w="100%" h="100%" flex="~" justify="evenly" items="center" class="!hidden !md:flex">
            <ul flex="~ " gap="9" mx="2" justify="center" font="bold" text="md:sm lg:lg xl:xl" w="100%">
                <NuxtLink v-for="nav in navs" :key="nav.name" :to="nav.path" cursor="pointer" un-text="light lg"
                    hover="text-[#0B84FF]">{{ nav.name }}</NuxtLink>
            </ul>
            <!-- container holds the profile information -->
            <NuxtLink v-if="isLoggedIn()" to="/auth/profile"  border="1 rounded-md light" flex="~" w="59" 
                justify="between" items="center">
                <div>
                    <img src="../public/fluent-emoji_man-beard-medium.png" alt="user image">
                </div>
                <div flex="~" px=".5em" items="center">
                    <div>
                        <p text="white sm" w="20">user name</p>
                    </div>
                    <div @click="toggleArrowDown()" cursor="pointer" ref="arrowDownRef" self="center">
                        <Icon class="" text="2xl" name="ic-baseline-keyboard-arrow-down" />
                    </div>
                </div>
            </NuxtLink>
            <!-- JOIN BUTTON -->
            <NuxtLink to="/auth/sign" :class="isLoggedIn() ? 'hidden' : 'visible'" un-text="white center" 
                border="1 rounded-md" py="3" px="4" w="22" mr="3" hover="border-[#0B84FF]">انضمام</NuxtLink>
            <AuthLogInButton />
        </div>
        <!-- HUMBERGER ICON -->
        <Icon @click="toggleSidebar()" cursor="pointer" name="ic-baseline-menu" text="light 2xl" justify-self="start" w="1.8em" class="!md:hidden" />
        <div ref="sidebarRef" w="full" h="full"
            class="fixed top-0  bottom-0 right-0 left-0 z-3 block md:hidden hideSideBar"
            transition="all ease-in-out 0.3s">
            <Sidebar :toggleSidebar="toggleSidebar" />
            <!--SIDEBAR -->
        </div>
    </nav>
</template>

<script setup>
const arrowDownRef = ref(null)
const sidebarRef = ref(null)
const route = useRoute()
const DetailRoute = route.fullPath.includes('events/detail')

const navs = ref([
    { name: 'الصفحة الرئيسية', path: '/' },
    { name: 'الاحداث ', path: '/events' },
])

const toggleSidebar = () => {
    sidebarRef.value.classList.toggle('hideSideBar')
}

const toggleArrowDown = () => {
    arrowDownRef.value.classList.toggle('rotate')
}

const { isLoggedIn, signOut, user } = useAuth()
</script>

<style>
.rotate {
    transform: rotate(180deg);
}

.hideSideBar {
    right: 100%;
    transition: all ease-in-out 0.3s;
}

.appearHamburger {
    color: white;
}
</style>