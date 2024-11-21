<template>
  <div class="space-y-3"> <!-- Memberikan jarak vertikal -->
    <Search /> <!-- Komponen Search -->
    <Filter type="board" /> <!-- Komponen Filter -->
  </div>
</template>

  
  <script setup>
  import Filter from './FilterButtons.vue';
    import Search from './SearchProfile.vue'; // Path relatif ke komponen Search
 
  </script>
  
 
