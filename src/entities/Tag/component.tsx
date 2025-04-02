import type { Tag } from "@prisma/client";
import type { FC } from "react";

import { cn } from "@/shared/utils";

type Props = {
  tag: Tag;
};

const TagItem: FC<Props> = ({ tag }) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-sm rounded-lg px-xl py-sm border border-grey-400",
        `bg-tag-${tag.slug}`,
      )}
    >
      <span className="text-body-s-regular text-grey-600">{tag.title}</span>
    </div>
  );
};

export { TagItem };
