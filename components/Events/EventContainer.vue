<template>
    <div border="1 opacity-30 light rounded-md" w="100%" lg:w="30em" xl:w="50em"  h="8em" flex="~" items="center">
        <img :src="event.img_url" 
         w="7em" h="6em" mx=".5em" alt="event image"/>
            
        <div h="full" w="full" p="1em" flex="~" items="center" text="light">
            {{ content }} <br>
            {{ enterprise }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    event: {
        type: Object,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    enterprise: {
        type: String,
        required: true
    },
})
</script>