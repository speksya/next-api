"use client";

import type { FC } from "react";
import ContentLoader from "react-content-loader";

const PostItemSkeleton: FC = () => {
  return (
    <div className="flex h-[168px] w-full flex-col rounded-lg border border-grey-400 p-lg">
      <div className="mb-2xl">
        <ContentLoader speed={2} width="30%" height={18}>
          <rect x="0" y="0" rx="4" ry="4" width="100%" height="18" />
        </ContentLoader>
      </div>

      <div>
        <ContentLoader speed={2} width="100%" height={60}>
          <rect x="0" y="0" rx="3" ry="3" width="100%" height="12" />
          <rect x="0" y="18" rx="3" ry="3" width="85%" height="12" />
          <rect x="0" y="36" rx="3" ry="3" width="70%" height="12" />
        </ContentLoader>
      </div>

      <div className="grow"></div>

      <div className="flex flex-row items-center gap-xl">
        <ContentLoader speed={2} width={200} height={26}>
          <rect x="0" y="3" rx="3" ry="3" width="40" height="20" />
          <rect x="60" y="3" rx="10" ry="10" width="50" height="20" />
          <rect x="120" y="3" rx="10" ry="10" width="50" height="20" />
        </ContentLoader>
      </div>
    </div>
  );
};

const PostItemLoader: FC = () => {
  return Array.from({ length: 10 }).map((_, index) => (
    <PostItemSkeleton key={index} />
  ));
};

export { PostItemLoader };
