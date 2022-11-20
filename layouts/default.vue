<template>
    <div flex="~ col " h="full" font="sans">
        <Header  />
        <!-- <Sidebar /> -->
        <div flex="grow " >
            <slot />
        </div>
    </div>
</template>