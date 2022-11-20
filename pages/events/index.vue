<template>
    <div text="light">
        <NuxtLink to="/events/detail" flex="~ col gap-12" mt="16" justify="around" items="center" m="auto" w="3/4">
            <EventsEventContainer v-for="event in events" :key="event.id" :event="event" 
            class=" relative " 
                 />
        </NuxtLink>
        {{ events }}
    </div>

</template>
<script setup>
const { supabase } = useSupabase()
const { user } = useAuth()
const events = ref()
///////
events.value = await fetch('http://localhost:3000/events').then(res => res.json())
//////
// if (process.client) {
//     events.value = supabase
//         .from('http://localhost:3000/events/')
//         .select()
//         .eq('user_id', user.value.id)
// }
</script>

