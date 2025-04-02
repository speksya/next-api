import type { Tag } from "@prisma/client";

import { apiRoutes } from "../routes";
import type { ErrorResponse, SuccessResponse } from "../types";

const getTags = async () => {
  try {
    const response = await fetch(apiRoutes.tags.all);
    if (!response.ok) {
      const error: ErrorResponse = await response.json();
      throw new Error(error.message);
    }
    const tags: SuccessResponse<Tag[]> = await response.json();
    return tags.data;
  } catch (error) {
    console.error(error);
  }
};

export { getTags };
