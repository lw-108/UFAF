import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Use ClassValue[] instead of any[]
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
