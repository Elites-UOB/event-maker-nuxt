<template>
    <div w="full">

        <!-- PROFILE COVER -->
        <div class="relative">
            <div class="relative" flex="~ col" justify="end" items="start">
                <img src="/eve.png" w="full" h="52 md:68" alt="event image">
                <ButtonsUpload class="absolute pointer" z="4" :iconname="name" cursor="pointer" />
            </div>
            <div class="absolute" w="full" h="52 md:68 " left="0" top="0" flex="~ col" justify="center" items="center" style="background: linear-gradient(180deg, rgba(40, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);">
            </div>
            <div class="absolute z-3" text="light" flex="~ gap-6" justify="center" items="end" right="10 sm:19 md:25" top="28 sm:26 md:40">
                <div bg="#D9D9D9" class=" relative" alt="calendar" w="80px sm:90px lg:100px" h="80px sm:90px lg:100px" flex="~ col" justify="end" items="start">
                    <ButtonsUpload :iconname="name" cursor="pointer" />
                </div>
            </div>
        </div>


        <!-- PROFILE BIO AND EVENTS  -->
        <div text="light" w="full" mx="auto" py="5">
            <ProfileInfo :input="input" />
        </div>


    </div>
</template>
<script setup >
// I think we need to save the cover image in the database
// and then the src => coverImage ? coverImageFromDatabase : /eve.png
definePageMeta({
    middleware: 'auth',
})
const { user } = useAuth()
const name = "material-symbols:edit"
const input = reactive({
    email: '',
    password: '',
});

</script>