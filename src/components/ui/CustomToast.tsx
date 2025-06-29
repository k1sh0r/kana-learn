"use client";
import { useTheme } from "next-themes";
import { X } from "lucide-react";
import React from "react";

interface CustomToastProps {
  title: string;
  description?: string;
  onClose: () => void;
}

const CustomToast: React.FC<CustomToastProps> = ({ title, description, onClose }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={`relative rounded-md border p-4 pr-10 shadow-lg transition-colors bg-background text-foreground border-border flex flex-col gap-1 break-words ${
        isDark ? "bg-zinc-900 text-white border-zinc-800" : "bg-white text-zinc-900 border-zinc-200"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 rounded-md p-1 text-foreground/50 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="font-semibold text-sm mb-1 pr-6 break-words leading-snug">{title}</div>
      {description && <div className="text-xs text-muted-foreground pr-6 break-words leading-snug">{description}</div>}
    </div>
  );
};

export default CustomToast; 