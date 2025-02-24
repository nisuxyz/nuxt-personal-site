<template>
  <Container v-if="!hidden">
    <Container
      class="flex w-full items-center justify-between gap-2 rounded-md bg-blue-100 p-4 text-black"
    >
      <div class="flex items-center gap-2">
        <div class="rounded-full bg-blue-50 p-2 pb-1">
          <Icon name="line-md:alert-circle" />
        </div>
        <h2 class="pl-4">
          <span class="font-semibold">{{ title }}:</span> <br />
          <span v-html="text"></span>
        </h2>
      </div>
      <div
        class="cursor-pointer rounded bg-blue-50 p-1 pb-0 text-blue-500 hover:bg-blue-500 hover:text-white"
        @click="close"
      >
        <Icon name="line-md:close" />
      </div>
    </Container>
  </Container>
</template>

<script setup lang="ts">
import { defineBlock, textField } from "#pruvious";
import Container from "../components/Container.vue";

defineBlock({
  icon: "ExclamationCircle",
});

defineProps({
  title: textField({ label: "Alert title", required: true }),
  text: textField({ label: "Alert text", required: true }),
});

const hidden = ref(false);

const close = () => {
  hidden.value = true;
};
</script>
