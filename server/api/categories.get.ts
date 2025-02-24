import { query, resolvePagePath } from "#pruvious/server";
import { isPositiveInteger } from "~/.pruvious";

export default defineEventHandler(async (event) => {
  const qs = getQuery(event);
  const page = qs.page ? Number(qs.page) : 1;
  const withPosts = !!qs.withPosts;

  console.log({ withPosts, qs });

  if (!isPositiveInteger(page)) {
    setResponseStatus(event, 400);
    return `The 'page' query parameter must be a positive integer`;
  }

  const result = await query("categories")
    .selectAll()
    .where("public", true)
    .order("publishDate", "desc")
    .populate()
    .paginate(page, 3);

  return {
    ...result,
    records: await Promise.all(
      result.records.map(async (category) => ({
        ...category,
        path: await resolvePagePath(category.path, "categories"),
        posts: withPosts
          ? await query("posts")
              .selectAll()
              .where("category", category.id)
              .order("publishDate", "desc")
              .limit(3)
              .populate()
              .get()
          : undefined,
      })),
    ),
  };
});
