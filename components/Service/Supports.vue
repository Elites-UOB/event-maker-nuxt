<template>
    <CostumeContainer flex="~" class="flex-wrap">
        <h1 p="13 xl:20" text="10 white block" w="full" mx="auto">الداعمين</h1>
        <section grid="~" gap="8" my="10" mx="auto" w="10/12" justify="center" items="center"
            class="lg:grid-cols-4 grid-cols-2">
            <div flex="~ col" justify="between" items="center" h="45">
                <img :src="UOB" :alt="UNIVERSITY" class="rounded-full scale-130 pt-2.5" />
                <h1 class="text-2xl font-bold text-center">UOB</h1>
            </div>
            <div flex="~ col" justify="center" items="center" gap="4">
                <img :src="CONNECT" :alt="CONNECT" class="rounded-full" />
                <h1 class="text-2xl font-bold">CONNECT</h1>
            </div>
            <div flex="~ col" justify="center" items="center" gap="4">
                <img :src="GUCD" :alt="GUCD" class="rounded-full" />
                <h1 class="text-2xl font-bold">GUCD</h1>
            </div>
            <div flex="~ col" justify="center" items="center" gap="4">
                <img :src="MICROSOFT" :alt="MICROSOFT" class="rounded-full" />
                <h1 class="text-2xl font-bold">MICROSOFT</h1>
            </div>
        </section>
    </CostumeContainer>
</template>

<script setup>
import UOB from "@/public/UOB.png"
import CONNECT from "@/public/connect.png"
import GUCD from "@/public/gucd.png"
import MICROSOFT from "@/public/windows.png"
</script>