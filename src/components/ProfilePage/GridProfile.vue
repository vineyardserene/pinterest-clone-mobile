<template>
    <div class="columns-2 md:columns-3 gap-4 space-y-4">
      <div
        v-for="(item, index) in gridItems"
        :key="index"
        class="break-inside-avoid"
      >
        <img
          :src="item.image"
          alt="Grid Item"
          class="w-full h-auto rounded-lg object-cover"
        />
        <div class="flex justify-between mt-1 px-1">
          <span class="text-sm font-medium truncate">{{ item.name }}</span>
          <ion-icon name="star-outline"></ion-icon>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const gridItems = ref([
    { image: "https://i.pinimg.com/736x/d5/2e/3f/d52e3f992022d803c9ca2588a6ff4be1.jpg", name: "be good, be bad, just be" },
    { image: "https://i.pinimg.com/736x/21/82/22/218222ab16da32700fab668e5e817e27.jpg", name: "Adriana Lima" },
    { image: "https://i.pinimg.com/736x/95/79/8d/95798dbfb5a807db7ea4dfc813d217cb.jpg" },
    { image: "https://i.pinimg.com/736x/28/06/e1/2806e1aae0f9ab0c21dc1f09d4ea91df.jpg" },
    { image: "https://i.pinimg.com/736x/1b/c2/75/1bc27509b324ae14cbc7c05c948e3a80.jpg" },
    { image: "https://i.pinimg.com/control2/736x/b2/a3/50/b2a3504dcc4f41d92416411406e697d1.jpg" },
  ]);
  </script>
  