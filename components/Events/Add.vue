<template>
    <div>
        <div @click="open = !open" px="4" flex="~ col" justify="center" items="center"
            border="1px solid #33333 rounded-xl" w="233px" h="281px" text="gray-500 xl">
            <Icon name="ic:outline-plus" w="25" h="25" font="bold" />
            <h2>اضافة حدث</h2>
        </div>
        <Teleport to="body">
            <Transition>
                <div v-if="open" @click="open = false" flex="~" items-center justify-center
                    class="fixed inset-0 bg-p  bg-opacity-80" backdrop-blur="sm" z="20">
                    <div  overflow-y="auto" flex="~ col gap-8" items-center p="4" bg="dark opacity-30" text="light" w="2/3" 
                        h="lg" border="1 dark rounded-15px" >
                        ddddddddddddddd
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>
<script setup>
const open = ref(false)
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