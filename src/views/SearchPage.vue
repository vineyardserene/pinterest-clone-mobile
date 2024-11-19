<template>
  <div class="min-h-screen flex flex-col bg-gray-100 font-roboto">
    <!-- Header -->
    <div class="relative">
      <!-- Background Image -->
      <div class="relative">
        <img
          src="https://i.pinimg.com/736x/35/04/c2/3504c215d7fbbbe0770c977630e70b13.jpg"
          alt="Background"
          class="w-full"
        />
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <!-- Search Bar -->
        <div class="absolute top-4 inset-x-0 flex justify-center">
          <div class="relative w-11/12 max-w-md">
            <input
              type="text"
              placeholder="Search for ideas"
              class="w-full p-3 pl-10 rounded-full shadow-md focus:outline-none"
            />
            <i
              class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            ></i>
            <i
              class="fas fa-camera absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            ></i>
          </div>
        </div>
        <!-- Centered Text -->
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p class="text-sm">bisa buat wallpaper</p>
          <h1 class="text-2xl font-bold text-center">
            Kutipan estetik yang bikin semangat
          </h1>
        </div>
      </div>
      <!-- Dots Below Image -->
      <div class="flex justify-center space-x-2 mt-2">
        <span
          v-for="i in 8"
          :key="i"
          class="w-2 h-2 rounded-full bg-gray-600"
          :class="{ 'bg-opacity-70': i === 1, 'bg-opacity-30': i !== 1 }"
        ></span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 overflow-y-auto p-4 pb-16">
      <!-- "Ideas for you" Section -->
      <h2 class="text-sm font-bold mb-2">Ideas for you</h2>
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-bold">Kutipan lelucon</h3>
        <button>
          <i class="fas fa-chevron-right text-gray-500"></i>
        </button>
      </div>
      <div class="flex justify-center overflow-hidden mt-4 space-x-1">
        <!-- Images Row -->
        <img
          src="https://i.pinimg.com/736x/29/35/37/2935378edbb3969dc2b86abf39fe49f6.jpg"
          alt="Meme image 1"
          class="w-1/4 h-48 object-cover rounded-l-lg"
        />
        <img
          src="https://i.pinimg.com/736x/44/16/c2/4416c2a1d05e43075210b5763df06cff.jpg"
          alt="Meme image 2"
          class="w-1/4 h-48 object-cover"
        />
        <img
          src="https://i.pinimg.com/736x/79/96/5e/79965ebc5f540c7c3ca40c882b94c441.jpg"
          alt="Meme image 3"
          class="w-1/4 h-48 object-cover"
        />
        <img
          src="https://i.pinimg.com/736x/19/a8/0f/19a80f470490b3b4b5010739e0fd2b3c.jpg"
          alt="Meme image 4"
          class="w-1/4 h-48 object-cover rounded-r-lg"
        />
      </div>
    </div>

    <!-- Layout Footer (Fixed) -->
    <Layout class="fixed bottom-0 left-0 w-full bg-white shadow-md"></Layout>
  </div>
</template>

<script setup>
import Layout from './Layout.vue';
</script>

<style scoped>
/* Ensure smooth scrolling for the main content */
.flex-1 {
  scroll-behavior: smooth;
}
</style>
