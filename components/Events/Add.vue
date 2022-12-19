<template>
    <div cursor="pointer">
        <div @click="showModal = !showModal" px="4" flex="~ col" justify="center" items="center"
            border="1px solid #33333 rounded-xl" w="233px" h="281px" text="gray-500 xl">
            <Icon name="ic:outline-plus" w="25" h="25" font="bold" />
            <h2>اضافة حدث</h2>
            <!-- {{ event.title }} -->
        </div>
        <Teleport to="body">
            <Transition>
                <va-modal  blur v-model="showModal" background-color="#333" opacity="90" no-outside-dismiss ok-text="اضافة"   cancel-text="الغاء" @ok="addEvent">
                    <div h="85" pt="10" flex="~col gap-3" justify="center"  items="center">
                        <va-input v-model="event.title" label="العنوان" bg="#222"   width="4" color="#333" /><br /><br />
                        <va-input class="mb-4 " v-model="event.description" color="#333" type="textarea" label="الوصف" /><br />
                        <va-input label="رابط الحدث" color="#333"  /><br />
                        <va-select class="mt-3" label="نوع الرابط"  color="#111" v-model="selectValue" 
                            :options="options" /><br /><br />
                        <va-date-input v-model="range" color="#333" /><br />
                    </div>
                </va-modal>
            </Transition>
        </Teleport>
    </div>
</template>
<script setup >
// import supabase from '@/lib/supabase'
definePageMeta({
    middleware: 'auth',
})
const event = reactive({
    title: '',
    description: '',
    // link: '',
    // type: '',
    // date: '',
})
// const supabase = useSupabaseClient()

// const { data, error } = await supabase.from('events').select('*')

// const addEvent = async () => {
//     const { data, error } = await supabase
//   .from('events')
//   .insert([
//     { title: event.title},
//     { description: event.description },
//   ])
// }

    


 const showModal = ref(false)
const datePlusDay = (date, days) => {
    const d = new Date(date)
    d.setDate(d.getDate() + days)
    return d
}
const nextWeek = datePlusDay(new Date(), 7)
const single =new Date()
const multiple = [new Date(), nextWeek]
const range = { start: new Date(), end: nextWeek }
const inputValue = ''
const selectValue = ''
const options = ['عام', 'خاص']

</script>
<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>