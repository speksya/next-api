import type { Tag } from "@prisma/client";
import type { FC } from "react";

import { PostLayout } from "@/shared/layouts/Posts";
import { PostsWidget } from "@/widgets/Posts";

type Props = {
  tags: Tag[] | undefined;
};

const PostsPage: FC<Props> = ({ tags }) => {
  return (
    <PostLayout title="Posts" tags={tags}>
      <PostsWidget />
    </PostLayout>
  );
};

export { PostsPage };
