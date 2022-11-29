<template>
    <div>
        <button text="light md" bg="#444444" py="2" px="18" border="1 light opacity-10 rounded-md" hover="bg-success">
            {{contant}}
        </button>
    </div>
</template>

<script setup>
const props = defineProps(['contant'])
</script>