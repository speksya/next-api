"use client";

import type { Tag } from "@prisma/client";
import type { FC } from "react";

import { cn } from "@/shared/utils";

import { useFilters } from "./hooks";

type Props = {
  tag: Tag;
};

const FilterItem: FC<Props> = ({ tag }) => {
  const { isActive, handleApplyFilter } = useFilters({ slug: tag.slug });

  return (
    <button
      onClick={handleApplyFilter}
      className={cn(
        "flex justify-center items-center gap-sm rounded-xl px-xl py-xs",
        {
          "bg-black border border-black": isActive,
          "bg-white border border-grey-600": !isActive,
        },
      )}
    >
      <span
        className={cn("text-body-s-regular", {
          "text-white": isActive,
          "text-grey-600": !isActive,
        })}
      >
        {tag.title}
      </span>
    </button>
  );
};

export { FilterItem };
