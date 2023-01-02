<template>
    <ClientOnly>
        <CostumeContainer w="full" flex="~ col md:row" items="center md:start" justify="center" gap="10" h="fit" dir="ltr" mt="5">
            <CostumeBox v-if="isBrowser" flex="~ col md:row" justify="between" items="center md:between"  gap="20" h="90" rounded="sm" order="2 md:1" w="3/4 md:1/2">
                <qrcode-stream @init="onInit()"></qrcode-stream>
            </CostumeBox>
            <p v-else>حدث خطأ في الكاميرا الرجاء رفرش الصفحة</p>
            <CostumeBox color="#676767" ml="10" w="2/7" order="1 md:2" text="md lg:lg" font="black">ماسح البطاقات</CostumeBox>
        </CostumeContainer>
    </ClientOnly>
</template>

<script setup>
import { QrcodeStream } from "vue3-qrcode-reader"
const Error = ref("")
const isBrowser = typeof window !== 'undefined'
//! THE QR READER CAN'T READS ANY QR CODES BECAUSE IT'S NOT ACTIVATED YET
    async function onInit(promise) {
        try {
            const { capabilities } = await promise
            // successfully initialized
        } catch (error) {
            if (error.name === 'NotAllowedError') {
                this.Error = "user denied camera access permisson"
            } else if (error.name === 'NotFoundError') {
                this.Error = "no suitable camera device installed"
            } else if (error.name === 'NotSupportedError') {
                this.Error = "page is not served over HTTPS (or localhost)"
            } else if (error.name === 'NotReadableError') {
                this.Error = "maybe camera is already in use"
            } else if (error.name === 'OverconstrainedError') {
                this.Error = "did you requested the front camera although there is none?"
            } else if (error.name === 'StreamApiNotSupportedError') {
                this.Error = "browser seems to be lacking features"
            }
            console.log(error)
        } finally {
            console.log("finally")
        }
    }
onMounted(() => {
    onInit()
})
// CLICKING THE QR CODE CHANGES THE COLOR
// function randomColor() {
//     inputValue.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`
// }
// turn of the ssr for this component



</script>