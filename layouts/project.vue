<template lang="pug">
  Header(class="mt-12")

  div(class="my-23 space-y-23 border-b pb-23 dark:border-white/10")
    Container
      div(class="max-w-content")
        BackButton(:to="projectLandingPage") project
        h1(class="mt-3 text-post-title") {{ page?.fields.headline || page?.title }}
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
