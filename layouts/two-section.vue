<template>
    <div flex="~" mt="12">
        <div flex="basis-1/5">
            <slot name="left" />
        </div>
        <div flex="basis-4/5">
            <slot name="right" />
        </div>
    </div>
</template>