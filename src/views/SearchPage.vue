<template>
  <div class="min-h-screen flex flex-col bg-gray-100 font-roboto">
    <!-- Header Section -->
    <HeaderSection />

    <!-- Main Content -->
    <MainContent />

    <!-- Navigation Footer -->
    <Navigation />
  </div>
</template>

<script setup>
import HeaderSection from '../components/SearchPage/HeaderSearch.vue';
import MainContent from '../components/SearchPage/MainContent.vue';
import Navigation from '../views/NavigationPage.vue';
</script>
