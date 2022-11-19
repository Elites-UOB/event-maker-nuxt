<template>
    <div>
        <div><img src="~/public/eve.png" w="full" h="68" class="relative" alt="event image">
            <div class="absolute" w="full" h="64" left="0" top="24"
                style="background: linear-gradient(180deg, rgba(40, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);">
            </div>
            <Icon name="material-symbols:edit" class="absolute" right="4"  top="77" text="2xl light" />

        </div>
        <NuxtLayout name="two-section">
            <template #right>
                <EventsTabs :labels="tabs">
                    <template #tab-1>
                        <EventsDetail />
                    </template>
                    <template #tab-2>
                        <EventsPeople />
                    </template>
                    <template #tab-3>
                        <EventsA />
                    </template>
                </EventsTabs>
            </template>
        </NuxtLayout>
    </div>
</template>
<script setup>
const tabs = ['Tab 1', 'Tab 2', 'Tab 3']
</script>