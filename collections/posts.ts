import { defineCollection } from "#pruvious";
import { pageLikeCollection } from "#pruvious/standard";

// @see https://pruvious.com/docs/collections
export default defineCollection(
  pageLikeCollection({
    name: "posts",
    pathPrefix: "blog",
    icon: "Pin",
    allowedLayouts: ["post"],
    additionalPublicPagesFields: ["headline", "project", "author", "category"],
    additionalFields: {
      headline: {
        type: "text",
        options: {
          label: "Headline",
          description: "If left empty, the page title will be used",
        },
      },
      project: {
        type: "record",
        options: {
          collection: "projects",
          populate: true,
        },
      },
      author: {
        type: "record",
        options: {
          collection: "users",
          fields: ["firstName"],
          populate: true,
        },
      },
      category: {
        type: "record",
        options: {
          collection: "categories",
          fields: ["name"],
          populate: true,
        },
      },
    },
  }),
);
