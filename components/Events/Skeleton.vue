<template>
    <div w-full flex flex-col justify-between items-center gap="10" h="full">
        <h1 text="xl" order-2>جاري تحميل الاحداث</h1>
        <div order-1 class="loading-spinner"></div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.loading-spinner {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>