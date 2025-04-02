import type { FC } from "react";

import type { Post } from "@/shared/api/posts";

import { TagItem } from "../Tag/component";

type Props = {
  post: Post;
};

const PostItem: FC<Props> = ({ post }) => {
  return (
    <div className="flex flex-col gap-sm rounded-lg border border-grey-400 p-lg">
      <h2 className="text-title-s text-grey-600">{post.title}</h2>
      <p className="text-body-m text-grey-500">{post.body}</p>
      <div className="flex flex-row items-center gap-xl">
        <span className="text-body-s-regular text-grey-600">#{post.id}</span>
        {post.tags.length > 0 && (
          <div className="flex flex-row items-center gap-lg">
            {post.tags.map((tag) => (
              <TagItem key={tag.id} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { PostItem };
