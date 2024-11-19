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
          <!-- Pin Option -->
          <div class="flex flex-col items-center">
            <div class="bg-indigo-100 rounded-full p-4 mb-2 hover:bg-indigo-200">
              <i class="fas fa-thumbtack text-2xl text-indigo-600"></i>
            </div>
            <span class="text-gray-700 text-sm font-medium">Pin</span>
          </div>
  
          <!-- Collage Option -->
          <div class="flex flex-col items-center">
            <div class="bg-green-100 rounded-full p-4 mb-2 hover:bg-green-200">
              <i class="fas fa-cut text-2xl text-green-600"></i>
            </div>
            <span class="text-gray-700 text-sm font-medium">Collage</span>
          </div>
  
          <!-- Board Option -->
          <div class="flex flex-col items-center">
            <div class="bg-yellow-100 rounded-full p-4 mb-2 hover:bg-yellow-200">
              <i class="fas fa-th-large text-2xl text-yellow-600"></i>
            </div>
            <span class="text-gray-700 text-sm font-medium">Board</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  
  // Control visibility state for animation
  const isVisible = ref(false);
  
  onMounted(() => {
    // Delay animation to show modal sliding up
    setTimeout(() => {
      isVisible.value = true;
    }, 100); // Delay for animation smoothness
  });
  </script>
   