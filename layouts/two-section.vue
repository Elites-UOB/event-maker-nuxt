<template>
    <div md:flex="~" mt="12" justify="center" items="start">
        <div flex="basis-2/5 md:basis-1/5">
            <slot name="left" /> 
        </div>
        <div max-w-7xl flex="basis-3/5 md:basis-4/5" display="hidden md:block">
            <slot name="right" />
        </div>
    </div>
</template>