<template>
    <CostumeContainer w="full" flex="~" justify="around md:evenly" h="20em" dir="ltr">
        <CostumeBox flex="~ col md:row" justify="between" items="center md:start" gap="10" h="fit" rounded="sm">
            <qrcode-vue :value="inputValue" :size="250" level="H"  @click="randomColor()"/>
            <input type="text" v-model="inputValue" class="w-35 h-5 text-white bg-transparent outline-none border-none caret-transparent" placeholder="رقم البطاقة يتولد هنا" tabindex="-1" :ref="inputValue" />
        </CostumeBox>
        <CostumeBox color="#676767">ماسح البطاقات</CostumeBox>
    </CostumeContainer>
</template>

<script setup>
import QrcodeVue from "qrcode.vue"
const inputValue = ref("")

// CLICKING THE QR CODE CHANGES THE COLOR
function randomColor() {
    inputValue.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
</script>