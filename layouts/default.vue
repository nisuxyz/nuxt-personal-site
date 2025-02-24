<script lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <Header class="mt-12" />

  <div class="my-23 space-y-23">
    <slot />
  </div>

  <Footer class="mb-23" />
</template>
