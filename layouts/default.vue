<template>
    <div flex="~ col" h="full" font="sans">
        <Header />
        <main flex="grow">
            <slot />
        </main>
        <!-- <Footer/> -->
    </div>
</template>