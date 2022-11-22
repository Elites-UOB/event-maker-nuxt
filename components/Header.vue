<template>
    <nav flex="~ " justify="between lg:center" px="5 lg:10 xl:15" h="20" items="center" bg="#D9D9D9" font="sans"
        w="100%">
        <NuxtLink to="/" un-text="3xl  black" font="black">EVENTO</NuxtLink>
        <!-- container holds the content in the middle and the end -->
        <div w="100%" h="100%" flex="~" justify="evenly" items="center" class="!hidden !md:flex">
            <ul flex="~ " gap=".8em" mx="16" justify="around" font="bold" text="md:md lg:lg xl:xl" w="100%">
                <NuxtLink v-for="nav in navs" :key="nav.name" :to="nav.path" cursor="pointer" un-text="dark">{{ nav.name }}</NuxtLink>
            </ul>
            <!-- container holds the profile information -->
            <NuxtLink v-if="isLoggedIn()" to="/profile" border="2px solid white" flex="~" p=".3em">
                <div>
                    <img :src="userPhoto" alt="user image">
                </div>
                <div flex="~" px=".5em">
                    <div>
                        <h3 font="black">{{ user.email }}</h3>
                        <!-- <p text="sm">helloWorld@gmail.com</p> -->
                    </div>
                    <div @click="toggleArrowDown()" cursor="pointer" ref="arrowDownRef" self="center">
                        <Icon class="" text="2xl" name="ic-baseline-keyboard-arrow-down" />
                    </div>
                </div>
            </NuxtLink>
            <!-- JOIN BUTTON -->
            <NuxtLink to="/auth/sign" :class="isLoggedIn() ? 'hidden' : 'visible'" un-text="white center" bg="success"
                border="0 rounded-md" py="3" px="4" w="22" mr="3">انضمام</NuxtLink>
            <button v-if="isLoggedIn()" @click="signOut" un-text="white center" bg="success" border="0 rounded-md"
                py="3" px="3" w="40" mr="3">تسجيل خروج
            </button>
        </div>
        <!-- HUMBERGER ICON -->
        <Icon  @click="toggleSidebar()" cursor="pointer" name="ic-baseline-menu" text="2xl" class="!md:hidden" />
        <div ref="sidebarRef"  w="full" h="full" class="fixed top-0 bottom-0 right-46.7 left-0 z-3 block md:hidden hideSideBar"  transition="all ease-in-out 0.3s">
            <Sidebar :toggleSidebar="toggleSidebar" />  <!--SIDEBAR -->
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import userPhoto from "../public/fluent-emoji_man-beard-medium.png"
const arrowDownRef = ref(null)
const sidebarRef = ref(null)


const toggleSidebar = () => {
    sidebarRef.value.classList.toggle('hideSideBar')
}

const toggleArrowDown = () => {
    arrowDownRef.value.classList.toggle('rotate')
}

const navs = [
    { name: 'Home', path: '/' },
    { name: 'My Events', path: '/events' },
    { name: 'Services', path: '/' },
    { name: 'Manage Events', path: '/' }
]
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