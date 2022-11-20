<template>
    <nav flex="~ " justify="center" px="20" h="20" items="center" bg="#D9D9D9" font="sans" w="100%">
        <NuxtLink to="/" un-text="3xl  black" font="black">EVENTO</NuxtLink>
        <!-- container holds the content in the middle and the end -->
        <div w="90%" h="100%" flex="~" justify="evenly" items="center">
            <ul flex="~ " mx="16" justify="around" font="bold" text="lg" w="70%" xl:text="xl">
                <NuxtLink v-for="nav in navs" :key="nav.name"
        :to="nav.path"   cursor="pointer" un-text="dark">{{ nav.name }}</NuxtLink>
            </ul>
            <!-- container holds the profile information -->
            <NuxtLink v-if="isLoggedIn()" to="/profile" border="2px solid white" flex="~" p=".3em" >
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
            <!-- join button -->
            <NuxtLink to="/auth/sign" :class="isLoggedIn() ? 'hidden' : 'visible'"  un-text="white center" bg="success" border="0 rounded-md" py="3" px="4" w="22" mr="3">انضمام</NuxtLink>
                        <button v-if="isLoggedIn()" @click="signOut"  un-text="white center" bg="success" border="0 rounded-md" py="3" px="3" w="40" mr="3">تسجيل خروج 
                        </button>

        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import userPhoto from "../public/fluent-emoji_man-beard-medium.png"

const arrowDownRef = ref(null)

const toggleArrowDown = () => {
    arrowDownRef.value.classList.toggle('rotate')
}
const navs = [
    {name: 'Home', path: '/'},
    {name: 'My Events', path: '/events'},
    {name: 'Services', path: '/'},
    {name: 'Manage Events', path: '/'}
]
const { isLoggedIn , signOut , user} = useAuth()

</script>

<style>
.rotate {
    transform: rotate(180deg);
}
</style>