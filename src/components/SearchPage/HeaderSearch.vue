<template>
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
              class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            ></i>
            <i
              class="fas fa-camera absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            ></i>
          </div>
        </div>
        <!-- Centered Text -->
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <p class="text-sm">bisa buat wallpaper</p>
          <h1 class="text-2xl font-bold">
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
  </template>
  