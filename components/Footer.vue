<template>
  <Container>
    <hr class="mb-16" />
    <p class="w-full text-2xl font-heading font-bold text-center mb-16">
      I'm open for work - hiring, or know someone who is?
      <a class="underline" href="mailto:nisarg.joshi.95@gmail.com"
        >Let's chat!</a
      >
      🚀
    </p>
    <footer class="flex items-center justify-between gap-6 ph:flex-col">
      <p class="text-sm">{{ copyrightText }}</p>

      <ul v-if="socialMedia.length" class="flex flex-wrap gap-4">
        <li v-for="{ icon, link, title } of socialMedia">
          <a
            :href="link"
            :title="title"
            rel="noopener noreferrer nofollow"
            target="_blank"
            class="flex h-5 w-5 rounded-full bg-copy text-white transition dark:bg-white dark:text-heading"
          >
            <PruviousIcon :icon="icon" class="m-auto h-3 w-3" />
          </a>
        </li>
      </ul>
    </footer>
  </Container>
</template>

<script lang="ts" setup>
import { getCollectionData } from "#pruvious/client";

// Fetch data from the Settings collection (cached)
const { copyrightText, socialMedia } = await getCollectionData("settings");
</script>
