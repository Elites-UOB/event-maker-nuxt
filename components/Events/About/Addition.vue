<template>
    <CostumeBox flex="~ col sm:row gap-10 wrap" text="white" items="end md:end" my="5">
        <h3 text="#676767" mb="14">الإضافة</h3>
        <div flex="~ row sm:col gap-4" justify="between" mx="auto sm:0" my="4 sm:0" w="60" items="start">
            <label text="#676767 center">الايميل</label>
            <input type="email" text="white" border="4px solid #212121 rounded-15px" bg="transparent" indent="5" p="3"
                w="60" justify-self-end dir="ltr" />
        </div>
        <div flex="~ row sm:col gap-4" justify="between" mx="auto sm:0" my="4 sm:0" w="60 sm:auto" items="start">
            <label text="#676767" mr="2">الصفة</label>
            <select bg="transparent" border="rounded-15px  #212121" class="mr-2 text-white" py="3" px="2 md:5 lg:10" w="60" cursor="pointer">
                <option selected value="حضور" hover="white" bg="#212121" border="rounded-lg">حضور</option>
                <option value="vip" hover="white" bg="#212121" border="rounded-lg">vip</option>
            </select>
        </div>
        <div sm:self-end="center" mx="auto sm:0">
            <ButtonsBt px="3em" content="أضافة" />
        </div>
    </CostumeBox>

</template>