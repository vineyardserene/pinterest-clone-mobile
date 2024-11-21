<template>
    <div class="bg-white p-4">
      <div class="flex items-center justify-between">
        <img
          alt="Profile picture"
          class="rounded-full w-10 h-10"
          src="https://storage.googleapis.com/a1aa/image/ZnflnS6GIL1HD6aVla3DtyEHE9wEcZ40szNkCxOEBPC8TQ5JA.jpg"
        />
  
        <div class="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <!-- Tab Buttons -->
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
  
      <!-- Content Rendered Based on Active Tab -->
      <div class="mt-4">
        <component :is="currentComponent" />
      </div>
  
      <!-- Additional Content for Pins -->
      <div v-if="currentTab === 'Pins'" class="space-y-3">
        <Search />
        <Filter type="pin" />
        <GridItems />
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref, computed } from 'vue';
  import GridItems from './GridProfile.vue';
  import Boards from './BoardsProfile.vue';
  import Search from './SearchProfile.vue';
  import Filter from './FilterButtons.vue';
  
  const currentTab = ref('Pins');
  
  // Tentukan komponen yang akan dirender berdasarkan tab
  const currentComponent = computed(() => {
    return currentTab.value === 'Pins' ? null : Boards;
  });
  
  const setTab = (tab) => {
    currentTab.value = tab;
  };
  </script>
  