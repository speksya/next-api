import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { postsKeys, getPosts } from "../api/posts";
import { searchParamsKeys } from "../constants";

const useGetAllPosts = () => {
  const searchParams = useSearchParams();

  const filters = useMemo(() => {
    if (!searchParams) return [];
    return searchParams.getAll(searchParamsKeys.tag);
  }, [searchParams]);

  return useQuery({
    queryKey: [postsKeys.getAll, filters],
    queryFn: () => getPosts(filters),
  });
};

export { useGetAllPosts };
