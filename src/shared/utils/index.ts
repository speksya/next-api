import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: Array<ClassValue>) => {
  return twMerge(clsx(inputs));
};

export { cn };
