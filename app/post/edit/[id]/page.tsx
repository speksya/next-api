import type { FC } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const UpdatePost: FC<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-title-l">Update Post {id}</h1>
    </div>
  );
};

export default UpdatePost;
