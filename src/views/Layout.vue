<template>
  <div>
    <!-- Bottom Navigation Bar -->
    <div class="fixed bottom-0 w-full flex justify-around items-center h-16 bg-white border-t border-gray-200 px-8">
      <!-- Home Icon -->
      <div
        class="icon-container text-2xl cursor-pointer"
        :class="{'text-black': activeIcon === 'home', 'text-gray-500': activeIcon !== 'home'}"
        @click="navigateTo('home')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor">
          <path
            d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
          />
        </svg>
      </div>

      <!-- Search Icon -->
      <i
        class="fas fa-search text-2xl cursor-pointer"
        :class="{'text-black': activeIcon === 'search', 'text-gray-500': activeIcon !== 'search'}"
        @click="navigateTo('search')"
      ></i>

      <!-- Add Icon -->
      <i
        class="fas fa-plus text-2xl cursor-pointer"
        :class="{'text-black': activeIcon === 'add', 'text-gray-500': activeIcon !== 'add'}"
        @click="openModal"
      ></i>

      <!-- Chat Icon -->
      <i
        class="fas fa-comment-dots text-2xl cursor-pointer"
        :class="{'text-black': activeIcon === 'chat', 'text-gray-500': activeIcon !== 'chat'}"
        @click="navigateTo('chat')"
      ></i>

      <!-- Profile Icon -->
      <img
        alt="Profile picture"
        class="w-8 h-8 rounded-full cursor-pointer"
        src="https://storage.googleapis.com/a1aa/image/0wD8EifYj50wAaap8Gw4a9Oyhn3Ndp8U02njsfsty40cjVyTA.jpg"
        :class="{'ring-2 ring-black': activeIcon === 'profile', 'ring-0': activeIcon !== 'profile'}"
        @click="navigateTo('profile')"
      />
    </div>

    <!-- Add Page Modal -->
    <AddPage v-if="isModalOpen" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AddPage from '../components/AddPage.vue';

const activeIcon = ref('home'); // Default active icon
const isModalOpen = ref(false); // State for modal visibility
const router = useRouter(); // Vue Router instance

// Navigate to the specified page
const navigateTo = (page) => {
  if (isModalOpen.value) closeModal(); // Close modal if open
  activeIcon.value = page; // Set active icon
  router.push(`/${page}`).catch((err) => {
    console.error(`Navigation to /${page} failed:`, err);
  }); // Navigate
};

// Open the modal
const openModal = () => {
  activeIcon.value = 'add'; // Set active icon to "add"
  isModalOpen.value = true; // Open modal
};

// Close the modal
const closeModal = () => {
  isModalOpen.value = false; // Close modal
  activeIcon.value = ''; // Reset active icon
};
</script>

<style scoped>
.text-black {
  color: black;
}

.text-gray-500 {
  color: #9ca3af;
}

img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

img:hover {
  transform: scale(1.1);
}
</style>
