import type { Post } from "@prisma/client";

import { apiRoutes } from "../routes";
import type { ErrorResponse, SuccessResponse } from "../types";

const getPosts = async () => {
  try {
    const response = await fetch(apiRoutes.posts.all);
    if (!response.ok) {
      const error: ErrorResponse = await response.json();
      throw new Error(error.message);
    }
    const posts: SuccessResponse<Post[]> = await response.json();
    return posts.data;
  } catch (error) {
    console.error(error);
  }
};

export { getPosts };
