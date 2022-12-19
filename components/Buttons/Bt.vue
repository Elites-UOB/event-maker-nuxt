<template>
    <button text="light 10px sm:sm md:md lg:lg xl:xl" bg="#444444" py="2" px="5 sm:10 md:15" border="1 light opacity-10 rounded-md"
        hover="bg-success">
        {{ content }}
    </button>
</template>

<script setup>
const props = defineProps(['content'])
</script>