<template>
    <nav flex="~ " justify="between" px="20" h="20" left="0" items="center" top="0" bg="#D9D9D9" font="sans" w="100%">
        <NuxtLink to="/" un-text="3xl  black" font="black">EVENTO</NuxtLink>
        <!-- container holds the content in the middle and the end -->
        <div w="90%" h="100%" flex="~" justify="evenly" items="center">
            <ul flex="~" justify="around" font="bold" text="lg" w="80%">
                <li>Home</li>
                <li>My Events</li>
                <li>Services</li>
                <li>Manage Events</li>
            </ul>
            <div border="2px solid white" flex="~" p=".1em">
                <div>
                    <img src="./img/fluent-emoji_man-beard-medium.png" alt="user image">
                </div>
                <div flex="~" px=".5em">
                    <div>
                        <h3>Hassan Mohamed</h3>
                        <p>helloWorld@gmail.com</p>
                    </div>
                    <img @click="toggleArrowDown()" ref="arrowDownRef" class="" cursor="pointer" object="contain"
                        src="./icons/arrowDown.png" alt="arrown down" />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

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