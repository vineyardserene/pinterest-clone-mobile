<template>
  <div>
    <!-- Bottom Navigation Bar -->
    <nav class="fixed bottom-0 w-full flex justify-around items-center h-16 bg-white border-t border-gray-200">
      <!-- Home Icon -->
      <button
        class="text-2xl cursor-pointer transition-transform hover:scale-110"
        :class="{ 'text-black': currentIcon === 'home', 'text-gray-500': currentIcon !== 'home' }"
        @click="navigateTo('home')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor">
          <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
        </svg>
      </button>

      <!-- Search Icon -->
      <button
        class="fas fa-search text-2xl cursor-pointer transition-transform hover:scale-110"
        :class="{ 'text-black': currentIcon === 'search', 'text-gray-500': currentIcon !== 'search' }"
        @click="navigateTo('search')"
      ></button>

      <!-- Add Icon -->
      <button
        class="fas fa-plus text-2xl cursor-pointer transition-transform hover:scale-110"
        :class="{ 'text-black': currentIcon === 'add', 'text-gray-500': currentIcon !== 'add' }"
        @click="openModal"
      ></button>

      <!-- Chat Icon -->
      <button
        class="fas fa-comment-dots text-2xl cursor-pointer transition-transform hover:scale-110"
        :class="{ 'text-black': currentIcon === 'chat', 'text-gray-500': currentIcon !== 'chat' }"
        @click="navigateTo('chat')"
      ></button>

      <!-- Profile Icon -->
      <button
        class="rounded-full cursor-pointer transition-transform hover:scale-110 ring-offset-2"
        :class="{ 'ring-2 ring-black': currentIcon === 'profile', 'ring-0': currentIcon !== 'profile' }"
        @click="navigateTo('profile')"
      >
        <img
          alt="Profile picture"
          class="w-8 h-8 rounded-full"
          src="https://storage.googleapis.com/a1aa/image/0wD8EifYj50wAaap8Gw4a9Oyhn3Ndp8U02njsfsty40cjVyTA.jpg"
        />
      </button>
    </nav>

    <!-- Add Page Modal -->
    <AddPage v-if="isModalOpen" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import AddPage from '../components/AddPage.vue';

const isModalOpen = ref(false); // Status modal
const router = useRouter(); // Vue Router instance
const route = useRoute(); // Current route

// Fungsi untuk navigasi
const navigateTo = (page) => {
  if (isModalOpen.value) closeModal(); // Tutup modal jika terbuka
  router.push(`/${page}`).catch((err) => console.error(`Navigasi ke /${page} gagal:`, err));
};

// Buka modal
const openModal = () => {
  isModalOpen.value = true;
};

// Tutup modal
const closeModal = () => {
  isModalOpen.value = false;
};

// Sinkronkan icon aktif berdasarkan URL
const currentIcon = computed(() => {
  const path = route.path.replace('/', ''); // Hapus "/" di depan path
  return path || 'home'; // Jika path kosong, kembalikan 'home'
});

onMounted(() => {
  // Tetapkan icon aktif berdasarkan route awal
  console.log(`Navigasi awal ke: ${route.path}`);
});
</script>