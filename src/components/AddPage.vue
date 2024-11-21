<template>
  <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-end justify-center z-50">
    <!-- Modal Container -->
    <div
      class="bg-white rounded-t-3xl w-full max-w-md p-6 shadow-lg transform transition-transform duration-300"
      :class="{ 'translate-y-0': isVisible, 'translate-y-full': !isVisible }"
    >
       <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <i
          class="fas fa-times text-2xl text-gray-600 cursor-pointer hover:text-red-500"
          @click="$emit('close')"
        ></i>
        <h1 class="text-xl font-bold text-gray-800">Start Creating Now</h1>
        <div></div>
      </div>

      <!-- Options -->
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="option in options"
          :key="option.label"
          class="flex flex-col items-center"
        >
          <button class="bg-gray-100 rounded-full p-4 mb-2 hover:bg-gray-200">
            <i :class="option.iconClass + ' text-2xl text-black'"></i>
          </button>
          <span class="text-black text-sm font-medium">{{ option.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// State untuk kontrol animasi modal
const isVisible = ref(false);

// Data untuk opsi
const options = [
  {label: 'Pin', iconClass: 'fas fa-thumbtack'},
  {label: 'Collage', iconClass: 'fas fa-cut'},
  {label: 'Board', iconClass: 'fas fa-th-large'},
];

onMounted(() => {
  // Menampilkan modal dengan animasi sliding up
  setTimeout(() => {
    isVisible.value = true;
  }, 10);
});
</script>
