import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function markdownH2ToId(str: string) {
  var tmp = str as string;
  return tmp.toLowerCase().replace(/ /g, "-").replace(/[:]/g, "");
}

