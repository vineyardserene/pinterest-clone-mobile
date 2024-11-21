<template>
    <div class="columns-2 md:columns-3 gap-4 space-y-4">
      <!-- Item Grid -->
      <div
        v-for="(item, index) in gridItems"
        :key="index"
        class="break-inside-avoid"
      >
        <!-- Gambar -->
        <img
          :src="item.image"
          alt="Grid Item"
          class="w-full h-auto rounded-lg object-cover"
        />
        <!-- Info -->
        <div class="flex justify-between items-center mt-1 px-1">
          <!-- Avatar dan Nama (Jika ada) -->
          <div v-if="item.avatar" class="flex items-center">
            <img
              :src="item.avatar"
              alt="Avatar"
              class="w-6 h-6 rounded-full mr-2"
            />
            <span class="text-sm font-medium truncate">{{ item.name }}</span>
          </div>
          <!-- Ikon Opsi -->
          <i class="fas fa-ellipsis-h text-black cursor-pointer ml-auto"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Data dummy untuk item grid (dipindahkan ke dalam komponen ini)
  const gridItems = ref([
    { image: "https://i.pinimg.com/736x/bb/6f/7e/bb6f7e3ee2bc526ff48a1972050d5046.jpg" },
    { image: "https://i.pinimg.com/736x/02/fc/69/02fc69e7d3d741d116387733bba01225.jpg" },
    { image: "https://i.pinimg.com/736x/33/48/af/3348af2df2cdd6e4e69b32db4211f3af.jpg" },
    {
      image: "https://i.pinimg.com/736x/9a/0f/e1/9a0fe18c1631325afbae0a954eb4809c.jpg",
      avatar: "https://i.pinimg.com/280x280_RS/3c/7d/1a/3c7d1aaa927c1739b44bf95ab4383372.jpg",
      name: "lav",
    },
    {
      image: "https://i.pinimg.com/736x/3a/f6/3f/3af63fda091f086d2f297a9f57e14821.jpg",
      avatar: "https://i.pinimg.com/280x280_RS/27/c9/7d/27c97dec4f324136f683ca4cc66b0d4d.jpg",
      name: "Lovely Shane",
    },
    {
      image: "https://i.pinimg.com/736x/22/b1/d3/22b1d39b14a968f764d5556dd0b424bd.jpg",
      avatar: "https://i.pinimg.com/280x280_RS/a2/76/1f/a2761fbc18c2b78fd085dd344cb2e7a2.jpg",
      name: "boda",
    },
  ]);
  </script>
  