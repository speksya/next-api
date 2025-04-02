"use client";

import type { Tag } from "@prisma/client";
import type { FC, PropsWithChildren } from "react";

import { FilterItem } from "@/entities/Filter";

type Props = {
  title: string;
  tags?: Tag[];
};

const Header: FC<PropsWithChildren<Props>> = ({ title, tags }) => {
  return (
    <header className="fixed flex w-full flex-row items-center justify-between border-b border-b-grey-600 bg-white p-xl">
      <h1 className="text-title-l">{title}</h1>
      {tags && (
        <div className="flex flex-row items-center gap-lg">
          {tags.map((tag) => (
            <FilterItem key={tag.id} tag={tag} />
          ))}
        </div>
      )}
    </header>
  );
};

export { Header };
