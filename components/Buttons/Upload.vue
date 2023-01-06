<template>
    <div>
        <label for="file"  >
            <Icon :name="iconname" text="gray-400 2xl" m="2 md:4" />
            <input type="file" ref="inputValueRef" hidden id="file" multiple accept="image/*,.pdf">
        </label>
    </div>
</template>
<script setup>
const props = defineProps(['iconname'])
</script>
