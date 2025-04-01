import type { FC, PropsWithChildren } from "react";

type Props = {
  title: string;
};

const PostLayout: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2xl p-3xl">
      <h1 className="text-title-l">{title}</h1>
      {children}
    </div>
  );
};

export { PostLayout };
