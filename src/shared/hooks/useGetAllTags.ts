import { useQuery } from "@tanstack/react-query";

import { getTags, tagsKeys } from "../api/tags";

const useGetAllTags = () => {
  return useQuery({
    queryKey: [tagsKeys.getAll],
    queryFn: getTags,
  });
};

export { useGetAllTags };
