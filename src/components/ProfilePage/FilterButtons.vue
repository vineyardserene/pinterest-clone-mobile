<template>
    <div>
      <!-- Kondisional untuk Render Filter -->
      <div v-if="type === 'board'" class="flex space-x-2">
        <!-- Filter untuk Board -->
        <button class="flex items-center px-4 py-2 border rounded-full" @click="filterFavorites">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </button>
        <button class="flex items-center px-4 py-2 border rounded-full" @click="filterFavorites">
          <span>Group</span>
        </button>
        <button class="flex items-center px-4 py-2 border rounded-full" @click="filterCreated">
          <span>Archived</span>
        </button>
      </div>
  
      <div v-if="type === 'pin'" class="flex space-x-2">
        <!-- Filter untuk Pin -->
        <button class="flex items-center px-4 py-2 border rounded-full" @click="filterFavorites">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#5f6368">
            <path
              d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"
            />
          </svg>
        </button>
        <button class="flex items-center px-4 py-2 border rounded-full space-x-2" @click="filterFavorites">
          <i class="fas fa-star"></i>
          <span>Favorites</span>
        </button>
        <button class="flex items-center px-4 py-2 border rounded-full" @click="filterCreated">
          <span>Created by you</span>
        </button>
      </div>
    </div>
  </template>
<script setup>
import { defineProps } from 'vue';

// Menggunakan prop `type` untuk menentukan jenis filter
defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['board', 'pin'].includes(value),
  },
});

const filterFavorites = () => {
  console.log('Filter Favorites');
};

const filterCreated = () => {
  console.log('Filter Created');
};
</script>
  