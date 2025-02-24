import { defineCollection } from "#pruvious";
import { pageLikeCollection } from "#pruvious/standard";

// @see https://pruvious.com/docs/collections
export default defineCollection(
  pageLikeCollection({
    name: "projects",
    pathPrefix: "blog/projects",
    icon: "Briefcase",
    allowedLayouts: ["project"],
    additionalPublicPagesFields: [
      "name",
      "slug",
      "title",
      "author",
      "description",
    ],
    additionalFields: {
      name: {
        type: "text",
        options: {
          label: "Name",
          description: "The name of the project",
        },
      },
      slug: {
        type: "text",
        options: {
          label: "Slug",
          description: "The URL slug of the project",
        },
      },
      title: {
        type: "text",
        options: {
          label: "Title",
          description: "If left empty, the page title will be used",
        },
      },
      description: {
        type: "text",
        options: {
          label: "Description",
          description: "Describe the project",
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
    },
  }),
);
