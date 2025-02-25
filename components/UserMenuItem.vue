<template lang="pug">
// dropdown to logout with generic user icon trigger
div(class="relative")
  button(class="flex items-center space-x-2")
    //PruviousPicture(:image="user?.avatar" :alt="user?.name" class="w-8 h-8 rounded-full")
    span {{ user?.name }}
    PruviousIcon(:icon="ChevronDown")
  div(class="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white dark:bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none")
    //div(class="px-1 py-1")
    //  NuxtLink(to="/profile" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-400")
    //    PruviousIcon(:icon="UserCircle") Profile
    //  NuxtLink(to="/settings" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-400")
    //    PruviousIcon(:icon="Cog") Settings
    div(class="px-1 py-1")
      NuxtLink(to="/" @click="logout" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-400")
        PruviousIcon(:icon="Logout") Logout
</template>

<script setup lang="ts">
import { logout, getUserProfile } from "#pruvious/client";

const user = await getUserProfile();
</script>
