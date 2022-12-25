<template>
    <button text="light 10px sm:sm md:md lg:md xl:xl" cursor="pointer" bg="#212121" h="12" px="5 md:13" border="1 light opacity-10 rounded-15px" w="full" hover="bg-success">
        {{ content }}
    </button>
</template>

<script setup>
const props = defineProps(['content'])
</script>