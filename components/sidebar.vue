<template>
    <aside class="h-full w-50 p-5 text-white bg-#0d0a14 font-black" transition="all ease-in-out .3s">
        <div h="10" w="37" flex="~" justify="end">
            <Icon id="icon" name="ic-baseline-menu" text="2xl" @click="toggleSidebar()" cursor="pointer" mt="2" class="text-white cursor-pointer hover:text-black hover:bg-white rounded-xl p" />
        </div>
        <div flex="~ col" gap="10" items="center" justify="center" h="80%">
            <section>Home</section>
            <section>My Events</section>
            <section>Services</section>
            <section>Manage Events</section>
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
</script>