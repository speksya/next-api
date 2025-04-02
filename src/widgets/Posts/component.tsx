"use client";

import type { FC } from "react";

import { PostItem } from "@/entities/Post";
import { useGetAllPosts } from "@/shared/hooks";

const PostsWidget: FC = () => {
  const { data } = useGetAllPosts();

  return (
    <div className="flex flex-col gap-xl">
      {data?.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
};

export { PostsWidget };
