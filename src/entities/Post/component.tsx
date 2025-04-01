import type { Post } from "@prisma/client";
import type { FC } from "react";

type Props = {
  post: Post;
};

const PostItem: FC<Props> = ({ post }) => {
  return (
    <div className="flex flex-col gap-sm rounded-lg border border-grey-400 p-lg">
      <h2 className="text-title-s text-grey-600">{post.title}</h2>
      <p className="text-body-m text-grey-500">{post.body}</p>
      <span className="text-body-s-regular text-grey-600">#{post.id}</span>
    </div>
  );
};

export { PostItem };
