<template>
  <div class="bg-white p-4">
    <!-- Header Section -->
    <HeaderSection :currentTab="currentTab" :setTab="setTab" />

    <!-- Search and Filter Section -->
    <SearchFilter />

    <!-- Main Content -->
    <div class="flex-1 overflow-y-auto p-4">
      <GridItems />
    </div>

    <!-- Navigation -->
    <Navigation />
  </div>
</template>

<script setup>
import HeaderSection from '../components/ProfilePage/HeaderProfile.vue';
import SearchFilter from '../components/ProfilePage/SearchFilterProfile.vue';
import GridItems from '../components/ProfilePage/GridProfile.vue';
import Navigation from '../views/NavigationPage.vue';

import { ref } from 'vue';

const currentTab = ref('Pins');

const setTab = (tab) => {
  currentTab.value = tab;
};
</script>
