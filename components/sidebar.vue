<template>
    <aside class="h-full w-full p-5 text-white bg-#0d0a14 font-black" transition="all ease-in-out .3s">
        <div h="10" w="full" flex="~" justify="end">
            <Icon id="icon" name="ic-baseline-menu" text="2xl" @click="toggleSidebar()" cursor="pointer" mt="2"
                class="text-white cursor-pointer hover:text-black hover:bg-white rounded-xl p"
                hover="bg-white rounded-xl" />
        </div>
        <div flex="~ col" gap="10" items="center" justify="center" h="80%">
            <NuxtLink v-for="nav in navs" :to="nav.link" :key="nav.name" @click="toggleSidebar()">
                <section text="white" hover="underline">{{ nav.name }}</section>
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

const navs = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'My Events',
        link: '/events'
    },
    {
        name: 'Services',
        link: '/'
    },
    {
        name: 'Manage Events',
        link: '/'
    }
]


</script>