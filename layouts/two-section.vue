<template>
    <div md:flex="~" mt="12" class="mr-[2em] md:mr-0">
        <div flex="basis-2/5 md:basis-1/5">
            <slot name="left" />
        </div>
        <div flex="basis-3/5  md:basis-4/5">
            <slot name="right" />
        </div>
    </div>
</template>