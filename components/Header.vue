<template>
    <nav flex="~ " justify="center" px="20" h="20" items="center" bg="#D9D9D9" font="sans" w="100%">
        <NuxtLink to="/" un-text="3xl  black" font="black">EVENTO</NuxtLink>
        <!-- container holds the content in the middle and the end -->
        <div w="90%" h="100%" flex="~" justify="evenly" items="center">
            <ul flex="~ " mx="16" justify="around" font="bold" text="lg" w="70%" xl:text="xl">
                <NuxtLink v-for="item in nav" :key="item"  cursor="pointer">{{item.name}}</NuxtLink>
            </ul>
            <!-- container holds the profile information -->
            <div border="2px solid white" flex="~" p=".3em">
                <div>
                    <img :src="userPhoto" alt="user image">
                </div>
                <div flex="~" px=".5em">
                    <div>
                        <h3 font="black">Hassan Mohamed</h3>
                        <p text="sm">helloWorld@gmail.com</p>
                    </div>
                    <div @click="toggleArrowDown()" cursor="pointer" ref="arrowDownRef" self="center">
                        <Icon class="" text="2xl" name="ic-baseline-keyboard-arrow-down" />
                    </div>

                </div>
            </div>
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
const nav = [
    {name: 'Home',link: '/'},
    {name: 'My Events',link: '/'},
    {name: 'Services',link: '/'},
    {name: 'Manage Events',link: '/'}
]

</script>

<style>
.rotate {
    transform: rotate(180deg);
}
</style>