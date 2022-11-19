<template>
    <div bg="#D9D9D9" w="100%" lg:w="45em" xl:w="60em"  h="8em" flex="~" items="center">
        <div bg="white" w="7em" h="6em" mx=".5em">
            {{ image }}
        </div>
        <div h="full" w="full" p="1em" flex="~" items="center" >
            {{ content }} <br>
            {{ enterprise }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    enterprise: {
        type: String,
        required: true
    }
}) 
</script>

<style>

</style>