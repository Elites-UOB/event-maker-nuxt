<template>
    <div w="max-7xl" h="full">
        <div><img src="/eve.png" w="full" h="68" class="relative" alt="event image" />
            <div class="absolute" w="full" h="59" left="0" top="28" right="0" bottom="0" style="background: linear-gradient(180deg, rgba(40, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);"></div>
        </div>
        <div flex="~" justify="center md:start" items="center" px="10" xl:pr="30">
            <form @submit.prevent="joinEvent()" flex="~ col gap-8"  w="full sm:3/4 md:1/2 xl:2/6" h="full" pt="20">
                <div flex="~ col gap-1"><label text="light md md:lg lg:xl opacity-60">الاسم الكامل</label>
                    <input  type="text"  bg="#27292B" border="rounded-md light opacity-20" focus="border-success" text="light" p="2 lg:3"  />
                </div>
                <div flex="~ col gap-1"><label text="light md md:lg lg:xl opacity-60">الايميل</label>
                    <input  type="email" bg="#27292B" border="rounded-md light opacity-20" focus="border-success" text="light" p="2 lg:3"  />
                </div>
                <div flex="~ col gap-1"><label text="light md md:lg lg:xl opacity-60">الوصف</label>
                    <textarea  resize="none" bg="#27292B" border="rounded-md light opacity-20" focus="border-success" text="light" p="2 lg:3"  />
                </div>
                <ButtonsBt type="submit" bg="#0284c7" content="ارسال"/>
            </form>
        </div>
    </div>
</template>

<script setup>
import useToastr from "~~/components/toast";
const router = useRouter()
const toast = useToastr()

async function joinEvent() {
    await navigateTo('/events')  
    toast.success("تم الانضمام الي الحدث")
}
</script>