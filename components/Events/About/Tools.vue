<template>
    <CostumeBox flex="~ sm:row gap-5 md:gap-5 wrap" pr="9" text="white" justify="between" items="end md:end" w="full" my="5">
        <h3 self-start text="#676767" class="hidden md:block">الأدوات</h3>
        <div flex="~ gap-4" justify="center md:center xl:start" w="11/12" h="20" items="end">
            <div w="full">
                <ButtonsBt content="ارسال بريد" />
            </div>
            <div w="full">
                <ButtonsBt content="طباعة البطاقات" />
            </div>
            <div w="full">
                <ButtonsBt content="طباعة القائمة" />
            </div>
        </div>
    </CostumeBox>

</template>