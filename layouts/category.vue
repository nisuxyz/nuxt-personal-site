<template lang="pug">
Header(class="mt-12")

div(class="my-23 space-y-23 border-b pb-23 dark:border-white/10")
  Container
    div(class="max-w-content")
      BackButton(:to="categoryLandingPage") categories
      h1(class="mt-3 text-post-title") {{ page?.fields.name || page?.title }}

  slot

Footer(class="mb-23")
</template>

<script setup lang="ts">
import { defineLayout } from "#pruvious";
import { getCollectionData, usePage } from "#pruvious/client";

defineLayout({
  allowedBlocks: ["Image", "Prose", "CategoryList"],
});

const page = unref(usePage());

const { categoryLandingPage } = await getCollectionData("settings");
</script>
