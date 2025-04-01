import type { Post } from "@prisma/client";
import type { FC } from "react";

import { PostItem } from "@/entities/Post";
import { PostLayout } from "@/shared/layouts/PostLayout";

type Props = {
  posts: Post[] | undefined;
};

const PostsPage: FC<Props> = ({ posts }) => {
  return (
    <PostLayout title="Posts">
      <div className="flex flex-col gap-xl">
        {posts?.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </PostLayout>
  );
};

export { PostsPage };
