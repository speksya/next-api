import type { FC, PropsWithChildren } from "react";

import { QueryProvider } from "@/app/query/provider";

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default RootProvider;
