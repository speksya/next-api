import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { searchParamsKeys } from "@/shared/constants";

type Props = {
  slug: string;
};

const useFilters = ({ slug }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const isActive = useMemo(() => {
    return searchParams?.getAll(searchParamsKeys.tag).includes(slug);
  }, [searchParams, slug]);

  const handleApplyFilter = () => {
    const query = new URLSearchParams(searchParams?.toString());
    if (query.has(searchParamsKeys.tag, slug)) {
      query.delete(searchParamsKeys.tag, slug);
    } else {
      query.append(searchParamsKeys.tag, slug);
    }

    window.history.pushState(null, "", `${pathname}?${query}`);
  };

  return {
    isActive,
    handleApplyFilter,
  };
};

export { useFilters };
