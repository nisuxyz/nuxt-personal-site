import { defineCollection } from "#pruvious";

export default defineCollection({
  name: "skills",
  mode: "multi",
  apiRoutes: {
    read: "public",
  },
  fields: {
    name: {
      type: "text",
      options: {
        required: true,
      },
    },
    icon: {
      type: "image",
      options: {
        required: true,
      },
    },
  },
  dashboard: {
    icon: "Tools",
    primaryField: "name",
  },
});
