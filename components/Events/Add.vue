<template>
    <div cursor="pointer">
        <div @click="showModal = !showModal" px="4" flex="~ col" justify="center" items="center"
            border="1px solid #33333 rounded-xl" w="233px" h="281px" text="gray-500 xl">
            <Icon name="ic:outline-plus" w="25" h="25" font="bold" />
            <h2>اضافة حدث</h2>
        </div>
        <Teleport to="body">
            <Transition>
                <va-modal  blur v-model="showModal" background-color="#333" opacity="90" no-outside-dismiss ok-text="اضافة" click-outside  cancel-text="الغاء">
                    <div h="85" pt="10" flex="~col gap-3" justify="center"  items="center">
                        <va-input label="العنوان" bg="#222"   width="4" /><br /><br />
                        <va-input class="mb-4 " v-model="value"  type="textarea" label="الوصف" /><br />
                        <va-input label="رابط الحدث"   /><br />
                        <va-select class="mt-3" label="نوع الرابط"   v-model="selectValue" 
                            :options="options" /><br /><br />
                        <va-date-input v-model="range" /><br />
                    </div>
                </va-modal>
            </Transition>
        </Teleport>
    </div>
</template>
<script >
// const showModal = ref(false)

const datePlusDay = (date, days) => {
    const d = new Date(date)
    d.setDate(d.getDate() + days)
    return d
}
const nextWeek = datePlusDay(new Date(), 7)

export default {
    data() {
        return {
            showModal: false,
            single: new Date(),
            multiple: [new Date(), nextWeek],
            range: { start: new Date(), end: nextWeek },
            inputValue: '',
            selectValue: '',
            inputDate: undefined,
            validation: null,
            options: ['عام', 'خاص'],
            inputRules: [value => value === 'Ben' || 'Should be Ben'],
            selectRules: [value => value === 'Minsk' || 'Should be Minsk'],
            dateRules: [value => !!value || 'Should be date'],
        }
    },

}
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