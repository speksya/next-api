"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import type { FC, PropsWithChildren } from "react";

import { queryClient } from "./client";

const QueryProvider: FC<PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { QueryProvider };
