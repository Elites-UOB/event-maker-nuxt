<template>
    <CostumeBox v-if="event" flex="~ col" justify="between" pb="3" border="2px solid #333333 rounded-15px" w="240px lg:250px xl:19.5625em" h="270px lg:280px xl:22.5625em" mx="auto" class="text-right">
        <img src="/eve.png" max-w="full" border="rounded-15px">
        <div flex="~ col" justify-center items-start h="full" mt="3" px="2">
            <h3 font="bold" p="2" w="full" h="1/4" text="md lg:lg xl:2xl white">{{ event?.title  }}</h3>
            <span p="1" text="#FFFFFF 16px" h="1/4" font="400">{{ event?.start_time.slice(0, 10) }} - {{ event?.end_time.slice(0, 10) }}</span>
            <p p="2" text="#FFFFFF 16px" font="400" h="auto">{{ event?.description  }}</p>
        </div>
        <NuxtLink to="/events/detail" bg="white" un-text="black center" font="bold" mx="3" py="4" px="20" border="0 #FFFFFF rounded-15px">انضمام</NuxtLink>
    </CostumeBox>
    <CostumeBox v-else flex="~ col" justify="between" pb="3" border="2px solid #333333 rounded-15px" w="240px lg:250px xl:19.5625em" h="270px lg:280px xl:22.5625em" mx="auto" class="text-right">
        <img src="/eve.png" max-w="full" border="rounded-15px">
        <div flex="~ col" justify-center items-start h="full" mt="3" px="2">
            <h3 font="bold" p="2" w="full" h="1/4" text="md lg:lg xl:2xl white">title</h3>
            <span p="1" text="#FFFFFF 16px" h="1/4" font="400"> start date - end date</span>
            <p p="2" text="#FFFFFF 16px" font="400" h="auto">description</p>
        </div>
        <NuxtLink to="/events/detail" bg="white" un-text="black center" font="bold" mx="3" py="4" px="20" border="0 #FFFFFF rounded-15px">انضمام</NuxtLink>
    </CostumeBox>
</template>

<script setup>
const props = defineProps({
    event: {
        type: Object,
        required: true
    }
})
/*
 title
 description
 start_time
 */
</script>