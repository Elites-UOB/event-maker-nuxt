<template>
    <CostumeContainer flex="~" class="flex-wrap ">
        <h1 p="7 xl:10" text="8 light" w="full" mr="35">الداعمين</h1>
        <section grid="~"  gap="8"  mx="auto" md="flex gap-14" lg="gap-20" w="9/12" justify="center" items="center"
            class="lg:grid-cols-4 grid-cols-2">
            <div flex="~ col" justify="center" items="center" gap="6">
                <img :src="UOB" :alt="UNIVERSITY" class="rounded-full w-20  pt-2.5" md="w-25" lg="w-30"/>
                <h1  text="light  center" md="text-xl" class=" font-bold ">UOB</h1>
            </div>
            <div flex="~ col" justify="center" items="center" gap="4">
                <img :src="CONNECT" :alt="CONNECT" class="rounded-full w-20" md="w-25" lg="w-30" />
                <h1 text="light " md="text-xl" class=" font-bold">CONNECT</h1>
            </div>
            <div flex="~ col" justify="center" items="center" gap="4">
                <img :src="GUCD" :alt="GUCD" class="rounded-full w-20" md="w-25" lg="w-30"/>
                <h1 text="light "  md="text-xl" class=" font-bold">GUCD</h1>
            </div>
            <div flex="~ col" justify="center" items="center" gap="4">
                <img :src="MICROSOFT" :alt="MICROSOFT" class="rounded-full w-20"  md="w-25" lg="w-30"/>
                <h1 text="light "  md="text-xl" class=" font-bold">MICROSOFT</h1>
            </div>
        </section>
    </CostumeContainer>
</template>

<script setup>
import UOB from "@/UOB.png"
import CONNECT from "@/connect.png"
import GUCD from "@/gucd.png"
import MICROSOFT from "@/windows.png"
</script>