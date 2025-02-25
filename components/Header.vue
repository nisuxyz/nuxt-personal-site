<script setup lang="ts">
import Container from "./Container.vue";
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";
import DarkModeSwitch from "./DarkModeSwitch.vue";
import { useScrollLock } from "@vueuse/core";
import {
  Menu as HeadlessMenu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { getUserProfile, logout } from "#pruvious/client";

const mobileMenuVisible = useMobileMenuVisible();
const isLocked = useScrollLock(document?.body);
const user = await getUserProfile();

function toggleMobileMenu() {
  mobileMenuVisible.value = !mobileMenuVisible.value;
  window.scrollTo({ top: 0, behavior: "smooth" });
  isLocked.value = mobileMenuVisible.value;
}
</script>

<template>
  <Container>
    <header class="flex items-center justify-between">
      <Logo />
      <div class="flex items-center gap-8">
        <Menu class="ml-auto" />

        <DarkModeSwitch />

        <HeadlessMenu as="div" class="relative inline-block text-left">
          <MenuButton class="-mr-4 pt-1.5">
            <div class="relative">
              <button class="flex items-center space-x-1">
                <Icon name="line-md:account" />
                <Icon name="line-md:chevron-down" />
              </button>
            </div>
          </MenuButton>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div class="bg-stone-800">
              <MenuItems
                class="absolute -translate-x-2/3 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-stone-800 shadow-xl ring-1 ring-black/5 focus:outline-none"
              >
                <div class="px-1 py-1">
                  <MenuItem>
                    <button
                      :class="[
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2',
                      ]"
                    >
                      <Icon name="line-md:account" /> {{ user?.email }}
                    </button>
                  </MenuItem>
                  <hr class="my-1" />
                  <MenuItem v-slot="{ active }">
                    <button
                      @click="logout"
                      :class="[
                        active ? 'bg-stone-700 text-white' : '',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2',
                      ]"
                    >
                      <Icon name="line-md:arrow-close-left" /> Logout
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </div>
          </transition>
        </HeadlessMenu>

        <button
          :title="mobileMenuVisible ? 'Close menu' : 'Open menu'"
          @click="toggleMobileMenu()"
          class="z-20 hidden h-8 w-8 tp:block"
          :class="{
            'sticky top-0': mobileMenuVisible,
            relative: !mobileMenuVisible,
          }"
        >
          <span
            v-for="i in 2"
            class="absolute left-1/2 top-1/2 h-[0.078125rem] w-5 -translate-x-1/2 -translate-y-1/2 bg-black transition-all duration-300 dark:bg-white"
            :class="{
              '-mt-1': i === 1 && !mobileMenuVisible,
              'mt-1': i === 2 && !mobileMenuVisible,
              'rotate-45': i === 1 && mobileMenuVisible,
              '-rotate-45': i === 2 && mobileMenuVisible,
            }"
          ></span>
        </button>
      </div>
    </header>
  </Container>
</template>
