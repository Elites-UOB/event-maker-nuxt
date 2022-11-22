<template>
    <div flex="~ col">
        <!-- Contents -->
        <div flex="grow">
            <div v-for="item in labels.length" :key="'tab' + item">
                <slot v-if="item == (selectedTab + 1)" :name="`tab-${item}`" />
            </div>
        </div>

        <!-- Header - TABS for Big Screen Devices -->
        
        <div class="absolute hidden md:block" right="10 md:10"  bg="dark" border="rounded-xl">
            <div v-for="(label, index) in labels" :key="label" @click="selectedTab = index" cursor="pointer" :class="[
                selectedTab == index ? 'bg-success text-light' : '',
                index == 0 ? 'rounded-t-xl ' : '',
                index == 2 ? 'rounded-b-xl ' : '',
            ]" p="3">
                <svg v-if="index == 0" w="10"  height="28" viewBox="0 0 22 28" fill="none" flex="~" justify="center" items="center">
                    <Icon name="mdi-file-document" text="white" size="20" />
                </svg>
                <svg v-if="index == 1" w="7"  height="28" viewBox="0 0 32 32" fill="none" flex="~" justify="center" items="center">
                    <Icon name="ic-baseline-people-alt" text="white" size="20" />
                </svg>
                <svg v-if="index == 2" w="7"  height="28" viewBox="0 0 30 24" fill="none" flex="~" justify="center" items="center">
                    <Icon name="mdi-barcode-scan" text="white" size="20"  />
                </svg>
            </div>
        </div>

        <!-- Header - TABS for Small Screen Devices -->

        <div class="absolute md:hidden" top="3" right="40%"  flex="~"  bg="dark" border="rounded-xl">
            <div v-for="(label, index) in labels" :key="label" @click="selectedTab = index" w="fit-content" :class="[
                selectedTab == index ? 'bg-success text-light' : '',
                index == 0 ? 'rounded-r-xl ' : '',
                index == 2 ? 'rounded-l-xl ' : '',
            ]" p="3">
                <svg v-if="index == 0" w="10"  height="28" viewBox="0 0 22 28" fill="none" flex="~" justify="center" items="center">
                    <Icon name="mdi-file-document" text="white" size="20" />
                </svg>
                <svg v-if="index == 1" w="7"  height="28" viewBox="0 0 32 32" fill="none" flex="~" justify="center" items="center">
                    <Icon name="ic-baseline-people-alt" text="white" size="20" />
                </svg>
                <svg v-if="index == 2" w="7"  height="28" viewBox="0 0 30 24" fill="none" flex="~" justify="center" items="center">
                    <Icon name="mdi-barcode-scan" text="white" size="20"  />
                </svg>
            </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps(['labels'])
const selectedTab = ref(0)
</script>
