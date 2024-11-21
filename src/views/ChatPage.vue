<template>
  <div class="min-h-screen bg-white p-4">
    <!-- Header -->
    <div class="flex items-center justify-between relative">
      <!-- Tab Buttons -->
      <div class="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
        <button
          class="pb-2 font-semibold"
          :class="{ 'text-black border-b-2 border-black': activeTab === 'Updates', 'text-gray-500': activeTab !== 'Updates' }"
          @click="setTab('Updates')"
        >
          Updates
        </button>
        <button
          class="pb-2 font-semibold"
          :class="{ 'text-black border-b-2 border-black': activeTab === 'Inbox', 'text-gray-500': activeTab !== 'Inbox' }"
          @click="setTab('Inbox')"
        >
          Inbox
        </button>
      </div>

      <!-- Ikon Pengaturan dengan Placeholder -->
      <div class="ml-auto">
        <i
          class="fas fa-sliders-h text-2xl text-black"
          :class="{ 'invisible': activeTab !== 'Updates' }"
        ></i>
      </div>
    </div>

    <!-- Content Rendered Based on Active Tab -->
    <div class="mt-4">
      <component :is="currentComponent" :chat-items="chatItems" />
    </div>
  </div>
  <NavigationPage />
</template>


<script setup>
import { ref, computed } from 'vue';
import UpdatesTab from '../components/ChatPage/UpdatesTab.vue';
import InboxTab from '../components/ChatPage/InboxTab.vue';
import NavigationPage from './NavigationPage.vue';

const activeTab = ref('Updates');

// Chat items data
const chatItems = [
  { title: "Wallpaper ponsel for you", time: "1w", img: "https://storage.googleapis.com/a1aa/image/zCxOVQuXT94sOJ0kjAM5fGOmozOdFt6GjBaaroXLD6G6NO5JA.jpg" },
  { title: "Explore ideas related to Walpaper Laptop Estetik Quotes", time: "1w" },
  { title: "Explore ideas related to Ocean", time: "2w" },
  { title: "Explore ideas related to Logo Pokemon Shadow", time: "2w" },
  { title: "Explore ideas related to Headline", time: "3w" },
  { title: "Explore ideas related to Selamat Ya", time: "3w" },
  { title: "Explore ideas related to Dasar Kamu Penipu", time: "4w" },
  { title: "Explore ideas related to Header Game Interactive", time: "1mo" },
];

// Tentukan komponen yang akan dirender berdasarkan tab
const currentComponent = computed(() => {
  return activeTab.value === 'Updates' ? UpdatesTab : InboxTab;
});

// Fungsi untuk mengubah tab
const setTab = (tab) => {
  activeTab.value = tab;
};
</script>
