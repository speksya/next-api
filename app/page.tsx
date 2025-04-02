import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { queryClient } from "@/app/query/client";
import { PostsPage } from "@/pages/Posts";
import { getPosts, postsKeys } from "@/shared/api/posts";
import { getTags } from "@/shared/api/tags";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getData = async ({ searchParams }: Props) => {
  const params = await searchParams;

  const filters = params.tag
    ? Array.isArray(params.tag)
      ? params.tag
      : [params.tag]
    : [];

  const [tags] = await Promise.all([
    getTags(),
    queryClient.prefetchQuery({
      queryKey: [postsKeys.getAll, filters],
      queryFn: () => getPosts(filters),
    }),
  ]);

  return tags;
};

const Posts = async ({ searchParams }: Props) => {
  const tags = await getData({ searchParams });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsPage tags={tags} />
    </HydrationBoundary>
  );
};

export default Posts;
