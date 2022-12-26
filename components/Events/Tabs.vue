<template>
    <section flex="~ col">
        <!-- Contents -->
        <CostumeBox>
            <div v-for="item in labels.length" :key="'tab' + item" class="bg-tab" p=" md:x-9"
                border="rounded-rt-lg rounded-b-lg">
                <ClientOnly>
                    <Transition enter-active-class="  transform  duration-800 ease-out" enter-from-class=" opacity-0"
                        enter-to-class=" opacity-100" leave-active-class=" transform  " leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                        <slot v-if="item == (selectedTab + 1)" :name="`tab-${item}`"   />
                    </Transition>
                </ClientOnly>
            </div>
        </CostumeBox>
        <!-- Header - TABS for Big Screen Devices -->
        <CostumeBox class="absolute hidden md:block mr:0 lg:mr-0 xl:mr-20 2xl:mr-30" right="10  md:1/11" bg="dark" border="rounded-xl">
            <div v-for="(label, index) in labels" :key="label" @click="selectedTab = index" cursor="pointer" :class="[
                selectedTab == index ? 'bg-success text-light' : '',
                index == 0 ? 'rounded-t-xl ' : '',
                index == 3 ? 'rounded-b-xl ' : '',
            ]" p="3">
                <Icon name="mdi-file-document" text="white" size="20" fill="none" v-if="index == 0" flex="~" pointer-event="none"
                    justify="center" items="center" />
                <Icon name="ic-baseline-people-alt" v-if="index == 1" text="white" size="20" fill="none" flex="~" pointer-event="none"
                    justify="center" items="center" />
                <Icon name="ri:file-user-fill" v-if="index == 2" text="white" size="20" flex="~" justify="center" pointer-event="none"
                    items="center" />
                <Icon name="mdi-barcode-scan" v-if="index == 3" text="white" size="20" flex="~" justify="center" pointer-event="none"
                    items="center" />
            </div>
        </CostumeBox>


        <!-- Header - TABS for Small Screen Devices -->
       

        <CostumeBox class="absolute md:hidden" top="4" right="4%" flex="~" bg="dark" border="rounded-xl">
            <div v-for="(label, index) in labels" :key="label" @click="selectedTab = index" w="fit-content" :class="[
                selectedTab == index ? 'bg-success text-light' : '',
                index == 0 ? 'rounded-r-xl ' : '',
                index == 3 ? 'rounded-l-xl ' : '',
            ]" p="3" cursor="pointer">
                <Icon name="mdi-file-document" text="white" size="20" fill="none" v-if="index == 0" flex="~" pointer-event="none"
                    justify="center" items="center" />
                <Icon name="ic-baseline-people-alt" v-if="index == 1" text="white" size="20" fill="none" flex="~" pointer-event="none"
                    justify="center" items="center" />
                <Icon name="ri:file-user-fill" v-if="index == 2" text="white" size="20" flex="~" justify="center" pointer-event="none"
                    items="center" />
                <Icon name="mdi-barcode-scan" v-if="index == 3" text="white" size="20" flex="~" justify="center" pointer-event="none"
                    items="center" />
            </div>
        </CostumeBox>
    </section>
</template>

<script setup>
const props = defineProps(['labels'])
const selectedTab = ref(0)

const loading = ref(true);

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>