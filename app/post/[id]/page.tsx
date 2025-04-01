import type { FC } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const Post: FC<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-title-l">Post {id}</h1>
    </div>
  );
};

export default Post;
