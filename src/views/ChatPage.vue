<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <div class="flex justify-between items-center p-4 border-b border-gray-300">
      <!-- Centered Tabs -->
      <div class="flex space-x-4 mx-auto">
        <div
          :class="{
            'text-center font-bold border-b-2 border-black': activeTab === 'updates',
            'text-center font-normal': activeTab !== 'updates',
          }"
          class="cursor-pointer"
          @click="setActiveTab('updates')"
        >
          Updates
        </div>
        <div
          :class="{
            'text-center font-bold border-b-2 border-black': activeTab === 'inbox',
            'text-center font-normal': activeTab !== 'inbox',
          }"
          class="cursor-pointer"
          @click="setActiveTab('inbox')"
        >
          Inbox
        </div>
      </div>
      <!-- Settings Icon -->
      <i v-if="activeTab === 'updates'" class="fas fa-sliders-h text-2xl text-black"></i>
    </div>

    <!-- Scrollable Content -->
    <div class="flex-1 overflow-y-auto p-4 pb-16">
      <!-- Updates Content -->
      <div v-if="activeTab === 'updates'">
        <div
          v-for="(chat, index) in chatItems"
          :key="index"
          class="flex justify-between items-start mb-4"
        >
          <!-- Left: Chat Avatar or Default Icon -->
          <div class="flex items-center space-x-4">
            <!-- Avatar -->
            <template v-if="chat.img">
              <div class="w-12 h-12">
                <img
                  :src="chat.img"
                  :alt="chat.title"
                  class="w-12 h-12 rounded"
                />
              </div>
            </template>
            <!-- Default Icon (Search) -->
            <template v-else>
              <div class="bg-gray-200 p-2 rounded-full flex items-center justify-center w-12 h-12">
                <i class="fas fa-search text-xl text-gray-500"></i>
              </div>
            </template>

            <!-- Chat Title -->
            <div class="text-sm font-medium text-black leading-5 break-words max-w-[200px]">
              {{ chat.title }}
            </div>
          </div>
          <!-- Right: Time -->
          <div class="text-sm text-gray-500 whitespace-nowrap">{{ chat.time }}</div>
        </div>
      </div>

      <!-- Inbox Content -->
      <div v-if="activeTab === 'inbox'">
        <!-- New Message -->
        <div class="flex items-center mb-6">
          <div class="bg-red-500 text-white rounded-full p-3 flex items-center justify-center">
            <i class="fas fa-pen"></i>
          </div>
          <span class="ml-4 text-xl font-bold">New message</span>
        </div>

        <!-- Contacts Section -->
        <div>
          <div class="text-gray-500 mb-2">Contacts</div>

          <!-- Contact 1 -->
          <div class="flex items-center mb-4">
            <img
              alt="Profile picture of a person"
              class="rounded-full w-10 h-10"
              src="https://storage.googleapis.com/a1aa/image/U6sXfI9eVjvWnEDU45z7uih5ae1cahbS2m4mXARWRLxq06knA.jpg"
            />
            <div class="ml-4">
              <div class="text-black font-bold">Trey Ratcliff</div>
              <div class="text-gray-500">
                Say hello <span class="ml-1">👋</span>
              </div>
            </div>
            <i class="fas fa-chevron-right ml-auto text-gray-500"></i>
          </div>

          <!-- Invite Section -->
          <div class="flex items-center">
            <div class="bg-gray-200 rounded-full p-3 flex items-center justify-center">
              <i class="fas fa-user-plus"></i>
            </div>
            <div class="ml-4">
              <div class="text-black font-bold">Invite your friends</div>
              <div class="text-gray-500">Connect to start chatting</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Layout Footer -->
    <Layout class="fixed bottom-0 left-0 w-full bg-white shadow-md z-10"></Layout>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Layout from './Layout.vue';

const activeTab = ref('updates'); // Default tab is 'updates'

const chatItems = [
  {
    title: "Wallpaper ponsel for you",
    time: "1w",
    img: "https://storage.googleapis.com/a1aa/image/zCxOVQuXT94sOJ0kjAM5fGOmozOdFt6GjBaaroXLD6G6NO5JA.jpg",
  },
  {
    title: "Still searching? Explore ideas related to Walpaper Laptop Estetik Quotes",
    time: "1w",
  },
  {
    title: "Still searching? Explore ideas related to Ocean",
    time: "2w",
  },
  {
    title: "Still searching? Explore ideas related to Logo Pokemon Shadow",
    time: "2w",
  },
  {
    title: "Still searching? Explore ideas related to Headline",
    time: "3w",
  },
  {
    title: "Still searching? Explore ideas related to Selamat Ya",
    time: "3w",
  },
  {
    title: "Still searching? Explore ideas related to Dasar Kamu Penipu",
    time: "4w",
  },
  {
    title: "Still searching? Explore ideas related to Header Game Interactive",
    time: "1mo",
  },
];

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style scoped>
/* Tambahkan padding bottom pada konten */
.flex-1 {
  scroll-behavior: smooth;
}
</style>
