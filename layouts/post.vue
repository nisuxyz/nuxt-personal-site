<template>
  <Header class="mt-12" />

  <div class="my-23 space-y-23 pb-23">
    <Container>
      <div class="max-w-content">
        <BackButton :to="blogLandingPage">blog</BackButton>

        <h1 class="mt-3 text-post-title">
          {{ page?.fields.headline || page?.title }}
        </h1>

        <div class="mt-3 flex gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span v-if="page?.fields.category">
            category:
            <NuxtLink
              :to="`/categories/${page?.fields.category.name}`"
              class="font-medium underline text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
              >{{ page.fields.category.name }}</NuxtLink
            >
          </span>
          <span v-if="page?.fields.project">
            | project:
            <NuxtLink
              :to="`/projects${page.fields.project.path}`"
              class="font-medium underline text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
              >{{ page.fields.project.name }}</NuxtLink
            >
          </span>
        </div>

        <WrittenOn
          :author="page?.fields.author"
          :publishDate="page?.publishDate"
          class="mt-2 text-sm"
        />
      </div>
    </Container>

    <!-- Our post blocks will be rendered here -->
    <slot />
  </div>

  <Footer class="mb-23" />
</template>

<script lang="ts" setup>
import { defineLayout } from "#pruvious";
import { getCollectionData, usePage } from "#pruvious/client";

defineLayout({
  allowedBlocks: ["Image", "Prose", "Terminal"],
});

const page = unref(usePage());

// console.log({ project: page?.fields.project });
const { blogLandingPage } = await getCollectionData("settings");
</script>

<style lang="postcss" scoped>
:deep() .prose > h2 {
  @apply text-2xl;
}

:deep() .prose > h3 {
  @apply text-xl;
}
</style>
