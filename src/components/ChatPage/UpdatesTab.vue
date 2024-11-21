<template>
    <section>
      <div
        v-for="(chat, index) in chatItems"
        :key="index"
        class="flex justify-between items-start mb-4"
      >
        <!-- Avatar atau ikon default -->
        <div class="flex items-center space-x-4">
          <div v-if="chat.img" class="w-12 h-12">
            <img :src="chat.img" :alt="chat.title" class="w-12 h-12 rounded" />
          </div>
          <div v-else class="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
            <i class="fas fa-search text-xl text-gray-500"></i>
          </div>
          <!-- Judul chat -->
          <div class="text-sm font-medium text-black leading-5 max-w-[200px]">
            {{ chat.title }}
          </div>
        </div>
        <!-- Waktu chat -->
        <div class="text-sm text-gray-500">{{ chat.time }}</div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Props untuk menerima data chat dari komponen induk
  defineProps({
    chatItems: Array,
  });
  </script>
  