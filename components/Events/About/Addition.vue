<template>
    <CostumeBox flex="~ sm:row gap-5 md:gap-5 wrap" text="white" justify="between" items="end md:end" w="full" my="5">
        <h3 text="#676767" mb="14" class="hidden md:block">الإضافة</h3>
        <div w="full" flex="~ gap-4" justify="between sm:evenly md:evenly"  items-center>
            <div flex="~ row sm:col gap-4" justify="between" mx="auto sm:0" my="4 sm:0" w="45 sm:43 md:43 lg:80" items="start" >
                <label text="#676767 center" class="hidden md:block">الايميل</label>
                <input type="email" text="white" border="4px solid #212121 rounded-15px" bg="transparent" indent="5" py="3" w="full" justify-self-end dir="ltr" placeholder="الايميل" />
            </div>
            <div flex="~ row sm:col gap-4" justify="between" mx="auto sm:0" my="4 sm:0" w="40 sm:43 md:43 lg:55" items="start">
                <label text="#676767" mr="2" class="hidden md:block">الصفة</label>
                <select bg="transparent" border="rounded-15px #212121" class="mr-2 text-white" py="3" w="full" px="2 md:5 lg:10" cursor="pointer" text="sm">
                    <option selected value="حضور" hover="white" bg="#212121" border="rounded-lg">حضور</option>
                    <option value="vip" hover="white" bg="#212121" border="rounded-lg">vip</option>
                </select>
            </div>
            <div flex="~ col gap-4" justify="end" items="end" sm:self-end="end" mx="auto sm:0" w="30 md:60">
                <p opacity="0" class="hidden md:block">hidden content</p>
                <ButtonsBt content="أضافة" align-self="end" />
            </div>
        </div>
    </CostumeBox>

</template>