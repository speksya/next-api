"use client";

import type { FC } from "react";

import { PostItem, PostItemLoader } from "@/entities/Post";
import { useGetAllPosts } from "@/shared/hooks";

const PostsWidget: FC = () => {
  const { data, isLoading } = useGetAllPosts();

  return (
    <div className="flex flex-col gap-xl">
      {isLoading ? (
        <PostItemLoader />
      ) : (
        data?.map((post) => <PostItem key={post.id} post={post} />)
      )}
    </div>
  );
};

export { PostsWidget };
