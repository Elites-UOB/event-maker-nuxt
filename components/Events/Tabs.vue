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
                    <Icon name="mdi-file-document" text="white" size="20" fill="none" v-if="index == 0" flex="~" justify="center" items="center" />
                    <Icon name="ic-baseline-people-alt" v-if="index == 1" text="white" size="20" fill="none" flex="~" justify="center" items="center" />
                    <Icon name="mdi-barcode-scan" v-if="index == 2" text="white" size="20" flex="~" justify="center" items="center"  />
            </div>
        </div>

        <!-- Header - TABS for Small Screen Devices -->

        <div class="absolute md:hidden" top="3" right="40%"  flex="~"  bg="dark" border="rounded-xl">
            <div v-for="(label, index) in labels" :key="label" @click="selectedTab = index" w="fit-content" :class="[
                selectedTab == index ? 'bg-success text-light' : '',
                index == 0 ? 'rounded-r-xl ' : '',
                index == 2 ? 'rounded-l-xl ' : '',
            ]" p="3">
                <Icon name="mdi-file-document" text="white" size="20" fill="none" v-if="index == 0" flex="~" justify="center"
                    items="center" />
                <Icon name="ic-baseline-people-alt" v-if="index == 1" text="white" size="20" fill="none" flex="~" justify="center"
                    items="center" />
                <Icon name="mdi-barcode-scan" v-if="index == 2" text="white" size="20" flex="~" justify="center" items="center" />
            </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps(['labels'])
const selectedTab = ref(0)
</script>
