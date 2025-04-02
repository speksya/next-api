import { searchParamsKeys } from "@/shared/constants";

import { apiRoutes } from "../routes";
import type { ErrorResponse, SuccessResponse } from "../types";
import type { Post } from "./types";

const getPosts = async (filters: string[]) => {
  const params = new URLSearchParams();

  filters.forEach((filter) => params.append(searchParamsKeys.tag, filter));

  try {
    const response = await fetch(`${apiRoutes.posts.all}?${params.toString()}`);
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
