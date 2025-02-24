<template lang="pug">
  Container.space-y-23
    div(v-for='{name, slug, path} of data?.records' :key='path')
      .flex.items-center.gap-8(class='tp:flex-col')
        .flex-1
          h2
            NuxtLink(:to='path') {{ name }}
          Button.mt-6(:to='path') Read more
    .flex.gap-8(v-if='data && data.total > data.perPage')
      Button(v-if='data.currentPage > 1' :to='`${route.path}?page=${data.currentPage - 1}`') Previous page
      Button.ml-auto(v-if='data.lastPage > data.currentPage' :to='`${route.path}?page=${data.currentPage + 1}`')
        | Next page
</template>

<script setup lang="ts">
import {
  defineBlock,
  type PaginateResult,
  type PopulatedFieldType,
} from "#pruvious";
import { getCollectionData } from "#pruvious/client";
import Container from "~/components/Container.vue";

defineBlock({
  icon: "List",
});

const route = useRoute();
const page = computed(() => (route.query.page ? Number(route.query.page) : 1));

const { data } = await useFetch<
  PaginateResult<PopulatedFieldType["categories"]>
>("/api/categories", {
  query: { page },
});

console.log({ data });

if (!data.value?.records.length && (page.value !== 1 || data.value?.total)) {
  if (import.meta.server) {
    throw createError({ statusCode: 404 });
  }
  showError({ statusCode: 404 });
}

// get latest 5 posts for each category
// const posts = await Promise.all(
//   categories.map(async (category) => {
//     const posts = await query("posts")
//       // .whereRecordsIn("categories", [category.id])
//       // .order("publishDate", "desc")
//       // .limit(5)
//       .all();
//     return { category, posts };
//   }),
// );
</script>
