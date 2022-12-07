<template>
    <div>
        <button text="light sm md:md" bg="#444444" py="2" px="5 sm:10 md:15" border="1 light opacity-10 rounded-md" hover="bg-success">
            {{content}}
        </button>
    </div>
</template>

<script setup>
const props = defineProps(['content'])
</script>