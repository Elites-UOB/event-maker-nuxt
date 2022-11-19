<template>
    <div flex>
        <div class="opacity-40" text="light" w="40">
            المتقدمين
        </div>
        <div class="text-light" >
            <div class="" flex="~ col" justify="center" items="stert">
                <div class="opacity-40" >
                    <div flex="~ " justify="between"  w="115" >
                        <div>الاسم</div>
                        <div>الايميل</div>
                        <div></div>
                    </div>
                </div>
                <div flex="~ col gap-6" mt="6"   >
                    <div v-for="user in 6" :key="user" flex="~ col-3 gap-35" items="center" border="b  light opacity-20" pb="2">
                        <div>فلان ابن فلان </div>
                        <div>ashleymcdaniel@nebulean.com</div>
                        <div >
                            <button text="light md" bg="dark" class="bg-opacity-20" py="3" px="6" border="1 light opacity-10 rounded-r-xl" hover="bg-success">قبول</button>
                            <button text="light md" bg="dark" class="bg-opacity-20" py="3" px="6" border="1 light opacity-10 rounded-l-xl " hover="bg-error">رفض</button>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</template>
