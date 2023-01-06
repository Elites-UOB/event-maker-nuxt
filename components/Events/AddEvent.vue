<template>
    <div cursor="pointer" w="240px lg:250px xl:19.5625em" h="270px lg:280px xl:22.5625em" mx="auto" >
        <div @click="showModal = !showModal" h="full" flex="~ col" justify="center" items="center" border="1px solid #33333 rounded-xl" text="gray-500 xl">
            <Icon name="ic:outline-plus" w="25" h="25" font="bold" />
            <h2>اضافة حدث</h2>
        </div>
        <Teleport to="body">
            <Transition name="va">
                <va-modal blur v-model="showModal" background-color="#333" opacity="90" no-outside-dismiss ok-text="اضافة" cancel-text="الغاء">
                    <div ref="showModal" pt="10" flex="~ col">
                        <va-input label="العنوان" aria-required="true" bg="#222" width="full" color="#333" text="lg" /><br /><br />
                        <va-input class="mb-4 " v-model="value" aria-required="true" color="#333" type="textarea"  label="الوصف" text="lg" /><br />
                        <va-input label="رابط الحدث" aria-required="true" color="#333" text="lg" /><br />
                        <va-select class="mt-3" label="نوع الرابط" aria-required="true" color="#111" v-model="selectValue" :options="options" text="lg" /><br /><br />
                        <va-date-input v-model="range" aria-required="true" color="#333" text="lg" /><br />
                    </div>
                </va-modal>
            </Transition>
        </Teleport>
    </div>
</template>
<script setup>
let showModal = ref(false)
const single = new Date()
const inputValue = ref('')
const selectValue = ref('') 
const nextWeek = datePlusDay(new Date(), 7)
const multiple = [new Date(), nextWeek]
const range = { start: new Date(), end: nextWeek }
const options = ['عام', 'خاص']

// close the modal when clicking outside
onClickOutside(showModal, () => showModal.value = !showModal.value)

function datePlusDay (date, days)  {
    const d = new Date(date)
    d.setDate(d.getDate() + days)
    return d
}


// export default {
//     data() {
//         return {
//             showModal: false,
//             single: new Date(),
//             multiple: [new Date(), nextWeek],
//             range: { start: new Date(), end: nextWeek },
//             inputValue: '',
//             selectValue: '',
//             options: ['عام', 'خاص'],
//         }
//     },

</script>
<style scoped>
.va-enter-active,
.va-leave-active {
    transition: opacity 0.25s ease;
}

.va-enter-from,
.va-leave-to {
    opacity: 0;
}
</style>