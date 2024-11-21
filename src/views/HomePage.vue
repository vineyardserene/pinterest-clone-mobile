<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <Header />

    <!-- Konten Utama (Scrollable) -->
    <main class="flex-1 overflow-y-auto p-4 pb-16">
      <GridItems />
    </main>

    <!-- Navigation -->
    <Navigation />
  </div>
</template>

<script setup>
import Header from '../components/HomePage/HeaderHome.vue';
import GridItems from '../components/HomePage/GridHome.vue';
import Navigation from '../views/NavigationPage.vue';
</script> 
