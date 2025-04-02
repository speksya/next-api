import type { Tag } from "@prisma/client";
import type { FC, PropsWithChildren } from "react";

import { Header } from "@/widgets/Header";

type Props = {
  title: string;
  tags: Tag[] | undefined;
};

const PostLayout: FC<PropsWithChildren<Props>> = ({
  title,
  tags,
  children,
}) => {
  return (
    <div className="flex flex-col gap-2xl">
      <Header title={title} tags={tags} />
      <div className="p-3xl pt-8xl">{children}</div>
    </div>
  );
};

export { PostLayout };
