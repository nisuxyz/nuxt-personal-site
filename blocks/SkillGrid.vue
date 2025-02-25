<template lang="pug">
Container.grid.place-items-center.content-block
  div(class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8")
    div(v-for="(skill, index) of skills" :key="index")
      div(class="flex items-center space-x-3")
        div(class="w-8 h-8")
          PruviousPicture(:image="skill.icon" :alt="skill.name" class="w-8 h-8")
        h3(class="text-lg font-semibold") {{ skill.name }}
      p(class="mt-1 text-sm text-gray-500 dark:text-gray-400") {{ skill.description }}

</template>

<script setup lang="ts">
import { defineBlock, recordsField } from "#pruvious";

defineBlock({
  icon: "LayoutGridAdd",
});

defineProps({
  skills: recordsField({
    collection: "skills",
    fields: {
      name: true,
      icon: true,
    },
    required: true,
    populate: true,
    placeholder: "Add a skill",
  }),
});
</script>
