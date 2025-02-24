<script setup lang="ts">
import Container from "./Container.vue";
// import Logo from './Logo.vue'
import Menu from "./Menu.vue";
import DarkModeSwitch from "./DarkModeSwitch.vue";
</script>

<template>
  <Container>
    <header class="flex items-center gap-6">
      <!-- <Logo /> -->
      nisu's digital garden
      <Menu class="ml-auto" />
      <DarkModeSwitch class="ml-8" />
    </header>
  </Container>
</template>
