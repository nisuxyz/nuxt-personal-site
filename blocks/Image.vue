<template>
  <Container
    class="content-block"
    :class="{ 'grid place-items-center w-full': centered }"
  >
    <PruviousPicture
      :image="image"
      class="max-w-content block h-auto overflow-hidden rounded-md"
    />
  </Container>
</template>

<script lang="ts" setup>
import { defineBlock, imageField, checkboxField } from "#pruvious";

defineBlock({
  icon: "Photo",
});

defineProps({
  image: imageField({
    required: true,
    minWidth: 1440,
    sources: [
      { media: "(max-width: 400px)", format: "webp", width: 720 },
      { media: "(max-width: 400px)", format: "jpeg", width: 720 },
      { format: "webp", width: 1440 },
      { format: "jpeg", width: 1440 },
    ],
  }),
  centered: checkboxField({
    label: "Centered",
    default: false,
  }),
});
</script>
