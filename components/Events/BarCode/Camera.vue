<template>
    <ClientOnly>
        <CostumeContainer w="full" flex="~ col md:row" items="center md:start" justify="center" gap="10" h="fit" dir="ltr" mt="5">
            <CostumeBox v-if="isBrowser" flex="~ col md:row" justify="between" items="center md:between"  gap="20" h="90" rounded="sm" order="2 md:1" w="3/4 md:1/2">
                <div class="w-120 h-100 bg-white"></div>
                <qrcode-stream @init="onInit()" @decode="onDecode()"></qrcode-stream>
            </CostumeBox>
            <p v-else>حدث خطأ في الكاميرا الرجاء رفرش الصفحة</p>
            <CostumeBox color="#676767" ml="10" w="2/7" order="1 md:2" text="md lg:lg" font="black">ماسح البطاقات</CostumeBox>
        </CostumeContainer>
    </ClientOnly>
</template>

<script setup>
// import { QrcodeStream } from "vue3-qrcode-reader"
const Error = ref("")
const decode = ref("")
const isBrowser = typeof window !== 'undefined'
//* THE QR READER CAN'T READS ANY QR CODES BECAUSE IT'S NOT ACTIVATED YET
    async function onInit(promise) {
        try {
            const { capabilities } = await promise
            // successfully initialized
        } catch (error) {
            if (error.name === 'NotAllowedError') {
                Error.value = "user denied camera access permisson"
            } else if (error.name === 'NotFoundError') {
                Error.value = "no suitable camera device installed"
            } else if (error.name === 'NotSupportedError') {
                Error.value = "page is not served over HTTPS (or localhost)"
            } else if (error.name === 'NotReadableError') {
                Error.value = "maybe camera is already in use"
            } else if (error.name === 'OverconstrainedError') {
                Error.value = "did you requested the front camera although there is none?"
            } else if (error.name === 'StreamApiNotSupportedError') {
                Error.value = "browser seems to be lacking features"
            }
            console.log(error)
        }
    }

function onDecode(content) {
    decode.value = content
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