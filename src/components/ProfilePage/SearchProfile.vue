<template>
    <div class="mt-4 space-y-4">
      <!-- Search Bar -->
      <div class="flex items-center space-x-2">
        <div class="relative flex-grow">
          <input
            v-model="searchQuery"
            class="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-700 focus:outline-none"
            placeholder="Search your Pins"
          />
          <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>
        <button class="text-black text-2xl" @click="addItem">+</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // State untuk pencarian
  const searchQuery = ref('');
  
  // Fungsi untuk menangani pencarian
  const addItem = () => {
    console.log('Tambah item baru');
  };
  
  // Fungsi untuk filter
  const filterFavorites = () => {
    console.log('Filter Favorites', searchQuery.value);
  };
  
  const filterCreated = () => {
    console.log('Filter Created');
  };
  </script>
  