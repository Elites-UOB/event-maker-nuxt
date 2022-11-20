<template>
    <aside class="fixed top-0 bottom-0 left-0 h-full w-50 p-5 text-white bg-#0d0a14 font-black z-3" transition="all ease-in-out .3s">
        <Icon id="icon" name="ic-baseline-menu" text="2xl"
            class="text-white cursor-pointer hover:text-black hover:bg-white rounded-xl p" />
        <div flex="~ col" gap="10" items="center" justify="center" h="80%">
            <section>Home</section>
            <section>My Events</section>
            <section>Services</section>
            <section>Manage Events</section>
        </div>
    </aside>
</template>

<style>
.hidden {
    /* right: 100%; */
}
</style>