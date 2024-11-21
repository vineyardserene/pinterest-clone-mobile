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
  
      <!-- Filter Buttons -->
      <div class="flex space-x-2">
        <button class="flex items-center px-4 py-2 border rounded-full" @click="filterFavorites">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#5f6368">
            <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" />
          </svg>
        </button>
        <button class="flex items-center px-4 py-2 border rounded-full" @click="filterFavorites">
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
  