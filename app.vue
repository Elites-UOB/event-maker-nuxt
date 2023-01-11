<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  title: 'Event',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Event Maker',
    },
  ],
  link: [
    {rel: 'icon', type: 'image/png', href: '/icon.png'}
  ]
  
})
</script>
