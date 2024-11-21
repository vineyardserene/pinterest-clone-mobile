<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="flex justify-between items-center p-4 border-b border-gray-300">
      <!-- Navigasi tab -->
      <nav class="flex space-x-4 mx-auto">
        <div
          v-for="tab in tabs"
          :key="tab.name"
          @click="setActiveTab(tab.name)"
          :class="{
            'font-bold border-b-2 border-black': activeTab === tab.name,
            'font-normal': activeTab !== tab.name,
          }"
          class="cursor-pointer text-center"
        >
          {{ tab.label }}
        </div>
      </nav>
      <!-- Ikon pengaturan hanya tampil saat tab aktif adalah 'updates' -->
      <i v-if="activeTab === 'updates'" class="fas fa-sliders-h text-2xl text-black"></i>
    </header>

    <!-- Konten Utama -->
    <main class="flex-1 overflow-y-auto p-4 pb-16">
      <!-- Gunakan komponen sesuai tab aktif -->
      <UpdatesTab v-if="activeTab === 'updates'" :chatItems="chatItems" />
      <InboxTab v-if="activeTab === 'inbox'" />
    </main>

    <!-- Footer -->
    <Navigation class="fixed bottom-0 left-0 w-full bg-white shadow-md"></Navigation>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navigation from '../views/NavigationPage.vue';
import UpdatesTab from '../components/ChatPage/UpdatesTab.vue';
import InboxTab from '../components/ChatPage/InboxTab.vue';

// Tab aktif default adalah 'updates'
const activeTab = ref('updates');

// Daftar tab yang tersedia
const tabs = [
  { name: 'updates', label: 'Updates' },
  { name: 'inbox', label: 'Inbox' },
];

// Daftar item chat
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

// Fungsi untuk mengubah tab aktif
const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>