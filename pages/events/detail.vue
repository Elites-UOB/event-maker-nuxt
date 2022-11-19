<template>
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
</template>
<script setup>
const tabs = ['Tab 1', 'Tab 2', 'Tab 3']
</script>