import { defineCollection } from "#pruvious";
import { pageLikeCollection } from "#pruvious/standard";

// @see https://pruvious.com/docs/collections
export default defineCollection(
  pageLikeCollection({
    name: "categories",
    pathPrefix: "blog/categories",
    icon: "Folder",
    allowedLayouts: ["category"],
    additionalPublicPagesFields: ["name", "slug"],
    additionalFields: {
      name: {
        type: "text",
        options: {
          label: "Name",
          description: "The name of the category",
        },
      },
      slug: {
        type: "text",
        options: {
          label: "Slug",
          description: "The URL slug of the category",
        },
      },
    },
  }),
);
