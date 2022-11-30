<template>
    <div flex="~ col " h="full" font="sans">
        <Header />
        <div flex="grow">
            <Transition enter-active-class="  transform  duration-800 ease-out" enter-from-class=" opacity-0"
                enter-to-class=" opacity-100" leave-active-class=" transform  " leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <slot />
            </Transition>
        </div>
    </div>
</template>

<style>

</style>