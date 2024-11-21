<template>
    <div class="flex items-center justify-between">
      <img
        alt="Profile picture"
        class="rounded-full w-10 h-10"
        src="https://storage.googleapis.com/a1aa/image/ZnflnS6GIL1HD6aVla3DtyEHE9wEcZ40szNkCxOEBPC8TQ5JA.jpg"
      />
      <div class="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
        <button
          class="pb-2 font-semibold"
          :class="{ 'text-black border-b-2 border-black': currentTab === 'Pins', 'text-gray-500': currentTab !== 'Pins' }"
          @click="setTab('Pins')"
        >
          Pins
        </button>
        <button
          class="pb-2 font-semibold"
          :class="{ 'text-black border-b-2 border-black': currentTab === 'Boards', 'text-gray-500': currentTab !== 'Boards' }"
          @click="setTab('Boards')"
        >
          Boards
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    currentTab: String,
    setTab: Function,
  });
  </script>
  