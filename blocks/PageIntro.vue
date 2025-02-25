<template>
  <Container>
    <div class="max-w-content space-y-2">
      <h1>{{ title }}</h1>
      <div
        class="mt-3 flex gap-1 text-sm text-gray-500 dark:text-gray-400 pt-1 w-fit"
      >
        <p v-if="kicker" class="text-sm mr-1">{{ kicker }}</p>
        <span v-if="links?.length" class="mr-1"
          ><span class="mr-2">|</span>related links:</span
        >
        <span v-for="(link, idx) of links" class="flex gap-1">
          <span v-if="idx > 0">,</span>
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
