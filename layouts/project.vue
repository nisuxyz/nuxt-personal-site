<template lang="pug">
  Header(class="mt-12")

  div(class="my-23 space-y-23 border-b pb-23 dark:border-white/10")
    Container
      div(class="max-w-content")
        BackButton(:to="projectLandingPage") projects
        h1(class="mt-3 text-post-title") {{ page?.fields.name || page?.title }}
        h2(v-if="page?.fields.description" class="mt-3 text-sm text-gray-500 dark:text-gray-400") #[span(v-if="page?.fields.link") #[a(:href="`https://${page?.fields.link}`" target="_blank" rel="noopener noreferrer" class="underline text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300") {{ page?.fields.link }}] | ] {{ page?.fields.description }}
        WrittenOn(:author="page?.fields.author" :publishDate="page?.publishDate" class="mt-2 text-sm")

    slot

  Footer(class="mb-23")
</template>

<script setup lang="ts">
import { defineLayout } from "#pruvious";
import { getCollectionData, usePage } from "#pruvious/client";

defineLayout({
  allowedBlocks: ["Image", "Prose"],
});

const page = unref(usePage());

const { projectLandingPage } = await getCollectionData("settings");
</script>
