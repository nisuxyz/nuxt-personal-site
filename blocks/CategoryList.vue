<template lang="pug">
Container.space-y-23
  div(v-for='{headline, author, publishDate, path, posts} of data?.records' :key='path')
    .flex.items-center.gap-8(class='tp:flex-col')
      .flex-1
        h2
          NuxtLink(:to='path') {{ headline }}
          WrittenOn(:author='author' :publishDate='publishDate' class='mt-2 text-vs')
          .prose.mt-4(v-if='description')
            p {{ description }}
        Button.mt-6(:to='path') Read more
        div(v-for='{headline, author, publishDate, path, sharingImage} of posts' :key='path')
          .flex.items-center.gap-8(class="tp:flex-col")
            PruviousPicture(:image='sharingImage' :imgAttrs='{ class: "w-95 h-auto shrink-0 rounded-md tp:w-full" }')
            .flex-1
              h2
                NuxtLink(:to='path') {{ headline }}
              WrittenOn(:author='author' :publishDate='publishDate' class='mt-2 text-vs')
              .prose.mt-4(v-if='description')
                p {{ description }}
              Button(:to='path' class='mt-6') Read more
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

defineBlock({
  icon: "List",
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
>("/api/posts", {
  query: { page, withPosts: true },
});

console.log({ data });
</script>
