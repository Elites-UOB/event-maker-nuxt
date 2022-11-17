<template>
    <nav flex="~ " justify="between" px="20" h="20" items="center" bg="#D9D9D9" font="sans" w="100%">
        <NuxtLink to="/" un-text="3xl  black" font="black">EVENTO</NuxtLink>
        <!-- container holds the content in the middle and the end -->
        <div w="90%" h="100%" flex="~" justify="evenly" items="center">
            <ul flex="~" justify="around" font="bold" text="lg" w="80%" xl:text="xl">
                <li cursor="pointer">Home</li>
                <li cursor="pointer">My Events</li>
                <li cursor="pointer">Services</li>
                <li cursor="pointer">Manage Events</li>
            </ul>
            <!-- container holds the profile information -->
            <div border="2px solid white" flex="~" p=".1em">
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
</script>

<style>
.rotate {
    transform: rotate(180deg);
}
</style>