<template>
  <Container>
    <div class="max-w-content space-y-2">
      <h1>{{ title }}</h1>
      <p v-if="kicker" class="text-sm">{{ kicker }}</p>
      <div
        class="mt-3 flex gap-2 text-sm text-gray-500 dark:text-gray-400 border-t pt-1 w-fit"
      >
        <span v-for="(link, idx) of links">
          <span v-if="idx > 0">• </span>
          <NuxtLink
            :to="`${link.url}`"
            class="font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 underline"
            >{{ link.title }}</NuxtLink
          >
        </span>
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { defineBlock, repeaterField, textField } from "#pruvious";

defineBlock({
  icon: "H1",
});

defineProps({
  title: textField({ required: true }),
  kicker: textField(),
  links: repeaterField({
    subfields: {
      title: textField({ required: true }),
      url: textField({ required: true }),
    },
  }),
});
</script>
