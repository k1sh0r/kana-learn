import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getOptimizedImagePath(src: string): string {
  if (!src.startsWith('/images/')) return src;
  // Remove /images/ and prepend /optimized-images/
  const relPath = src.replace(/^\/images\//, '');
  // Replace extension with .webp
  const newPath = relPath.replace(/\.[a-zA-Z0-9]+$/, '.webp');
  return `/optimized-images/${newPath}`;
}
