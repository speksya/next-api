import type { Prisma } from "@prisma/client";

type Post = {
  post: Prisma.PostGetPayload<{ include: { tags: true } }>;
}["post"];

export type { Post };
