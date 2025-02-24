<template>
  <Container class="content-block" :class="{ 'text-center w-full': centered }">
    <PruviousHTML :html="text" class="prose" />
  </Container>
</template>

<script lang="ts" setup>
import { defineBlock, editorField, checkboxField } from "#pruvious";

defineBlock({
  icon: "Pencil",
});

defineProps({
  text: editorField({
    required: true,
    toolbar: [
      "bold",
      "italic",
      "link",
      "heading2",
      "heading3",
      "paragraph",
      "link",
      "bulletList",
    ],
  }),
  centered: checkboxField({
    label: "Centered",
    default: false,
  }),
});
</script>
