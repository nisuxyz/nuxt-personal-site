<template>
  <Container class="space-y-23">
    <div
      v-for="{
        author,
        description,
        headline,
        path,
        publishDate,
        sharingImage,
      } of data?.records"
      :key="path"
    >
      <div v-if="terminal">
        <Terminal
          host="itsnisu.xyz"
          description="posts"
          :commands="commands"
          inCode="true"
        />
      </div>
      <div v-if="!terminal" class="flex items-center gap-8 tp:flex-col">
        <PruviousPicture
          :image="sharingImage"
          :imgAttrs="{ class: 'w-95 h-auto shrink-0 rounded-md tp:w-full' }"
        />
        <div class="flex-1">
          <h2>
            <NuxtLink :to="path">{{ headline }}</NuxtLink>
          </h2>
          <WrittenOn
            :author="author"
            :publishDate="publishDate"
            class="mt-2 text-vs"
          />
          <div v-if="description" class="prose mt-4">
            <p>{{ description }}</p>
          </div>
          <Button :to="path" class="mt-6">Read more</Button>
        </div>
      </div>
    </div>

    <div v-if="data && data.total > data.perPage" class="flex gap-8">
      <Button
        v-if="data.currentPage > 1"
        :to="`${route.path}?page=${data.currentPage - 1}`"
        >Previous page</Button
      >
      <Button
        v-if="data.lastPage > data.currentPage"
        :to="`${route.path}?page=${data.currentPage + 1}`"
        class="ml-auto"
      >
        Next page
      </Button>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import {
  defineBlock,
  checkboxField,
  textField,
  type PaginateResult,
  type PopulatedFieldType,
} from "#pruvious";
import Terminal from "./Terminal.vue";

defineBlock({
  icon: "List",
});

const props = defineProps({
  terminal: checkboxField({
    label: "Terminal",
    default: false,
  }),
  directory: textField({
    label: "Terminal directory",
    default: "",
  }),
});

const route = useRoute();
const page = computed(() => (route.query.page ? Number(route.query.page) : 1));

const { data } = await useFetch<
  PaginateResult<
    Pick<
      PopulatedFieldType["posts"],
      | "author"
      | "description"
      | "headline"
      | "path"
      | "publishDate"
      | "sharingImage"
    >
  >
>("/api/posts", { query: { page } });

const commands = computed(() => [
  { directory: props.directory, command: "ls", result: data.value?.records },
]);

if (!data.value?.records.length && (page.value !== 1 || data.value?.total)) {
  if (import.meta.server) {
    throw createError({ statusCode: 404 });
  }
  showError({ statusCode: 404 });
}
</script>
