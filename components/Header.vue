<template>
    <header flex="~ " justify="between" px="5 lg:10 xl:15" h="18" items="center" bg="#1E1E1E" w="100%" text="xl lg:2xl xl:3xl">
       
        <!-- LOGO -->

        <NuxtLink ref="logo" to="/" un-text="3xl white" flex="~" items="center" font="bold" :class="DetailRoute ? 'hideLogo !md:block' : 'block'" w="30">VENT<img src="~/public/logo2.svg" w="6" h="6" alt="CSIT LOGO" mr-1 /></NuxtLink>

        <!-- CONTAINER HOLD THE CONTENT IN THE MIDDLE AND THE END -->
        <div w="100%" h="100%" flex="~" justify="evenly" items="center" class="!hidden !md:flex">
            <ul flex="~ " gap="9" mx="2" justify="center" font="bold" w="100%" mr="10">
                <NuxtLink v-for="nav in navs" :key="nav.name" :to="nav.path" transition="all ease-in-out 1s" cursor="pointer" un-text="light lg" hover="text-gray-600">{{ nav.name }}</NuxtLink>
            </ul>
            <!-- container holds the profile information -->
            <div v-if="user" class=" flex justify-between items-center border-2 border-solid border-white rounded-md" ml="2">
                <NuxtLink v-if="isLoggedIn()" to="/auth/profile" flex="~" justify="center" items="center">
                    <div class="flex justify-between gap-2">
                        <img src="../public/fluent-emoji_man-beard-medium.png" alt="user image">
                        <p class='visited:text-white h-full' self-center text="white sm md:md lg:lg">{{ user.name ? user.name : user.email.slice(0, 8) }}</p>
                    </div>
                </NuxtLink>
                <div flex="~" items="center" >
                    <div  @click="toggleArrowDown()" cursor="pointer" ref="arrowDownRef" self="center">
                        <Icon class="" text="2xl light" name="ic-baseline-keyboard-arrow-down" />
                    </div>
                </div>
            </div>


            <AuthLogInButton />


            <!-- LOGIN BUTTON -->
            <NuxtLink to="/auth/sign" :class="isLoggedIn() ? 'hidden' : 'visible'" un-text="white center" border="1 rounded-md" py="2" px="4" hover="border-[#0B84FF]" text="lg xl:2xl">انضمام</NuxtLink>
        </div>


        <!-- HUMBERGER ICON -->
        <Icon @click="toggleSidebar()" cursor="pointer" name="ic-baseline-menu" text="light 2xl" justify-self="start" w="1.8em" class="!md:hidden" />
   
         <!--SIDEBAR -->
        <div ref="sidebarRef" w="full" h="full" class="fixed top-0  bottom-0 right-0 left-0 z-25 block md:hidden hideSideBar" transition="all ease-in-out 0.3s">
            <Sidebar :toggleSidebar="toggleSidebar" /> 
        </div>
   
    </header>
</template>

<script setup>
const { isLoggedIn, signOut, user } = useAuth()
const arrowDownRef = ref(null)
const sidebarRef = ref(null)
const route = useRoute()
const DetailRoute = route.path.includes('/events/detail')


const navs = ref([
    { name: 'الصفحة الرئيسية', path: '/' },
    { name: 'الاحداث', path: '/events' },
])


const toggleSidebar = () => {
    sidebarRef.value.classList.toggle('hideSideBar')
}

const toggleArrowDown = () => {
    arrowDownRef.value.classList.toggle('rotate')
}

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

.hideLogo {
    display: none;
}
</style>