// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';  
import SearchPage from '@/views/SearchPage.vue'; 
import AddPage from '@/components/AddPage.vue'; 
import ChatPage from '@/views/ChatPage.vue'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    alias: '/home', // Alias untuk navigasi eksplisit
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage,
  },
  {
    path: '/add',
    name: 'add',
    component: AddPage,
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatPage,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
